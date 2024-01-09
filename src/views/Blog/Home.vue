<template>

<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 md:px-6 lg:px-20 xl:px-52 mx-auto pt-8 ">

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="md:col-span-2 flex flex-col gap-4 mb-16 md:mb-8">
                <PostCardItem 
                    v-for="post in posts" 
                    :key="post.id" 
                    :id="post.id"
                    :public_id="post.public_id"
                    :author="post.profile"
                    :title="post.title"
                    :postSlug="post.slug"
                    :content="post.content"
                    :tag="post.tag"
                    :likesCounter="post.likes"
                    :commentsCounter="post.comments"
                    :isLiked="post.is_liked"
                    :createdAt="post.created_at"
                    :updatedAt="post.updated_at"
                />
            </div>
        </div>
    </div>
</section>


</template>

<script>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import services from '../../services';
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
        let posts = ref([])

        async function getPosts() {
            const { data } = await services.posts.getPosts()
            posts.value = data
        }
        const logout = () => services.auth.logout()
        
        onMounted(() => getPosts())

        return {
            logout,
            posts
        }
    }
}
</script>