<template>
    <textarea
        :rows="rows"
        :placeholder="placeholder"
        :id="id"
        :name="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="base-textarea w-full resize-none rounded-lg border border-gray-200 dark:border-dark-400 border-stroke px-[14px] py-3 font-regular text-base text-gray-700 dark:text-white dark:bg-dark-mixed-200 placeholder-gray-400/70 outline-none focus:border-primary rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        :class="{ 'border-red-400 dark:border-red-400 focus:border-red-400 focus:ring-red-300 mb-1' : !!error, 'dark:bg-dark-mixed-200 placeholder-gray-400/70' : darkVariant }"
        :required="required"></textarea>
</template>

<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        required: true
    },
    darkVariant: {
        type: Boolean,
        required: false
    },
    error: {
        type: String,
        required: false
    },
    modelValue: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    rows: {
        type: Number,
        required: false,
        default: 5
    },
    required: {
        type: Boolean,
        required: false,
        default: true
    }
})

const emit = defineEmits(['update:modelValue'])
</script>