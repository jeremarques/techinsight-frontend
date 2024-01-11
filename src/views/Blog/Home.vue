<template>

<div class="bg-white dark:bg-gray-900">
    <div class="container px-6 md:px-6 lg:px-20 xl:px-52 mx-auto pt-8 ">

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="md:col-span-2 flex flex-col gap-4 mb-16 md:mb-8">
                <PostCardItem 
                    v-for="post in state.posts" 
                    :key="post.id" 
                    :post="post"
                />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useUserStore } from '@/stores/user';
import services from '@/services';
import Icon from '@/components/Icon/index.vue'
import PostCardItem from '@/components/PostCardItem.vue';

export default {
    components: {
        Icon,
        PostCardItem
    },
    setup () {
        const userStore = useUserStore()
        const currentUser = userStore.currentUser
        const state = reactive({
            posts: []
        })

        onMounted(() => getPosts())

        async function getPosts() {
            const { data } = await services.post.getPosts()
            state.posts = data
        }
        const logout = () => services.auth.logout()
        

        return {
            state,
            logout
        }
    }
}
</script>