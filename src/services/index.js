import axios from 'axios'
import AuthService from './auth'
import UsersServices from './users'
import PostsServices from './post'
import TagsServices from './tags'
import PorfileServices from './profile'
import CommentServices from './comment'
import LikeServices from './like'
import FollowServices from './follow'
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
    const token = window.localStorage.getItem('access_token')

    if (canThrowAnError) {
        throw new Error(error.message)
    }

    if (error.request.status === 401) {
        if (token) {
            AuthService(httpClient).logout()
            router.push({ name: 'login' })
        } else {
            router.push({ name: 'login' })            
        }
    }

    return error
})

export default {
    auth: AuthService(httpClient),
    users: UsersServices(httpClient),
    post: PostsServices(httpClient),
    tags: TagsServices(httpClient),
    profile: PorfileServices(httpClient),
    comment: CommentServices(httpClient),
    like: LikeServices(httpClient),
    follow: FollowServices(httpClient),
}