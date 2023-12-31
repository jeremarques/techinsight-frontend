
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BaseInput from '@/components/BaseInput.vue';

describe('BaseInput.vue', () => {
    it('should render component', () => {
        expect(BaseInput).toBeTruthy();

        const wrapper = mount(BaseInput, {
            props: {
                placeholder: 'Test BaseInput',
                iconName: 'User',
                type: 'email',
                darkVariant: true,
                error: 'error',
                modelValue: 'Test',
                id: 'test',
                autocomplete: false,
                autofocus: false,
                required: false,
            }
        });

        const input = wrapper.get('input');

        expect(input.element.value).toEqual('Test');
        expect(wrapper.get('svg'));
        expect(input.classes().includes('dark:bg-dark-mixed-200 placeholder-gray-400/70'));
        expect(input.classes().includes('border-red-400 dark:border-red-400 focus:border-red-400 focus:ring-red-300 mb-1'));
        expect(input.element.name).toEqual('test');
        expect(input.element.type).toEqual('email');
        expect(input.element.placeholder).toEqual('Test BaseInput');
        expect(input.element.id).toEqual('test');
        expect(input.element.required).toEqual(false);
    }),

    it('modalValue shoud be updated', async () => {
        const wrapper = mount(BaseInput, {
            props: {
                placeholder: 'Test BaseInput',
                modelValue: 'Initial value',
                'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
                id: 'test',
            }
        });

        const input = wrapper.find('input');

        await input.setValue('New value');
        expect(wrapper.props('modelValue')).toBe('New value');
        expect(input.element.value).toBe('New value');
    });
});
