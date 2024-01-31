<template>
    <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
    />
</template>

<script setup>
import { ref } from 'vue'
import PostItem from '@/components/Post/PostItem.vue'
import services from '@/services'

const posts = ref([])

async function getPosts() {
    const { data } = await services.post.getPosts()
    posts.value = data
}
await getPosts()
</script>