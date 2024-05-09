import router from '../router'
import getTokenObjectPayload from '../utils/auth'

export default httpClient => ({
    register: async ({ full_name, email, username, password, confirm_password }) => {
        const response = await httpClient.post('/register/', {
            full_name,
            email,
            username,
            password,
            confirm_password
        })

        let errors = null

        if (!response.data) {
            const dataErrors = response.response?.data
            errors = {
                status: response.request.status,
                statusText: response.request.statusText,
                emailError: dataErrors.email?.[0],
                usernameError: dataErrors.username?.[0]
            }
        }

        return {
            data: response.data,
            errors
        }
    },
    login: async ({ username, password }) => {
        const response = await httpClient.post('/login/', {
            username,
            password
        })

        let errors = null

        if (!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }

        return {
            data: response.data,
            errors
        }
    },
    logout: () => {
        window.localStorage.removeItem('access_token')
        window.localStorage.removeItem('refresh_token')
        window.localStorage.removeItem('access_token_exp')

        router.push({ name: 'login' })
    },
    checkAuth: async () => {
        const token = window.localStorage.getItem('access_token')
    },
    refreshToken: async () => {
        const refreshToken = window.localStorage.getItem('refresh_token')
        const response = await httpClient.post('/login/refresh/', {
            refresh: refreshToken
        })
        const data = response.data
        const accessTokenObjectPayload = getTokenObjectPayload(data.access)
        window.localStorage.setItem('access_token', data.access)
        window.localStorage.setItem('access_token_exp', accessTokenObjectPayload.exp)
    },
})