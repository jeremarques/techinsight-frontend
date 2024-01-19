<template>
    <div class="bg-transparent dark:bg-dark-mixed-150 border border-gray-50 rounded-lg dark:border-dark-mixed-300 shadow-none">
        <div class="flex items-center justify-start px-4 pt-4  space-x-4 space-y-0">
            <div class="flex items-center gap-2.5">
                <Skeleton class="w-8 h-8 rounded-full" />
                <Skeleton class="h-3 w-24" />
            </div>
            <Skeleton class="h-3 w-20" />
        </div>
        <div class="px-4 py-4">
            <Skeleton class="h-6 w-52" />
        </div>
        <div class="flex items-center justify-between px-4 pb-4 gap-8">
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                    <Skeleton class="h-4 w-10" />
                </div>
                <div class="flex items-center gap-2">
                    <Skeleton class="h-4 w-10" />
                </div>
            </div>
            <div class="flex items-center">
                <Skeleton class="h-4 w-12" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { Skeleton } from '@/components/ui/skeleton'
</script>