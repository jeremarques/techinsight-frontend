<template>
    <form class="w-full max-w-md" @submit.prevent="handleSubmitLogin">
        <div class="mb-6">
            <BaseHiddenLabel forElement="username" text="Seu nome de usuário" />
            <BaseInput 
                id="username"
                iconName="User"
                placeholder="Seu nome de usuário"
                v-model="state.username.value"
                :error="state.username.errorMessage"
                :required="true"
                :autofocus="true"
            />
            <BaseErrorMessageInput :errorMessage="state.username.errorMessage" />
        </div>
        <div class="mb-8">
            <BaseHiddenLabel forElement="password" text="Sua senha" />
            <BasePasswordInput
                id="password"
                placeholder="Sua senha"
                v-model="state.password.value"
                :error="state.password.errorMessage" 
            />
            <BaseErrorMessageInput :errorMessage="state.password.errorMessage" />
        </div>

        <BaseAuthButton 
            :loading="state.isLoading"
            text="Entrar"
        />
        <div class="mt-4 text-center">
            <RouterLink :to="{ name: 'register' }" class="font-regular text-blue-500 h-11 hover:underline text-sm">
                Não possui uma conta? Criar conta
            </RouterLink>
        </div>
    </form>
</template>

<script>
import { reactive } from 'vue';
import { useField } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { validateEmpty } from '@/utils/validators'
import services from '@/services'
import getTokenObjectPayload from '@/utils/auth'
import BaseHiddenLabel from '@/components/BaseHiddenLabel.vue'
import BaseErrorMessageInput from '@/components/BaseErrorMessageInput.vue'
import BasePasswordInput from '@/components/BasePasswordInput.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseAuthButton from '@/components/BaseAuthButton.vue';

export default {
    components: {
        BasePasswordInput,
        BaseInput,
        BaseHiddenLabel,
        BaseErrorMessageInput,
        BaseAuthButton
    },

    setup () {
        const router = useRouter()
        const toast = useToast()

        const {
            value: usernameValue,
            errorMessage: usernameErrorMessage,
        } = useField('username', validateEmpty)

        const {
            value: passwordValue,
            errorMessage: passwordErrorMessage,
        } = useField('password', validateEmpty)

        const state = reactive({
            hasErrors: false,
            isLoading: false,
            username: {
                value: usernameValue,
                errorMessage: usernameErrorMessage,
            },
            password: {
                value: passwordValue,
                errorMessage: passwordErrorMessage,
            }
        })

        async function handleSubmitLogin() {
            try {
                toast.clear()
                state.isLoading = true
                const { data, errors } = await services.auth.login({
                    username: state.username.value,
                    password: state.password.value
                })

                if (!errors) {
                    window.localStorage.setItem('access_token', data.access)
                    window.localStorage.setItem('refresh_token', data.refresh)

                    try {
                        const accessTokenObjectPayload = getTokenObjectPayload(data.access)
                        window.localStorage.setItem('access_token_exp', accessTokenObjectPayload.exp)

                    } catch (err) {
                        console.error('Erro ao obter o tempo de expiração do token:', err)
                    }

                    router.push({ name: 'home-blog' })
                    state.isLoading = false
                    return
                }

                if (errors.status === 401) {
                    toast.error('Nome de usuário ou senha inválidos. Por favor, tente novamente.')
                }
                if (errors.status === 400) {
                    toast.error('Ocorreu um erro ao tentar fazer o login. Por favor, tente novamente.')
                }

                state.isLoading = false

            } catch (err) {
                state.isLoading = false
                state.hasErrors = !!err
                toast.error('Ocorreu um erro ao tentar fazer o login. Por favor, tente novamente mais tarde.')
            }
        }

        return {
            state,
            handleSubmitLogin
        }
    }
}
</script>