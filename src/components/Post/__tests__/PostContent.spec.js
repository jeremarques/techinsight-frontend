import { expect, it, describe } from "vitest"
import { mount } from "@vue/test-utils"
import PostContent from '@/components/Post/PostContent.vue'

describe('PostContent.vue', () => {
    it('should render component', () => {
        const wrapper = mount(PostContent, {
            props: {
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac rhoncus orci. Quisque turpis felis, posuere vitae lacus a, tincidunt ultrices turpis. In ac lacus sodales justo volutpat hendrerit. Nulla facilisi.'
            }
        })

        expect(wrapper.get('.insight-content').text()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac rhoncus orci. Quisque turpis felis, posuere vitae lacus a, tincidunt ultrices turpis. In ac lacus sodales justo volutpat hendrerit. Nulla facilisi.')
    })
})