<template>
<div class="publi-card drop-shadow-xs bg-[#fcfcfc] dark:bg-gray-800 flex flex-col px-6 py-6 lg:px-8 border rounded-xl dark:border-gray-600">
    <div class="publi-details flex justify-between items-center w-full">
        <div class="user flex items-center gap-2.5 cursor-pointer">
            <div class="w-7 h-7 md:w-8 md:h-8 overflow-hidden rounded-full border border-gray-400 dark:border-gray-500">
                <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" class="avatar object-cover w-full h-full" alt="avatar">
            </div>
            <span class="username font-medium text-sm text-gray-600 dark:text-gray-200">{{ author.user.username }}</span>
        </div>
        <div class="publi-date font-regular text-xs text-gray-400">
            {{ formattedCreatedAt }}
        </div>
    </div>
    <div class="publi-content">
        <router-link 
            class="pt-4 pb-5 flex flex-col"
            :to="{ 
                name: 'post',
                params: { 
                    username: author.user.username, 
                    slugAndId: `${postSlug}-${public_id}`
                }
            }">
            <h2 class="title text-lg md:text-xl line-clamp-2 font-semibold text-gray-800 dark:text-gray-50">
                {{ title }}
            </h2>
            <p class="content mt-1 line-clamp-2 font-regular text-xs text-gray-500 dark:text-gray-400">
                {{ content }}
            </p>
        </router-link>
    </div>
    <div class="publi-stats flex justify-between items-center w-full">
        <div class="left flex items-center gap-6">
            <div class="likes flex items-center gap-2">
                <button type="button" v-if="!isLiked">
                    <Icon name="Like" color="text-gray-800 dark:text-gray-200" size="5" />
                </button>
                <button type="button" v-else>
                    <Icon name="LikeSolid" fill="#4f97e1" size="5" />
                </button>
                
                <span v-if="!!likesCounter" class="likes-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                    {{ likesCounter }}
                </span>
            </div>
            <div class="comments flex items-center gap-2">
                <button type="button">
                    <Icon name="Chat" color="text-gray-800 dark:text-gray-200" size="5" />
                </button>
                <span v-if="!!commentsCounter" class="comments-counter font-regular text-sm text-gray-800 dark:text-gray-200">
                    {{ commentsCounter }}
                </span>
            </div>
        </div>
        <div class="right flex items-center">
            <router-link 
                class="tag flex items-center justify-center py-1 px-2 rounded-full bg-gray-100 dark:bg-transparent dark:border dark:border-gray-500"
                v-if="tag"
                :to="{
                    name: 'tag-posts',
                    params: {
                        slug: tag.slug
                    }
                }"
                >
                <span class="text-[10px] text-gray-600 dark:text-gray-300">{{ tag.name }}</span>
            </router-link>
        </div>
    </div>
</div>
</template>
<script setup>
import Icon from '@/components/Icon/index.vue'
import { formatTimeDifference } from '@/utils/date'

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    author: {
        type: Object,
        required: true        
    },
    title: {
        type: String,
        required: true
    },
    postSlug: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tag: {
        type: Object,
        required: true
    },
    likesCounter: {
        type: Number,
        required: true
    },
    commentsCounter: {
        type: Number,
        required: true
    },
    isLiked: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    },
})

const formattedCreatedAt = formatTimeDifference(props.createdAt)
</script>