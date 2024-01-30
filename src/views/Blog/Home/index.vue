<template>
<div>
    <div class="container px-6 md:px-6 lg:px-20 xl:px-52 mx-auto pt-8 ">

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-if="state.isLoaded" class="md:col-span-2 flex flex-col space-y-6 mb-16 md:mb-8">
                <PostCard 
                    v-for="post in state.posts" 
                    :key="post.id" 
                    :post="post"
                />
            </div>
            <div v-else class="md:col-span-2 flex flex-col gap-4 mb-16 md:mb-8">
                <PostCardSkeleton
                    v-for="n in Array(7).keys()" 
                    :key="n"
                />
            </div>
        </div>  
    </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import PostCard from '@/components/Post/PostCard.vue'
import PostCardSkeleton from '@/components/Skeletons/PostCardSkeleton.vue'
import services from '@/services'

const state = reactive({
    posts: [],
    isLoaded: false
})

async function getPosts() {
    const { data } = await services.post.getPosts()
    state.posts = data
    state.isLoaded = true
}
getPosts()
</script>