<template>
    <label :for="forElement" class="hidden font-regular text-sm text-gray-500">{{ text }}</label>
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