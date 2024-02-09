<template>
    <div>
        <div class="container md:px-6 lg:px-20 mx-auto pb-16 md:mb-0">
            <Suspense>
                <template #default>
                    <Post
                        :post-id="postId"
                        :username-param="usernameParam"
                        :slug-param="slugParam"
                    />
                </template>
                <template #fallback>
                    <PostSkeleton />
                </template>
            </Suspense>
            <div class="comments space-y-4 px-6 xl:px-52 2xl:px-56">
                <hr class="mt-12 mb-12">
                <Suspense>
                    <template #default>
                        <Comments :post-id="postId"/>
                    </template>
                    <template #fallback>
                        <CommentSkeleton 
                            v-for="n in Array(4).keys()"
                            :key="n"
                        />
                    </template>
                </Suspense>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import PostSkeleton from '@/components/Skeletons/PostSkeleton.vue'
import Post from '@/components/Post/Post.vue'
import Comments from './Comments.vue'
import CommentSkeleton from '@/components/Skeletons/CommentSkeleton.vue'

const route = useRoute()
// Get id of post and your slug
const slugAndId = route.params.slugAndId.split('-')
const postId = slugAndId.at(-1)
const usernameParam = route.params.username
const slugParam = slugAndId.slice(0, -1).join('-')
</script>