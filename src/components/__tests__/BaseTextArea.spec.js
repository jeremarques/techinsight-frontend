import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseTextArea from '@/components/BaseTextArea.vue'

describe('BaseTextArea.vue', () => {
    it('should render component', () => {
        expect(BaseTextArea).toBeTruthy()

        const wrapper = mount(BaseTextArea, {
            props: {
                placeholder: 'Test BaseTextArea',
                darkVariant: true,
                error: 'error',
                modelValue: 'Test',
                id: 'test',
                rows: 8,
                required: false,
            }
        })

        const textarea = wrapper.get('textarea')

        expect(textarea.element.value).toEqual('Test')
        expect(textarea.classes()).contain('dark:bg-dark-mixed-200', 'placeholder-gray-400/70')
        expect(textarea.classes()).contain('border-red-400', 'dark:border-red-400', 'focus:border-red-400', 'focus:ring-red-300', 'mb-1')
        expect(textarea.element.name).toEqual('test')
        expect(textarea.element.placeholder).toEqual('Test BaseTextArea')
        expect(textarea.element.id).toEqual('test')
        expect(textarea.element.rows).toEqual(8)
        expect(textarea.element.required).toEqual(false)
    }),

    it('modalValue shoud be updated', async () => {
        const wrapper = mount(BaseTextArea, {
            props: {
                placeholder: 'Test BaseTextArea',
                modelValue: 'Initial value',
                'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
                id: 'test',
            }
        })

        const textarea = wrapper.find('textarea')

        await textarea.setValue('New value')
        expect(wrapper.props('modelValue')).toBe('New value')
        expect(textarea.element.value).toBe('New value')
    })
})