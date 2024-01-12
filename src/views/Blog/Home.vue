<template>

<div class="bg-white dark:bg-dark-mixed-100">
    <div class="container px-6 md:px-6 lg:px-20 xl:px-52 mx-auto pt-8 ">

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-if="state.isLoaded" class="md:col-span-2 flex flex-col gap-4 mb-16 md:mb-8">
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

<script>
import { onMounted, reactive } from 'vue'
import services from '@/services'
import PostCard from '@/components/Post/PostCard.vue'
import PostCardSkeleton from '@/components/Skeletons/PostCardSkeleton.vue'

export default {
    components: {
        PostCard,
        PostCardSkeleton
    },
    setup () {
        const state = reactive({
            posts: [],
            isLoaded: false
        })

        onMounted(() => getPosts())

        async function getPosts() {
            const { data } = await services.post.getPosts()
            state.posts = data
            state.isLoaded = true
        }
        const logout = () => services.auth.logout()
        

        return {
            state,
            logout
        }
    }
}
</script>