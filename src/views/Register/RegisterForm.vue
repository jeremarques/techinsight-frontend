<template>
    <form @submit.prevent="handleSubmitRegister" class="w-full max-w-md">
        <div class="mb-4">
            <BaseHiddenLabel forElement="full_name" text="Seu nome" />
            <BaseInput 
                id="full_name"
                iconName="User"
                placeholder="Seu nome"
                v-model="state.name.value"
                :error="state.name.errorMessage"
                :autofocus="true"
                :required="true"
            />
            <BaseErrorMessageInput :errorMessage="state.name.errorMessage" />
        </div>
        <div class="mb-4">
            <BaseHiddenLabel forElement="email" text="Seu e-mail" />
            <BaseInput 
                id="email"
                type="email"
                iconName="Mail"
                placeholder="Seu e-mail"
                v-model="state.email.value"
                :error="state.email.errorMessage"
                :required="true"
            />
            <BaseErrorMessageInput :errorMessage="state.email.errorMessage" />
        </div>
        <div class="mb-4">
            <BaseHiddenLabel forElement="username" text="Nome de usuário" />
            <BaseInput 
                id="username"
                iconName="User"
                placeholder="Nome de usuário"
                v-model="state.username.value"
                :error="state.username.errorMessage"
                :required="true"
            />
            <BaseErrorMessageInput :errorMessage="state.username.errorMessage" />
        </div>
        <div class="mb-4">
            <BaseHiddenLabel forElement="password" text="Senha" />
            <BasePasswordInput
                id="password"
                placeholder="Senha"
                v-model="state.password.value"
                :error="state.password.errorMessage"
            />
            <BaseErrorMessageInput :errorMessage="state.password.errorMessage" />
        </div>
        <div class="mb-8">
            <BaseHiddenLabel forElement="confirm_password" text="Confirmar Senha" />
            <BasePasswordInput
                id="confirm_password"
                placeholder="Confirmar Senha"
                v-model="state.confirmPassword.value"
                :error="state.confirmPassword.errorMessage"
            />
            <BaseErrorMessageInput :errorMessage="state.confirmPassword.errorMessage" />
        </div>

        <BaseAuthButton 
            :loading="state.isLoading"
            text="Criar conta"
        />
        <div class="mt-4 text-center ">
            <RouterLink :to="{ name: 'login' }" class="text-sm font-regular text-blue-500 hover:underline">
                Já tem uma conta?
            </RouterLink>
        </div>
    </form>
</template>

<script setup>
import { watch, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useField } from 'vee-validate'
import {
    validateEmpty,
    validateUsername,
    validateEmail,
    validatePassword,
} from '@/utils/validators'
import getTokenObjectPayload from '@/utils/auth'
import { useToast } from 'vue-toastification'
import services from '@/services'
import BasePasswordInput from '@/components/BasePasswordInput.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseHiddenLabel from '@/components/BaseHiddenLabel.vue'
import BaseErrorMessageInput from '@/components/BaseErrorMessageInput.vue'
import BaseAuthButton from '@/components/BaseAuthButton.vue'

const router = useRouter()
const toast = useToast()

const {
    value: nameValue,
    errorMessage: nameErrorMessage
} = useField('full_name', validateEmpty)

const {
    value: emailValue,
    errorMessage: emailErrorMessage,
    setErrors: setErrorsEmail
} = useField('email', validateEmail)

const {
    value: usernameValue,
    errorMessage: usernameErrorMessage,
    setErrors: setErrorsUsername
} = useField('username', validateUsername)

const {
    value: passwordValue,
    errorMessage: passwordErrorMessage
} = useField('password', validatePassword)

const state = reactive({
    isLoading: false,
    hasErrors: false,
    name: {
        value: nameValue,
        errorMessage: nameErrorMessage
    },
    email: {
        value: emailValue,
        errorMessage: emailErrorMessage
    },
    username: {
        value: usernameValue,
        errorMessage: usernameErrorMessage
    },
    password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage,
    },
    confirmPassword: {
        value: '',
        errorMessage: '',
    },
})

function validatePasswordConfirmation() {
    if (!state.password.value)
        return state.confirmPassword.errorMessage = ''

    if (state.password.value) {
        if (!state.confirmPassword.value)
            return state.confirmPassword.errorMessage = 'Este campo é obrigatório'

        if (state.confirmPassword.value !== state.password.value)
            return state.confirmPassword.errorMessage = 'As senhas devem ser iguais'
        else
            return state.confirmPassword.errorMessage = ''
    }
}

watch(() => state.confirmPassword.value, validatePasswordConfirmation)

async function login({ username, password }) {

    const { data, errors } = await services.auth.login({
        username,
        password
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
        return
    }

    if (errors.status === 401) {
        toast.error('Nome de usuário ou senha inválidos. Por favor, tente novamente.')
    }
    if (errors.status === 400) {
        toast.error('Ocorreu um erro ao tentar fazer o login. Por favor, tente novamente.')
    }
}

async function handleSubmitRegister() {
    try {
        if (
            !!state.name.errorMessage ||
            !!state.email.errorMessage ||
            !!state.username.errorMessage ||
            !!state.password.errorMessage ||
            !!state.confirmPassword.errorMessage
        ) {
            toast.clear()
            toast.error('Por favor, insira dados válidos para continuar.')
            return
        }

        state.isLoading = true
        toast.clear()

        const { errors } = await services.auth.register({
            full_name: state.name.value,
            email: state.email.value,
            username: state.username.value,
            password: state.password.value,
            confirm_password: state.confirmPassword.value
        })

        if (!errors) {
            try {
                await login({
                    username: state.username.value,
                    password: state.password.value
                })

            } catch (err) {
                toast.error('Ops! A conta foi criada porém não foi possível fazer o login. Tente novamente.')
            }
            state.isLoading = false
            return
        }

        if (errors.usernameError && errors.emailError) {
            state.isLoading = false
            toast.error('Ops! O nome de usuário e o email já existem.')
            setErrorsUsername('O nome de usuário já existe.')
            if (errors.emailError !== 'Esse campo deve ser  único.') {
                setErrorsEmail(errors.emailError)
            } else {
                setErrorsEmail('O email já existe.')
            }
            return
        }

        if (errors.usernameError) {
            state.isLoading = false
            toast.error('Ops! Esse nome de usuário já existe.')
            setErrorsUsername('O nome de usuário já existe.')
            return
        }

        if (errors.emailError) {
            state.isLoading = false
            if (errors.emailError !== 'Esse campo deve ser  único.') {
                setErrorsEmail(errors.emailError)
                toast.error(errors.emailError)
            } else {
                setErrorsEmail('O email já existe')
                toast.error('Ops! Já existe uma conta registrada com este email.')
            }
            return
        }

        if (errors.status === 400) {
            state.isLoading = false
            toast.error('Ocorreu um erro ao criar a conta. Por favor, tente novamente.')
            return
        }

    } catch (err) {
        state.isLoading = false
        state.hasErrors = !!err
        toast.error('Ocorreu um erro ao criar a conta. Por favor, tente novamente mais tarde.')
        console.log(err)
    }
}
</script>