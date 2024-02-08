<template>
    <section class="pt-16 md:pt-28 pb-12 md:pb-16 px-6 xl:px-52 2xl:px-64 flex flex-col items-start space-y-4">
        <Skeleton class="h-5 w-24" />
        <Skeleton class="h-8 w-4/5" />
    </section>
    <section class="px-6 xl:px-52 2xl:px-64 mb-10">
        <div class="flex items-center justify-between">
            <div>
                <div class="user flex items-center gap-2.5">
                    <Skeleton class="w-7 h-7 md:w-11 md:h-11 rounded-full" />
                    <div class="flex flex-col items-start space-y-2">
                        <Skeleton class="h-3 w-28" />
                        <Skeleton class="h-3 w-20" />
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                    <Skeleton class="h-6 w-10" />
                </div>
                <div class="flex items-center gap-2">
                    <Skeleton class="h-6 w-10" />
                </div>
            </div>
        </div>
    </section>
    <section class="px-6 xl:px-52 2xl:px-64 font-p-regular text-xl text-gray-900 dark:text-gray-100 space-y-4">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-11/12" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-10/12" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-11/12" />
        <Skeleton class="h-4 w-11/12" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-10/12" />
        <Skeleton class="h-4 w-11/12" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-11/12" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-10/12" />
        <Skeleton class="h-4 w-8/12" />
        <Skeleton class="h-4 w-11/12" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-10/12" />
        <Skeleton class="h-4 w-11/12" />
        <Skeleton class="h-4 w-full" />
    </section>
</template>
<script setup>
import { Skeleton } from '@/components/ui/skeleton'
</script>