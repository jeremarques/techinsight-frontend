<template>
    <button class="group flex items-center w-full space-x-2 p-2 pr-16 rounded-sm hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600">
        <div class="p-3 rounded-md flex items-center justify-center border border-gray-200 group-hover:bg-white dark:bg-dark-mixed-200/70 dark:group-hover:bg-dark-mixed-200/70">
            <component :is="icons[iconName]" :stroke-width="1.35" size="20" />
        </div>
        <div class="flex flex-col items-start">
            <span href="#" class="title text-base text-gray-900 dark:text-white">
                {{ title }}
            </span>
            <p class="description text-xs text-gray-500 dark:text-gray-200">{{ description }}</p>
        </div>
    </button>
</template>
<script setup>
import { Heading1, Heading2, Heading3, Heading4, Text, Code2, Link2, Minus } from 'lucide-vue-next'

const props = defineProps({
    iconName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const icons = {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Text,
    Code2,
    Link2,
    Minus
}
</script>