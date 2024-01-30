<template>
    <div>
        <div class="container md:px-6 lg:px-20 mx-auto pb-16 md:mb-0">
            <div v-if="!state.isLoading" class="post px-6 xl:px-52 2xl:px-56">
                <section class="pt-16 md:pt-28 pb-12 md:pb-16 flex flex-col items-start justify-center">
                    <span class="text-gray-500 text-base font-body-regular mb-2 dark:text-gray-400">
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
                <section class="insight-content">
                    <ReadContent :content="state.post.content" />
                </section>
            </div>
            <PostSkeleton v-else />
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { useToast } from 'vue-toastification'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MessageSquare, ThumbsUp } from 'lucide-vue-next'
import PostSkeleton from '@/components/Skeletons/PostSkeleton.vue'
import services from '@/services'
import ReadContent from '@/components/Post/ReadContentPost.vue'
import { formatTimeDifference } from '@/utils/date'

const route = useRoute()
const router = useRouter()
const toast = useToast()
const state = reactive({
    isLoading: false,
    post: {},
    postUser: {},
    postUserPorfile: {}
})
// Get id of post and your slug
const slugAndId = route.params.slugAndId.split('-')
const postId = slugAndId.at(-1)
const usernameParam = route.params.username
const slugParam = slugAndId.slice(0, -1).join('-')

async function getPost() {
    try {
        state.isLoading = true
        const { data, errors } = await services.post.getPost(postId)
        if (errors) {
            if (errors.status === 404) {
                state.isLoading = false
                router.push({ name: 'not-found' })
            }

            if (errors.status === 500) {
                state.isLoading = true
                toast.error('Ocorreu um erro ao tentar carregar o post. Por favor, tente novamente mais tarde.')
            }
        }
        // If the slug or username isn't from the post, correct the url with the correct infos
        if (usernameParam !== data.profile.user.username || slugParam !== data.slug) {
            router.push({
                name: 'post',
                params: { 
                    username: data.profile.user.username, 
                    slugAndId: `${data.slug}-${data.public_id}`
                }
            })
        }

        state.post = data
        state.postUser = data.profile.user
        state.postUserPorfile = data.profile
        state.isLoading = false
        useTitle(state.post.title)

    } catch (err) {
        console.log(err)
    }
}
getPost()
</script>