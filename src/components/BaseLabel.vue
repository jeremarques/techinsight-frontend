<template>
    <label :for="forElement" class="font-regular text-sm text-gray-500 dark:text-gray-100 mb-2">{{ text }}</label>
</template>
<script setup>

const props = defineProps({
    forElement: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
</script>