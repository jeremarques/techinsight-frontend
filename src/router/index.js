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
                        title: 'TechInsight | Compartilhe seu conhecimento com todos',
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/:username',
                    name: 'user-profile',
                    component: () => import('@/views/Blog/Profile/index.vue'),
                    meta: {
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/me/profile',
                    name: 'edit-user-profile',
                    component: () => import('@/views/Blog/EditProfile/index.vue'),
                    meta: {
                        hasAuth: true,
                        title: 'Editar perfil',
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
                    path: '/tags/:tagSlug/posts',
                    name: 'tag-posts',
                    component: () => import('@/views/Blog/Tags/index.vue'),
                    meta: {
                        layout: 'BlogLayout',
                    }
                },
                {
                    path: '/not-found',
                    name: 'not-found',
                    component: () => import('@/components/NotFoundPage.vue'),
                    meta: {
                        title: 'TechInsight | Oops... Esta página não existe',
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
