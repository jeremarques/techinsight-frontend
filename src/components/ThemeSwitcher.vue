<template>
    <Button variant="ghost" class="px-2 text-gray-700 dark:text-white" @click="changeTheme()">
        <Sun v-if="state.currentTheme === 'dark'" size="24" :stroke-width="1.50"/>
        <MoonStar v-else size="24" :stroke-width="1.50"/>
    </Button>
</template>
<script setup>
import { reactive } from 'vue'
import { getThemePage, handleThemePage, setThemePage } from '@/utils/theme'
import { Button } from '@/components/ui/button'
import { MoonStar, Sun } from 'lucide-vue-next';

const state = reactive({
    currentTheme: getThemePage()
})

function changeTheme() {
    if (state.currentTheme === 'dark') {
        state.currentTheme = 'light'
        setThemePage('light')
        handleThemePage()
    } else {
        state.currentTheme = 'dark'
        setThemePage('dark')
        handleThemePage()
    }
}
</script>