import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import PostCardItem from '@/components/PostCardItem.vue'

describe('PostCardItem.vue', () => {
    it('should render component', () => {
        expect(PostCardItem).toBeTruthy()
        const payload = {
            id: 2,
            post_url: "http://localhost:8000/api/posts/teste-post-jeremias-marques/",
            post_like_url: "http://localhost:8000/api/posts/teste-post-jeremias-marques/likes/",
            post_comment_url: "http://localhost:8000/api/posts/teste-post-jeremias-marques/comments/",
            author: {
                id: 2,
                avatar_url: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
                url: "http://localhost:8000/api/users/jeremias.marques/",
                follow_url: "http://localhost:8000/api/users/jeremias.marques/followers/",
                username: "jeremias.marques",
                full_name: ""
            },
            title: "Teste post jeremias marques",
            content: "Teste de post qualquer e aqui eu coloco qualquer coisa.",
            tags: "Development",
            likes: 1,
            comments: 0,
            slug: "teste-post-jeremias-marques",
            created_at: "2023-12-06 22:46:26"
        }

        const wrapper = mount(PostCardItem, {
            props: {
                id: payload.id,
                author: payload.author,
                title: payload.title,
                content: payload.content,
                tag: payload.tags,
                postSlug: payload.slug,
                createdAt: payload.created_at,
                likesCounter: payload.likes,
                commentsCounter: payload.comments,
            }
        })

        expect(wrapper.get('.username').text()).toBe('jeremias.marques')
        expect(wrapper.get('.avatar').element.src).toBe('https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D')
        expect(wrapper.get('.publi-date').text()).toBe('2023-12-06 22:46:26')
        expect(wrapper.get('.title').text()).toBe('Teste post jeremias marques')
        expect(wrapper.get('.content').text()).toBeTruthy()
        expect(wrapper.get('.likes-counter').text()).toBe('1')
        expect(wrapper.get('.comments-counter').text()).toBe('0')
        expect(wrapper.get('.tag').text()).toBe("Development")
    }),

    it('tag should not visible if not exists', () => {
        expect(PostCardItem).toBeTruthy()
        const payload = {
            id: 2,
            post_url: "http://localhost:8000/api/posts/teste-post-jeremias-marques/",
            post_like_url: "http://localhost:8000/api/posts/teste-post-jeremias-marques/likes/",
            post_comment_url: "http://localhost:8000/api/posts/teste-post-jeremias-marques/comments/",
            author: {
                id: 2,
                avatar_url: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
                url: "http://localhost:8000/api/users/jeremias.marques/",
                follow_url: "http://localhost:8000/api/users/jeremias.marques/followers/",
                username: "jeremias.marques",
                full_name: ""
            },
            title: "Teste post jeremias marques",
            content: "Teste de post qualquer e aqui eu coloco qualquer coisa.",
            tags: "",
            likes: 1,
            comments: 0,
            slug: "teste-post-jeremias-marques",
            created_at: "2023-12-06 22:46:26"
        }

        const wrapper = mount(PostCardItem, {
            props: {
                id: payload.id,
                author: payload.author,
                title: payload.title,
                content: payload.content,
                tag: payload.tags,
                postSlug: payload.slug,
                createdAt: payload.created_at,
                likesCounter: payload.likes,
                commentsCounter: payload.comments,
            }
        })

        expect(wrapper.find('.tag').exists()).toBe(false)
    })
})