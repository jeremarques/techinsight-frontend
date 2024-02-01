import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home/index.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/index.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/Register/index.vue')
        },
        {
            path: '/new-insight',
            name: 'new-insight',
            component: () => import('@/views/Blog/NewPost/index.vue'),
            meta: {
                hasAuth: true,
                layout: 'BlogLayout',
            }
        },
        {
            path: '/',
            component: () => import('@/views/Blog/BlogLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'home-blog',
                    component: () => import('@/views/Blog/Home/index.vue'),
                    meta: {
                        title: 'FastInsight | Compartilhe seu conhecimento com todos',
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/:username',
                    name: 'view-profile',
                    component: () => import('@/views/Blog/Profile/index.vue'),
                    meta: {
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/:username/:slugAndId',
                    name: 'post',
                    component: () => import('@/views/Blog/Post/index.vue'),
                    meta: {
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/:slug/posts',
                    name: 'tag-posts',
                    component: () => import('@/views/Login/index.vue'),
                    meta: {
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/not-found',
                    name: 'not-found',
                    component: () => import('@/components/NotFoundPage.vue'),
                    meta: {
                        title: 'FastInsight | Oops... Esta página não existe',
                        layout: 'BlogLayout'
                    }
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: 'home-blog' }
        }

    ]
})

export default router
