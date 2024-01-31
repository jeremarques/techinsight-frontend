<template>
    <div class="container px-6 md:px-6 lg:px-20 xl:px-36 mx-auto pt-8 ">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Suspense>
                <template #default>
                    <div class="md:col-span-2 flex flex-col space-y-6 mb-16 md:mb-8">
                        <ListPosts />
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
            <div class="hidden md:block md:col-span-1">
                <div class="w-full border border-gray-200/80 rounded-lg dark:border-dark-mixed-300 p-6">
                    <h2 class="flex gap-1 items-center font-medium text-base mb-1">
                        Top Insights
                        <img class="h-4 w-4" src="@/assets/images/logo-icon.svg" alt="">
                    </h2>
                    <Suspense>
                        <template #default>
                            <div class="divide-y divide-gray-100">
                                <ListTopPosts />
                            </div>
                        </template>
                        <template #fallback>
                            <div>
                                <PostItemSkeleton
                                    v-for="n in Array(4).keys()"
                                    :key="n"
                                />
                            </div>
                        </template>
                    </Suspense>
                </div>
            </div>
        </div> 
    </div>
</template>

<script setup>
import ListPosts from './ListPosts.vue'
import ListTopPosts from './ListTopPosts.vue'
import PostCardSkeleton from '@/components/Skeletons/PostCardSkeleton.vue'
import PostItemSkeleton from '@/components/Skeletons/PostItemSkeleton.vue'
</script>