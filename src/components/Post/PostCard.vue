<template>
    <Card class="bg-[#fcfcfc] dark:bg-dark-mixed-150 border rounded-lg dark:border-dark-mixed-300">
        <CardHeader class="flex-row items-center justify-between pb-0">
            <div class="user flex items-center gap-2.5 cursor-pointer">
                <Avatar class="border border-gray-400 dark:border-gray-500 w-8 h-8 md:w-8 md:h-8">
                    <AvatarImage v-if="!!post.profile.profile_photo" :src="post.profile.profile_photo" alt="imagem do usuário"/>
                    <AvatarImage v-else src="../assets/images/user-profile.png" alt="imagem do usuário"/>
                    <AvatarFallback>{{ post.profile.user.username }}</AvatarFallback>
                </Avatar>
                <span class="username font-medium text-sm text-gray-600 dark:text-gray-200">{{ post.profile.user.username }}</span>
            </div>
            <div class="publi-date font-regular text-xs text-gray-500">
                {{ formatTimeDifference(post.created_at) }}
            </div>
        </CardHeader>
        <CardContent class="py-0">
            <RouterLink
                class="py-5 flex flex-col"
                :to="{ 
                    name: 'post',
                    params: { 
                        username: post.profile.user.username, 
                        slugAndId: `${post.slug}-${post.public_id}`
                    }
                }">
                <CardTitle class="title text-lg md:text-xl line-clamp-2 font-semibold">
                    {{ post.title }}
                </CardTitle>
                <CardDescription class="content mt-1 line-clamp-2 font-regular text-xs text-gray-600 dark:text-gray-400">
                    {{ post.content }}
                </CardDescription>
            </RouterLink>
        </CardContent>
        <CardFooter class="flex items-center justify-between">
            <div class="left flex items-center gap-4">
                <div class="likes flex items-center gap-2">
                    <button type="button">
                        <ThumbsUp v-if="!post.is_liked" :stroke-width="1.50" size="20" />
                        <ThumbsUp v-else size="22" class="fill-blue-500 " :stroke-width="0" />
                    </button>
                    <span v-if="!!post.likes" class="likes-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                        {{ post.likes }}
                    </span>
                </div>
                <div class="comments flex items-center gap-2">
                    <button type="button">
                        <MessageSquare :stroke-width="1.50" size="20" />
                    </button>
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
                            slug: post.tag.slug
                        }
                    }">
                    <Badge class="tag font-medium text-[10px] dark:border-gray-600" variant="secondary">Software</Badge>
                </RouterLink>
            </div>
        </CardFooter>
    </Card>
</template>
<script setup>
import { formatTimeDifference } from '@/utils/date'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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