import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Icon from '@/components/Icon/index.vue'

describe('Icon factory component', () => {
    it('should render icon component', () => {
        expect(Icon).toBeTruthy()
        const wrapper = mount(Icon, {
            props: {
                name: 'Loading',
                size: '4',
                color: 'text-green'
            }
        })

        expect(wrapper.get('svg')).toBeTruthy()
        expect(wrapper.classes()).contain('h-4', 'w-4', 'text-green')
    })
})