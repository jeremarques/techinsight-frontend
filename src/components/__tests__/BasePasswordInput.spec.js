import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BasePasswordInput from '@/components/BasePasswordInput.vue'

describe('BasePasswordInput.vue', () => {
    it('should render component', () => {
        expect(BasePasswordInput).toBeTruthy()
        const wrapper = mount(BasePasswordInput, {
            props: {
                id: 'password',
                placeholder: 'Password test',
                modelValue: 'Test',
                error: 'Error test'
            }
        })

        const input = wrapper.get('input');

        expect(input.element.value).toEqual('Test');
        expect(input.classes().includes('border-red-400 dark:border-red-400 focus:border-red-400 focus:ring-red-300 mb-1'));
        expect(input.element.name).toEqual('password');
        expect(input.element.type).toEqual('password');
        expect(input.element.placeholder).toEqual('Password test');
        expect(input.element.id).toEqual('password');
        expect(input.element.required).toEqual(true);
    }),

    it('modalValue should be updated', async () => {
        const wrapper = mount(BasePasswordInput, {
            props: {
                id: 'password',
                placeholder: 'Password test',
                modelValue: 'test',
                'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
                error: ''
            }
        });

        const inputPassword = wrapper.get('input')
        await inputPassword.setValue('test updated')
        expect(wrapper.props('modelValue')).toBe('test updated')
        expect(inputPassword.element.value).toBe('test updated')
    }),
    
    it('should change input type when click on button', async () => {
        const wrapper = mount(BasePasswordInput, {
            props: {
                id: 'password',
                placeholder: 'Password test',
                modelValue: 'Test',
                error: 'Error test'
            }
        })

        const showPasswordButton = wrapper.get('button')
        await showPasswordButton.trigger('click')
        expect(wrapper.get('input').element.type).toBe('text')
    })
})