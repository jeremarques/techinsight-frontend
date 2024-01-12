<template>
    <div class="bg-white dark:bg-dark-mixed-100">
        <div class="container md:px-6 lg:px-20 mx-auto pb-16 md:mb-0">
            <div v-if="state.isLoaded" class="post">
                <section class="pt-16 md:pt-28 pb-12 md:pb-16 px-6 xl:px-52 2xl:px-64 flex flex-col items-start justify-center">
                    <span class="text-gray-500 text-sm font-regular mb-2 dark:text-gray-400">
                        {{ formatTimeDifference(state.post.created_at) }}
                    </span>
                    <h1 class="text-gray-900 font-bold text-4xl md:text-5xl dark:text-gray-50">
                        {{ state.post.title }}    
                    </h1>
                </section>
                <section class="px-6 xl:px-52 2xl:px-64 mb-10">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="user flex items-center gap-2.5 cursor-pointer">
                                <div class="w-7 h-7 md:w-11 md:h-11 overflow-hidden rounded-full border border-gray-400 dark:border-gray-500">
                                    <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" class="avatar object-cover w-full h-full" alt="avatar">
                                </div>
                                <div class="flex flex-col items-start">
                                    <span class="username font-medium text-sm mb-1 text-gray-600 dark:text-gray-200">{{ state.postUser.username }}</span>
                                    <button class="font-medium text-sm text-gray-900 dark:text-white">Seguir</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="likes flex items-center gap-2">
                                <button type="button" v-if="!state.post.is_liked">
                                    <Icon name="Like" color="text-gray-800 dark:text-gray-200" size="6" />
                                </button>
                                <button type="button" v-else>
                                    <Icon name="LikeSolid" fill="#4f97e1" size="6" />
                                </button>
                                
                                <span v-if="!!state.post.likes" class="likes-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                                    {{ state.post.likes }}
                                </span>
                            </div>
                            <div class="comments flex items-center gap-2">
                                <button type="button">
                                    <Icon name="Chat" color="text-gray-800 dark:text-gray-200" size="6" />
                                </button>
                                <span v-if="!!state.post.comments" class="comments-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                                    {{ state.post.comments }}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="px-6 xl:px-52 2xl:px-64 font-p-regular text-xl text-gray-900 dark:text-gray-100">
                    {{ state.post.content }}
                </section>
            </div>
            <PostSkeleton v-else />
        </div>
    </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import services from '@/services'
import { formatTimeDifference } from '@/utils/date'
import Icon from '@/components/Icon/index.vue'
import PostSkeleton from '@/components/Skeletons/PostSkeleton.vue'

export default {
    components: {
        Icon,
        PostSkeleton
    },

    setup() {
        const route = useRoute()
        const state = reactive({
            isLoaded: false,
            post: {},
            postUser: {},
            postUserPorfile: {}
        })
        const slugAndId = route.params.slugAndId.split('-')
        const postId = slugAndId.at(-1)

        onMounted(() => getPost())

        async function getPost() {
            try {
                const { data } = await services.post.getPost(postId)
                state.post = data
                state.postUser = data.profile.user
                state.postUserPorfile = data.profile
                state.isLoaded = true

            } catch (err) {
                console.log(err)
            }
        }

        return {
            state,
            formatTimeDifference
        }
    }
}
</script>