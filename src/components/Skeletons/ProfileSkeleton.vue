<template>
    <div class="grid grid-cols-1 md:gap-12 md:grid-cols-5 relative">
        <div class="md:col-span-2 md:p-6 bg-white mt-4 md:mt-8">
            <div class="w-full flex flex-col items-center gap-6 relative">
                <Skeleton class="size-32 md:size-24 rounded-full" />
                <div class="flex flex-col gap-2 items-center">
                    <Skeleton class="h-5 w-52" />
                    <Skeleton class="h-4 w-32" />
                </div>
                <div class="flex flex-col items-end px-2">
                    <p>
                        <Skeleton class="h-3 w-full" />
                        <Skeleton class="h-3 w-4/5" />
                    </p>
                </div>
            </div>
            <div class="user-stats grid grid-cols-3 my-6">
                <div class="col-span-1 flex flex-col items-center gap-2">
                    <Skeleton class="h-8 w-14 rounded-2xl" />
                    <Skeleton class="h-4 w-20" />
                </div>
                <div class="col-span-1 flex flex-col items-center gap-2">
                    <Skeleton class="h-8 w-14 rounded-2xl" />
                    <Skeleton class="h-4 w-20" />
                </div>
                <div class="col-span-1 flex flex-col items-center gap-2">
                    <Skeleton class="h-8 w-14 rounded-2xl" />
                    <Skeleton class="h-4 w-20" />
                </div>
            </div>
            <div class="grid grid-flow-col auto-cols-auto gap-2">
                <Skeleton class="h-8 w-auto" />
                <Skeleton class="h-8 w-auto" />
            </div>
            <div class="flex flex-col gap-4 mt-6">
                <div class="flex flex-col gap-2">
                    <Skeleton class="h-3 w-28" />
                    <Skeleton class="h-3 w-3/5" />
                </div>
                <div class="member-at flex flex-col gap-2">
                    <Skeleton class="h-3 w-28" />
                    <Skeleton class="h-3 w-52" />
                </div>
            </div>

        </div>
        <div class="md:col-span-3 mt-12">
            <div class="flex flex-col gap-4">
                <PostCardSkeleton
                    v-for="n in Array(4).keys()"
                    :key="n"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Skeleton } from '@/components/ui/skeleton'
import PostCardSkeleton from './PostCardSkeleton.vue'
</script>