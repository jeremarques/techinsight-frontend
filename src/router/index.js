import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home/index.vue')
const Login = () => import('@/views/Login/index.vue')
const Register = () => import('@/views/Register/index.vue')
const BlogLayout = () => import('@/views/Blog/BlogLayout.vue')
const HomeBlog = () => import('@/views/Blog/Home/index.vue')
const Post = () => import('@/views/Blog/Post/index.vue')
const NewPost = () => import('@/views/Blog/NewPost/index.vue')

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/',
            component: BlogLayout,
            children: [
                {
                    path: '',
                    name: 'home-blog',
                    component: HomeBlog,
                    meta: {
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/:username/:slugAndId',
                    name: 'post',
                    component: Post,
                    meta: {
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/new-insight',
                    name: 'new-insight',
                    component: NewPost,
                    meta: {
                        hasAuth: true,
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/:slug/posts',
                    name: 'tag-posts',
                    component: Login,
                    meta: {
                        layout: 'BlogLayout',
                    }
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: 'home' }
        }
    ]
})

export default router
