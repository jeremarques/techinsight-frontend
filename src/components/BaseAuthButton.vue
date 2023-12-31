<template>
    <button
        type="submit"
        class="w-full flex gap-2 justify-center md:flex-none bg-brand-blue-500 font-medium rounded-lg text-white tracking-wide py-2.5 px-6 transition-all duration-300 disabled:opacity-70"
        :class="{ 'hover:bg-brand-blue-700': !loading, extraClasses }"
        :disabled="loading"
    >
        {{ text }}
        <Icon v-if="loading" name="Loading" class="animate-spin"/>
    </button>
</template>

<script setup>
import Icon from '@/components/Icon/index.vue'

const props = defineProps({
    loading: {
        type: Boolean,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    extraClasses: {
        type: String,
        required: false,
    }
})
</script>