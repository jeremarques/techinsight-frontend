import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseAuthButton from '@/components/BaseAuthButton.vue'

describe('BaseAuthButton.vue', () => {
    it('should render component', () => {
        expect(BaseAuthButton).toBeTruthy()
        const wrapper = mount(BaseAuthButton, {
            props: {
                loading: false,
                text: 'Test auth button',
                extraClasses: 'bg-gray-200'
            }
        })

        const button = wrapper.get('button')
        expect(wrapper.find('svg').exists()).toBe(false)
        expect(button.text()).toBe('Test auth button')
        expect(button.classes().includes('bg-gray-200'))
    }),

    it('loading icon should be visible', async () => {
        const wrapper = mount(BaseAuthButton, {
            props: {
                loading: false,
                text: 'Test',
            }
        })

        const button = wrapper.get('button')
        expect(wrapper.find('svg').exists()).toBe(false)
        await wrapper.setProps({ loading: true })
        expect(button.attributes('disabled')).toBe("")
        expect(wrapper.find('svg').exists()).toBe(true)
    })
})