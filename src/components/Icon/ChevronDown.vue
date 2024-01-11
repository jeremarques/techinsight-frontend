<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="dynamicClasses">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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