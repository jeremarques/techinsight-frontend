<template>
    <div class="flex flex-col py-2">
        <div class="user flex items-center gap-2.5 mt-3">
            <div class="flex items-center gap-2.5">
                <Skeleton class="w-5 h-5 rounded-full" />
                <Skeleton class="h-2 w-20" />
            </div>
        </div>
        <div class="py-2">
            <Skeleton class="h-3 w-42" />
        </div>
    </div>
</template>
<script setup>
import { Skeleton } from '@/components/ui/skeleton'
</script>