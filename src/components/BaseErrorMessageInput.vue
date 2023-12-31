<template lang="">
    <span
        v-if="!!errorMessage"
        class="font-regular text-xs text-red-400 mt-6">
        {{ errorMessage }}
    </span>
</template>
<script setup>
const props = defineProps({
    errorMessage: {
        type: String,
        required: true
    }
})
</script>