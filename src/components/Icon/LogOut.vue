<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rotate-180" :class="dynamicClasses">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
    </svg>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        size: {
            type: [Number, String],
            default: 6
        },
        color: {
            type: String,
            default: "text-white"
        }
    },

    setup (props) {
        const dynamicClasses = computed(() => {
            return `w-${props.size} h-${props.size} ${props.color}`
        })

        return {
            dynamicClasses,
        }
    }
}
</script>