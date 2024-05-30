<template>
    <Button
        type="submit"
        class="w-full transition-color duration-200 bg-brand-main-700 py-5 text-sm text-white disabled:text-white disabled:bg-main-700"
        :class="{ 'hover:bg-brand-main-700 md:hover:bg-brand-main-600': !loading, extraClasses }"
        :disabled="loading"
    >
        <Loader2 v-if="loading" class="animate-spin mr-2" size="20" />
        {{ text }}
    </Button>
</template>

<script setup>
import { Loader2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'


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