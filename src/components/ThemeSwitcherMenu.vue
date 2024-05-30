<template>
    <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 dark:bg-dark-mixed-150 rounded-lg p-1">
        <li>
            <button 
                variant="ghost" 
                size="sm" 
                class="w-full flex items-center justify-center text-gray-700 dark:text-white h-7"
                :class="{ 'bg-white rounded-md shadow': state.currentTheme === 'light' }" 
                @click="changeThemeToLight()"
            >
                <Sun class="size-4"  :stroke-width="1.70"/>
            </button>
        </li>
        <li>
            <button 
                variant="ghost" 
                size="sm" 
                class="w-full flex items-center justify-center text-gray-700 dark:text-white h-7"
                :class="{ 'bg-white dark:bg-dark-mixed-100 rounded-md shadow': state.currentTheme === 'dark' }"
                @click="changeThemeToDark()"
            >
                <MoonStar class="size-4" :stroke-width="1.70"/>
            </button>
        </li>
    </ul>
</template>
<script setup>
import { reactive } from 'vue'
import { getThemePage, handleThemePage, setThemePage } from '@/utils/theme'
import { MoonStar, Sun } from 'lucide-vue-next'

const state = reactive({
    currentTheme: getThemePage()
})

function changeThemeToLight() {
    state.currentTheme = 'light'
    setThemePage('light')
    handleThemePage()
}
function changeThemeToDark() {
    state.currentTheme = 'dark'
    setThemePage('dark')
    handleThemePage()
}
</script>