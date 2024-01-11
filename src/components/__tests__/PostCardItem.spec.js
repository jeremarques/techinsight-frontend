import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import PostCardItem from '@/components/PostCardItem.vue'

describe('PostCardItem.vue', () => {
    it('should render component', () => {
        expect(PostCardItem).toBeTruthy()
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

        const wrapper = mount(PostCardItem, {
            props: {
                post: payload
            }
        })

        expect(wrapper.get('.username').text()).toBe('jeremias')
        expect(wrapper.get('.avatar').element.src).toBe('https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D')
        expect(wrapper.get('.publi-date').text()).toBe('06/12/2023')
        expect(wrapper.get('.title').text()).toBe('Teste post jeremias marques')
        expect(wrapper.get('.content').text()).toBe('Teste de post qualquer e aqui eu coloco qualquer coisa.')
        expect(wrapper.get('.likes-counter').text()).toBe('1')
        expect(wrapper.find('.comments-counter').exists()).toBe(false)
        expect(wrapper.get('.tag').text()).toBe("Web Development")
    })
})