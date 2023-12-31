<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" :class="dynamicClasses">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
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