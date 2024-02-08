<template>
    <Comment 
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
    />
</template>

<script setup>
import { ref } from 'vue'
import Comment from '@/components/Post/Comment.vue'
import services from '@/services'

const props = defineProps({
    postId: {
        type: String,
        required: true
    }
})
const comments = ref([])

async function getComments() {
    const { data, errors } = await services.comment.getComments(props.postId)
    if (!errors) {
        comments.value = data
    }
}
await getComments()
</script>