<template>
    <div>
        <div class="container md:px-6 lg:px-20 mx-auto pb-16 md:mb-0">
            <div v-if="state.isLoaded" class="post px-6 xl:px-52 2xl:px-56">
                <section class="pt-16 md:pt-28 pb-12 md:pb-16 flex flex-col items-start justify-center">
                    <span class="text-gray-500 text-sm font-regular mb-2 dark:text-gray-400">
                        {{ formatTimeDifference(state.post.created_at) }}
                    </span>
                    <h1 class="text-gray-900 font-bold text-4xl md:text-5xl dark:text-gray-50 tracking-tighter">
                        {{ state.post.title }}    
                    </h1>
                </section>
                <section class="mb-10">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="user flex items-center space-x-3 cursor-pointer">
                                <Avatar class="border border-gray-400 dark:border-gray-500 w-11 h-11">
                                    <AvatarImage v-if="!!state.postUserPorfile.profile_photo" :src="state.postUserPorfile.profile_photo" alt="imagem do usuário"/>
                                    <AvatarImage v-else src="../assets/images/user-profile.png" alt="imagem do usuário"/>
                                    <AvatarFallback>{{ state.postUser.username }}</AvatarFallback>
                                </Avatar>
                                <div class="flex flex-col items-start">
                                    <span class="username font-medium text-sm mb-1 text-gray-600 dark:text-gray-200">{{ state.postUser.username }}</span>
                                    <button class="font-medium text-sm text-gray-900 dark:text-white">Seguir</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="likes flex items-center gap-2">
                                <button type="button">
                                    <ThumbsUp v-if="!state.post.is_liked" :stroke-width="1.50" size="22" />
                                    <ThumbsUp v-else size="24" class="fill-blue-500 " :stroke-width="0" />
                                </button>
                                <span v-if="!!state.post.likes" class="likes-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                                    {{ state.post.likes }}
                                </span>
                            </div>
                            <div class="comments flex items-center gap-2">
                                <button type="button">
                                    <MessageSquare :stroke-width="1.50" size="22" />
                                </button>
                                <span v-if="!!state.post.comments" class="comments-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                                    {{ state.post.comments }}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="font-p-regular text-xl text-gray-900 dark:text-gray-400">
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
import PostSkeleton from '@/components/Skeletons/PostSkeleton.vue'
import { MessageSquare, ThumbsUp } from 'lucide-vue-next'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default {
    components: {
    PostSkeleton,
    ThumbsUp,
    MessageSquare,
    Avatar,
    AvatarImage,
    AvatarFallback
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