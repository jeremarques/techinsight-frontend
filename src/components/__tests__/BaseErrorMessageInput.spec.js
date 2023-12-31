import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseErrorMessageInput from '@/components/BaseErrorMessageInput.vue'

describe('BaseErrorMessageInput.vue', () => {
    it('should render component', () => {
        expect(BaseErrorMessageInput).toBeTruthy()
        const wrapper = mount(BaseErrorMessageInput, {
            props: {
                errorMessage: 'Error message test'
            }
        })

        expect(wrapper.text()).toBe('Error message test')
    }),

    it('should not render message if not error message', () => {
        expect(BaseErrorMessageInput).toBeTruthy()
        const wrapper = mount(BaseErrorMessageInput, {
            props: {
                errorMessage: ''
            }
        })

        expect(wrapper.find('span').exists()).toBe(false)
    })
})