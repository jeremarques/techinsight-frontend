<template>
    <div 
        class="relative flex items-center mt-2 leading-none"
        :class="{ 'mb-1': !!error }">
        <span class="absolute">
            <Lock :stroke-width="1.40" size="20" class="mx-3 text-gray-400" />
        </span>

        <input
            :type="[state.showPassword ? 'text' : 'password']"
            :placeholder="placeholder"
            :id="id"
            :name="id"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="block w-full py-2.5 font-regular text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 dark:text-white dark:bg-dark-mixed-100 dark:border-dark-400 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            :class="{ 'border-red-400 dark:border-red-400 focus:border-red-400 focus:ring-red-300' : !!error }"
            required>
        <div class="flex items-center">
            <button class="absolute right-0 cursor-pointer" @click="handleShowConfirmPassword" type="button">
                <Eye v-if="!state.showPassword" :stroke-width="1.30" class="mx-4 text-gray-400" />
                <EyeOff v-if="state.showPassword" :stroke-width="1.30" class="mx-4 text-gray-400" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Eye, EyeOff, Lock } from 'lucide-vue-next';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        required: true
    },
    error: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['update:modelValue'])

const state = reactive({
    showPassword: false,
})

function handleShowConfirmPassword() {
    state.showPassword = !state.showPassword
}
</script>