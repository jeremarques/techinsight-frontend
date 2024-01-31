import { expect, it, describe } from "vitest"
import { mount } from "@vue/test-utils"
import FloatingMenuButton from '@/components/Editor/FloatingMenuButton.vue'

describe('FloatingMenuButton.vue', () => {
    it('should render component', () => {
        expect(FloatingMenuButton).toBeTruthy()
        const wrapper = mount(FloatingMenuButton, {
            props: {
                iconName: 'Text',
                title: 'Texto',
                description: 'Escreva um texto'
            }
        })

        expect(wrapper.find('svg').exists()).toBe(true)
        expect(wrapper.get('.title').text()).toBe('Texto')
        expect(wrapper.get('.description').text()).toBe('Escreva um texto')
    })
})