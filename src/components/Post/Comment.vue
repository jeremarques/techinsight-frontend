<template>
    <div class="bg-neutral-50/30 dark:bg-dark-mixed-150 border border-slate-400/15 rounded-lg dark:border-dark-mixed-300 shadow-none">
        <div class="flex items-center justify-start px-4 pt-4 space-x-4 space-y-0">
            <RouterLink
                class="user flex items-center gap-2.5 cursor-pointer"
                :to="{ 
                    name: 'user-profile',
                    params: { 
                        username: 'jeremarques'
                    }
                }">
                <Avatar class="avatar-image border border-gray-400 dark:border-gray-500 size-6">
                    <AvatarImage v-if="comment.profile.profile_photo" :src="comment.profile.profile_photo" alt="imagem do usuário"/>
                    <AvatarImage v-else src="@/assets/images/user-profile.png" alt="imagem do usuário"/>                    
                    <AvatarFallback>{{ comment.profile.user.username }}</AvatarFallback>
                </Avatar>
                <span class="username font-regular text-sm text-gray-600 dark:text-gray-200">{{ comment.profile.user.username }}</span>
            </RouterLink>
            <div class="publi-date font-regular text-xs text-gray-500 dark:text-gray-400">
                {{ formatTimeDifference(comment.created_at) }}
            </div>
        </div>
        <div class="flex flex-col px-4 pt-3 pb-5">
            <p class="content text-base font-body-regular text-gray-800 dark:text-gray-200">
                {{ comment.content }}
            </p>
        </div>
        <!-- <div class="flex items-center justify-between px-5 pb-5 gap-8">
            <div class="left flex items-center gap-4">
                <div class="likes flex items-center gap-2">
                    <button type="button">
                        <ThumbsUp v-if="!post.is_liked" :stroke-width="1.50" size="20" />
                        <ThumbsUp v-else size="22" class="fill-blue-500 " :stroke-width="0" />
                        <ThumbsUp :stroke-width="1.50" size="20" />
                    </button>
                    <span v-if="!!post.likes" class="likes-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                        {{ post.likes }}
                    </span>
                    <span class="likes-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                        123
                    </span>
                </div>
                <div class="comments flex items-center gap-2">
                    <button type="button">
                        <MessageSquare :stroke-width="1.50" size="20" />
                    </button>
                    <span v-if="!!post.comments" class="comments-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                        {{ post.comments }}
                    </span>
                    <span class="comments-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                        20
                    </span>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { formatTimeDifference } from '@/utils/date'

const props = defineProps({
    comment: {
        type: Object,
        required: true
    }
})
</script>