<template>
    <RouterLink
        class="bg-neutral-50/70 dark:bg-dark-mixed-150/60 border border-slate-400/20 rounded-lg dark:border-dark-mixed-300/60 shadow-none"
        :to="{
            name: 'post',
            params: { 
                username: post.profile.user.username, 
                slugAndId: `${post.slug}-${post.public_id}`
            }
        }"
    >
        <div class="flex items-center justify-start px-5 pt-5 space-x-4 space-y-0">
            <RouterLink
                class="user flex items-center gap-2.5 cursor-pointer"
                :to="{ 
                    name: 'user-profile',
                    params: { 
                        username: post.profile.user.username
                    }
                }">
                <Avatar class="avatar-image border border-gray-400 dark:border-gray-500 w-7 h-7">
                    <AvatarImage v-if="!!post.profile.profile_photo" :src="post.profile.profile_photo" alt="imagem do usuário"/>
                    <AvatarImage v-else src="../assets/images/user-profile.png" alt="imagem do usuário"/>
                    <AvatarFallback>{{ post.profile.user.username }}</AvatarFallback>
                </Avatar>
                <span class="username font-medium text-sm text-gray-600 dark:text-gray-200">{{ post.profile.user.username }}</span>
            </RouterLink>
            <div class="publi-date font-regular text-xs text-gray-500 dark:text-gray-400">
                {{ formatTimeDifference(post.created_at) }}
            </div>
        </div>
        <div class="flex flex-col px-5 py-4">
            <h3 class="title tracking-tighter text-lg line-clamp-2 font-semibold text-gray-800 dark:text-gray-200">
                {{ post.title }}
            </h3>
        </div>
        <div class="flex items-center justify-between px-5 pb-5 gap-8">
            <div class="left flex items-center gap-4">
                <div class="likes flex items-center gap-2 cursor-default">
                    <ThumbsUp v-if="!post.is_liked" :stroke-width="1.50" size="20" />
                    <ThumbsUp v-else size="22" class="fill-blue-500 " :stroke-width="0" />
                    <span v-if="!!post.likes" class="likes-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                        {{ post.likes }}
                    </span>
                </div>
                <div class="comments flex items-center gap-2 cursor-default">
                    <MessageSquare :stroke-width="1.50" size="20" />
                    <span v-if="!!post.comments" class="comments-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                        {{ post.comments }}
                    </span>
                </div>
            </div>
            <div class="right flex items-center">
                <RouterLink 
                    :to="{
                        name: 'tag-posts',
                        params: {
                            tagSlug: post.tag.slug
                        }
                    }">
                    <Badge class="tag font-medium text-[10px] dark:border-gray-600" variant="secondary">{{ post.tag.name }}</Badge>
                </RouterLink>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { formatTimeDifference } from '@/utils/date'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MessageSquare, ThumbsUp } from 'lucide-vue-next'

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>