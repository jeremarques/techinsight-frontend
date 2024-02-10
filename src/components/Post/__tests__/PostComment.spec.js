import { RouterLinkStub, mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import Comment from '@/components/Post/Comment.vue'

describe('PostCard.vue', () => {
    it('should render component', () => {
        expect(Comment).toBeTruthy()
        const payload = {
            "id": 9,
            "profile": {
                "id": 1,
                "user": {
                    "id": 1,
                    "username": "jeremarques",
                    "created_at": "2024-01-09 17:01:45",
                    "updated_at": null
                },
                "name": "Jeremias Marques",
                "profile_photo": "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
                "created_at": "2024-01-09 17:01:47",
                "updated_at": null
            },
            "content": "Muito obrigado!! 😃",
            "created_at": "2023-12-06 23:27:10",
            "updated_at": "2023-12-06 23:27:10"
        }

        const wrapper = mount(Comment, {
            props: {
                comment: payload
            },
            global: {
                stubs: {
                    RouterLink: RouterLinkStub
                } 
            }
        })

        expect(wrapper.get('.username').text()).toBe('jeremarques')
        expect(wrapper.get('.edited').text()).toBe('(Editado)')
        expect(wrapper.get('.content').text()).toBe('Muito obrigado!! 😃')
    })
})