<template>
    <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
    />
</template>

<script setup>
import { ref } from 'vue'
import PostCard from '@/components/Post/PostCard.vue'
import services from '@/services'

const posts = ref([])

async function getPosts() {
    const { data } = await services.post.getPosts()
    posts.value = data
}
await getPosts()
</script>