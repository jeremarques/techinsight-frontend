<template>
    <div class="flex flex-col py-2">
        <div class="user flex items-center gap-2.5 cursor-pointer mt-3">
            <Avatar class="border border-gray-400 dark:border-gray-500 w-5 h-5">
                <AvatarImage v-if="post.profile.profile_photo" :src="post.profile.profile_photo" alt="imagem do usuário"/>
                <AvatarImage v-else src="@/assets/images/user-profile.png" alt="imagem do usuário"/>
                <AvatarFallback>{{ post.profile.user.username }}</AvatarFallback>
            </Avatar>
            <span class="username font-medium text-xs text-gray-600 dark:text-gray-200">{{ post.profile.user.username }}</span>
        </div>
        <div>
            <RouterLink
                class="insight-link"
                :to="{ 
                    name: 'post',
                    params: { 
                        username: post.profile.user.username, 
                        slugAndId: `${post.slug}-${post.public_id}`
                    }
                }">
                <h3 class="title tracking-tighter text-sm line-clamp-2 font-semibold text-gray-800 dark:text-gray-200 py-2">
                    {{ post.title }}
                </h3>
            </RouterLink>
        </div>
    </div>
</template>
<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>