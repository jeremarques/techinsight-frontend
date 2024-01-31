import { expect, it, describe } from "vitest"
import { mount, shallowMount } from "@vue/test-utils"
import Post from '@/components/Post/Post.vue'
import { flushPromises, wrapInSuspense } from "@/helpers/wrapperWithSuspense"

describe('Post.vue', () => {
    it('should render post', async () => {
        expect(Post).toBeTruthy()

        const payload = {
            id: "2625664b-90dd-4151-9c3c-6264ac2ff64e",
            public_id: "4728408a784740",
            profile: {
                id: 1,
                user: {
                    id: 2,
                    username: "jeremias",
                    created_at: "2024-01-09 10:00:19",
                    updated_at: "2024-01-09 10:59:34"
                },
                name: "Jeremias",
                profile_photo: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
                created_at: "2024-01-09 10:00:21",
                updated_at: null
            },
            title: "Teste post jeremias marques",
            slug: "teste-post-jeremias-marques",
            content: "Teste de post qualquer e aqui eu coloco qualquer coisa.",
            tag: {
                id: 1,
                name: "Web Development",
                slug: "web-development",
                created_at: "2024-01-09 10:23:29",
                updated_at: null
            },
            likes: 1,
            comments: 0,
            is_liked: false,
            created_at: "2023-12-06 22:46:26",
            updated_at: "2024-01-09 10:52:46"
        }
        
        const wrapper = wrapInSuspense(Post, {
            props: {
                postId: payload.id,
                usernameParam: payload.profile.user.username,
                slugParam: payload.slug
            }
        })
        await flushPromises()

        console.log(wrapper)

        expect(wrapper.getByText('text in component')).toBeVisible()
    })
})