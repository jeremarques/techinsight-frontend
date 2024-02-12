<template>
    <div class="tabs">
        <Tabs default-value="insights" class="w-full">
            <TabsList class="bg-transparent p-0.5 gap-4">
                <TabsTrigger value="insights" class="group data-[state=active]:relative data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none p-0">
                    Insights
                </TabsTrigger>
                <TabsTrigger value="about" class="group off data-[state=active]:relative data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none  p-0">
                    Sobre mim
                </TabsTrigger>
            </TabsList>
            
            <TabsContent value="insights" class="mt-3">
                <Suspense>
                    <template #default>
                        <div class="flex flex-col gap-4">
                            <ListProfilePosts :profile-id="profile.id" />
                        </div>
                    </template>
                    <template #fallback>
                        <div class="flex flex-col gap-4">
                            <PostCardSkeleton
                                v-for="n in Array(4).keys()"
                                :key="n"
                            />
                        </div>
                    </template>
                </Suspense>
            </TabsContent>
            <TabsContent value="about">
                <p class="font-body-regular">
                    {{ profile.about }}
                </p>
            </TabsContent>
        </Tabs>
    </div>
</template>

<script setup>
import ListProfilePosts from './ListProfilePosts.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PostCardSkeleton from '../Skeletons/PostCardSkeleton.vue'

const props = defineProps({
    profile: {
        type: Object,
        required: true
    }
})
</script>