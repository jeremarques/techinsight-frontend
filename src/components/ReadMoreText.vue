<template>
    <p :id="id">
        {{ beginText }}
        <template v-if="itCanOverflow">
            <span v-if="!isExpanded">...</span>
            <span 
                :class="{ 'hidden': !isExpanded }"
                :aria-hidden="!isExpanded"
            >
                {{ endText }}
            </span>
            <span
                class="text-brand-main-600 dark:text-brand-main-400 ml-2"
                role="button"
                :aria-expanded="isExpanded"
                :aria-controls="id"
                @click="expandText(!isExpanded)"
            >
                {{ isExpanded ? 'mostrar menos' : 'mostrar mais' }}
            </span>
        </template>
    </p>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    amountOfWords: {
        type: Number,
        required: false,
        default: 36
    }
})

const isExpanded = ref(false)
const splittedText = props.text.split(' ')
const itCanOverflow = splittedText.length > props.amountOfWords
const beginText = itCanOverflow
    ? splittedText.slice(0, props.amountOfWords - 1).join(' ')
    : props.text
const endText = splittedText.slice(props.amountOfWords - 1).join(' ')

function expandText(newExpandState) {
    return isExpanded.value = newExpandState
}
</script>