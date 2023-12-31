import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const BlogLayout = () => import('../views/Blog/BlogLayout.vue')
const HomeBlog = () => import('../views/Blog/Home.vue')
const Login = () => import('../views/Login/index.vue')
const Register = () => import('../views/Register/index.vue')

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/',
            component: BlogLayout,
            meta: {
                hasAuth: true,
            },
            children: [
                {
                    path: '',
                    name: 'Home-blog',
                    component: HomeBlog,
                    meta:{
                        hasAuth: true,
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/posts',
                    name: 'posts',
                    component: Login,
                    meta:{
                        hasAuth: true,
                        layout: 'BlogLayout',
                    }
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: 'Home' }
        }
    ]
})

export default router
