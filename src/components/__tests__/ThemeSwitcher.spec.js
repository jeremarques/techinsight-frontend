import { mount } from "@vue/test-utils"
import { it, describe, expect } from "vitest"
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

describe('ThemeSwitcher.vue', () => {
    it('should render component', () => {
        expect(ThemeSwitcher).toBeTruthy()
    })
})