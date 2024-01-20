<template>
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import services from './services'
import consoleWelcomeMessage from './utils/console'
import { handleThemePage } from './utils/theme'

export default {
    setup () {
        const userStore = useUserStore()
        const router = useRouter()
        
        router.beforeEach(async (to, from, next) => {
            if (!import.meta.env.VITE_DEBUG) {
                consoleWelcomeMessage()
            }
            handleThemePage()
            window.document.title = to.meta?.title ?? 'FastInsight'

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
                const { data: userProfileData } = await services.users.getMeProfile()
                userStore.setCurrentUserProfile(userProfileData)
                next()
                
            } else {
                if (to.meta.hasAuth) {
                    next({ name: 'login' })
                } else {
                    next()
                }
            }
        })
    }
}
</script>
