import axios from 'axios'
import AuthService from './auth'
import UsersServices from './users'
import PostsServices from './posts'
import router from '../router'

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

httpClient.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('access_token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

httpClient.interceptors.response.use((response) => response, (error) => {
    const canThrowAnError = error.request.status === 0 || error.request.status === 500

    if (canThrowAnError) {
        throw new Error(error.message)
    }

    if (error.request.status === 401) {
        router.push({ name: 'login' })
    }

    return error
})

export default {
    auth: AuthService(httpClient),
    users: UsersServices(httpClient),
    posts: PostsServices(httpClient)
}