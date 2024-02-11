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

                            <button 
                                v-if="!loggedUserIsThePostAuthor"
                                class="font-medium text-sm text-gray-900 dark:text-white disabled:text-gray-400"
                                @click="handleFollow"
                                :disabled="isLoadingFollow"
                            >
                                {{ state.postUser.is_follower ? 'Seguindo' : 'Seguir' }}
                            </button>
                            <button v-else class="font-medium text-sm text-gray-900 dark:text-white">
                                Ver perfil
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div class="likes">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger :class="{ 'cursor-default': loggedUserIsThePostAuthor }">
                                    <Button 
                                        :disabled="loggedUserIsThePostAuthor || isLoadingLike" 
                                        variant="ghost" 
                                        size="sm" 
                                        class="hover:bg-transparent flex items-center gap-2"
                                        @click="handleLike"
                                    >
                                        <Loader2 v-if="isLoadingLike" class="animate-spin size-5" />
                                        <ThumbsUp v-else-if="!state.post.is_liked" :stroke-width="1.50" size="22" />
                                        <ThumbsUp v-else size="24" class="fill-blue-500 " :stroke-width="0" />
                                        <span v-if="!!state.post.likes" class="likes-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                                            {{ state.post.likes }}
                                        </span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p v-if="state.post.is_liked">Remover like</p>
                                    <p v-else-if="!loggedUserIsThePostAuthor">Marcar como "gostei"</p>
                                    <p v-else>Você não pode dar like no seu próprio post</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
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
import { computed, reactive, ref } from 'vue'
import { useTitle } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useUserStore } from '@/stores/user'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Loader2, MessageSquare, ThumbsUp } from 'lucide-vue-next'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { formatTimeDifference } from '@/utils/date'
import PostContent from '@/components/Post/PostContent.vue'
import services from '@/services'
import { Button } from '../ui/button'

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
const userStore = useUserStore()
const user = userStore.currentUser
const isLoadingLike = ref(false)
const isLoadingFollow = ref(false)

const state = reactive({
    post: {},
    postUser: {},
    postUserPorfile: {}
})

const loggedUserIsThePostAuthor = computed(() => user?.id === state.postUser.id)

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

async function handleLike() {
    if (state.post.is_liked) {
        try {
            isLoadingLike.value = true
            const { data, status } = await services.like.removeLike(state.post.public_id)
    
            if (status === 204) {
                state.post.is_liked = false
                state.post.likes -= 1
                isLoadingLike.value = false
                return
            }
            if (errors.status === 500) {
                toast.error('Ocorreu um erro ao remover o like do post. Por favor, tente novamente mais tarde.')
            }
            isLoadingLike.value = false

        } catch (err) {
            isLoadingLike.value = false
            toast.error('Ocorreu um erro ao remover o like do post. Por favor, tente novamente mais tarde.')
        }
        
    } else {
        try {
            isLoadingLike.value = true
            const { data, errors } = await services.like.addLike(state.post.public_id)

            if (!errors) {
                state.post.is_liked = true
                state.post.likes += 1
                isLoadingLike.value = false
                return
            }
            if (errors.status === 403) {
                toast.error('Oops... Você não pode dar like no seu próprio post.')
            }
            if (errors.status === 500) {
                toast.error('Ocorreu um erro ao dar like no post. Por favor, tente novamente mais tarde.')
            }
            isLoadingLike.value = false

        } catch (err) {
            isLoadingLike.value = false
            toast.error('Ocorreu um erro ao dar like no post. Por favor, tente novamente mais tarde.')
        }
    }
}

async function handleFollow() {
    if (state.postUser.is_follower) {
        try {
            isLoadingFollow.value = true
            const { data, status } = await services.follow.removeFollow(state.postUser.id)
    
            if (status === 204) {
                state.postUser.is_follower = false
                isLoadingFollow.value = false
                return
            }
            if (errors.status === 500) {
                toast.error('Ocorreu um erro ao deixar de seguir o usuário. Por favor, tente novamente mais tarde.')
            }
            isLoadingFollow.value = false

        } catch (err) {
            isLoadingFollow.value = false
            toast.error('Ocorreu um erro ao deixar de seguir o usuário. Por favor, tente novamente mais tarde.')
        }

    } else {
        try {
            isLoadingFollow.value = true
            const { data, errors } = services.follow.addFollow(state.postUser.id)
    
            if (!errors) {
                state.postUser.is_follower = true
                isLoadingFollow.value = false
                return
            }
            if (errors.status === 500) {
                toast.error('Ocorreu um erro ao seguir o usuário. Por favor, tente novamente mais tarde.')
            }
            isLoadingFollow.value = false

        } catch (err) {
            isLoadingFollow.value = false
            toast.error('Ocorreu um erro ao seguir o usuário. Por favor, tente novamente mais tarde.')
        }
    }
}
</script>