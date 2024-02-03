<template>
    <div class="post px-6 xl:px-52 2xl:px-56">
        <section class="pt-16 md:pt-28 pb-12 md:pb-16 flex flex-col items-start justify-center">
            <span class="created-at text-gray-500 text-base font-body-regular mb-2 dark:text-gray-400">
                {{ formatTimeDifference(state.post.created_at) }}
            </span>
            <h1 class="title text-gray-900 font-bold text-4xl md:text-5xl dark:text-gray-50 tracking-tighter">
                {{ state.post.title }}    
            </h1>
        </section>
        <section class="mb-10">
            <div class="flex items-center justify-between">
                <div>
                    <div class="user flex items-center space-x-3">
                        <RouterLink
                            class="flex items-center"
                            :to="{ 
                                name: 'user-profile',
                                params: { 
                                    username: state.postUser.username
                                }
                            }">
                            <Avatar class="border border-gray-400 dark:border-gray-500 w-11 h-11">
                                <AvatarImage v-if="!!state.postUserPorfile.profile_photo" :src="state.postUserPorfile.profile_photo" alt="imagem do usuário"/>
                                <AvatarImage v-else src="@/assets/images/user-profile.png" alt="imagem do usuário"/>
                                <AvatarFallback>{{ state.postUser.username }}</AvatarFallback>
                            </Avatar>
                        </RouterLink>
                        <div class="flex flex-col items-start mt-0">
                            <RouterLink
                                :to="{ 
                                    name: 'user-profile',
                                    params: { 
                                        username: state.postUser.username
                                    }
                                }">
                                <span class="username font-medium text-sm mb-1 text-gray-600 dark:text-gray-200">{{ state.postUser.username }}</span>
                            </RouterLink>
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
            <PostContent :content="state.post.content" />
        </section>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useTitle } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MessageSquare, ThumbsUp } from 'lucide-vue-next'
import { formatTimeDifference } from '@/utils/date'
import PostContent from '@/components/Post/PostContent.vue'
import services from '@/services'

const props = defineProps({
    postId: {
        type: String,
        required: true
    },
    usernameParam: {
        type: String,
        required: true
    },
    slugParam: {
        type: String,
        required: true
    }
})

const router = useRouter()
const toast = useToast()

const state = reactive({
    post: {},
    postUser: {},
    postUserPorfile: {}
})

async function getPost() {
    try {
        const { data, errors } = await services.post.getPost(props.postId)
        if (errors) {
            if (errors.status === 404) {
                router.push({ name: 'not-found' })
            }

            if (errors.status === 500) {
                toast.error('Ocorreu um erro ao tentar carregar o post. Por favor, tente novamente mais tarde.')
            }
        }
        // If the slug or username isn't from the post, correct the url with the correct infos
        if (props.usernameParam !== data.profile.user.username || props.slugParam !== data.slug) {
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
        useTitle(state.post.title)

    } catch (err) {
        console.log(err)
    }
}
await getPost()
</script>