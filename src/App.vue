<template>
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import services from './services'
import consoleWelcomeMessage from './utils/console'

export default {
    setup () {
        const userStore = useUserStore()
        const router = useRouter()

        router.beforeEach(async (to, from, next) => {
            if (!import.meta.env.VITE_DEBUG)
                consoleWelcomeMessage()

            if (to.meta.hasAuth) {
                const token = window.localStorage.getItem('access_token')
                const tokenExp = window.localStorage.getItem('access_token_exp')

                if (token) {
                    if (tokenExp) {
                        const nowDateTime = new Date(Date.now())
                        const tokenExpDateTime = new Date(tokenExp * 1000)

                        if (tokenExpDateTime > nowDateTime) {
                            const timeToExpire = tokenExpDateTime - nowDateTime
                            const refreshThreshold = 15 * (60 * 1000)
                            if (timeToExpire < refreshThreshold) {
                                await services.auth.refreshToken()
                            }
                        } else {
                            services.auth.logout()
                            next()
                        }
                    }
                    const { data: userData } = await services.users.getMe()
                    userStore.setCurrentUser(userData)
                    next()

                } else {
                    next({ name: 'Login' })
                }
            } else {
                next()
            }
        })
    }
}
</script>
