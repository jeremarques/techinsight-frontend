<template>
    <Card class="bg-transparent border-gray-50 dark:border-gray-800">
        <CardHeader class="flex-row items-center justify-between">
            <div class="flex items-center gap-2.5">
                <Skeleton class="w-8 h-8 rounded-full" />
                <Skeleton class="h-3 w-24" />
            </div>
            <Skeleton class="h-3 w-20" />
        </CardHeader>
        <CardContent class="space-y-2">
            <Skeleton class="h-6 w-52" />
            <Skeleton class="h-4 w-64" />
        </CardContent>
        <CardFooter class="flex items-center justify-between">
            <div class="flex items-center gap-6">
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
        </CardFooter>
    </Card>
</template>
<script setup>
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
</script>