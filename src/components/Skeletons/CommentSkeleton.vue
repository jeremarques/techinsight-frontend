<template>
    <div class="bg-transparent dark:bg-dark-mixed-150 border border-slate-300/15 rounded-lg dark:border-dark-mixed-300 shadow-none">
        <div class="flex items-center justify-start px-4 pt-4 space-x-4 space-y-0">
            <div class="flex items-center gap-2.5">
                <Skeleton class="size-6 rounded-full" />
                <Skeleton class="h-3 w-24" />
            </div>
            <Skeleton class="h-3 w-20" />
        </div>
        <div class="flex flex-col px-4 pt-3 pb-5">
            <Skeleton class="h-4 w-96" />
        </div>
    </div>
</template>

<script setup>
import { Skeleton } from '@/components/ui/skeleton'
</script>