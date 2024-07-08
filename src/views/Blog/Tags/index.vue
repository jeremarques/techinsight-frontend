<template>
    <div class="container px-6 md:px-6 lg:px-20 xl:px-36 mx-auto pt-8">
        <Suspense>
            <template #default>
                <div class="md:col-span-2 flex flex-col space-y-6 mb-16 md:mb-8">
                    <ListTagPosts />
                </div>
            </template>
            <template #fallback>
                <div class="md:col-span-2 flex flex-col gap-4 mb-16 md:mb-8">
                    <PostCardSkeleton
                        v-for="n in Array(7).keys()"
                        :key="n"
                    />
                </div>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import ListTagPosts from './ListTagPosts.vue'
import PostCardSkeleton from '@/components/Skeletons/PostCardSkeleton.vue'
</script>
