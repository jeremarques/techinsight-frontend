<template>
    <div 
        class="relative flex items-center mt-2"
        :class="{ 'mb-1': !!error }">
        <span v-if="!!iconName" class="absolute">
            <component :is="components[iconName]" :stroke-width="1.35" size="22" class="text-gray-400 mx-3" />
        </span>

        <input
            :type="type"
            :placeholder="placeholder"
            :id="id"
            :name="id"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="block w-full py-2.5 font-regular text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg dark:text-white dark:bg-dark-mixed-100 dark:border-dark-400 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            :class="{ 'pl-11': !!iconName, 'pl-5': !!!iconName, 'border-red-400 dark:border-red-400 focus:border-red-400 focus:ring-red-300' : !!error, 'dark:bg-dark-mixed-200 placeholder-gray-400/70' : darkVariant }"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :required="required">
    </div>
</template>

<script setup>
import { Sun, User, Mail } from 'lucide-vue-next'

const props = defineProps({
    placeholder: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false,
        default: 'text'
    },
    iconName: {
        type: String,
        required: false,
        default: 'User'
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
    autocomplete: {
        type: Boolean,
        required: false,
        default: true
    },
    autofocus: {
        type: Boolean,
        required: false,
        default: false
    },
    required: {
        type: Boolean,
        required: false,
        default: false
    }
})

const components = {
    User,
    Sun,
    Mail
}

const emit = defineEmits(['update:modelValue'])
</script>