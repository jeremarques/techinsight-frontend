<template>
    <div class="grid grid-cols-1 md:gap-12 md:grid-cols-5 relative">
        <div class="md:col-span-2 md:p-6 bg-white mt-4 md:mt-8">
            <div class="user w-full flex flex-col items-center gap-6 relative">
                <Button variant="outline" size="sm" class="absolute top-0 left-0 gap-2">
                    <Edit class="size-4" />Editar
                </Button>
                <Avatar class="size-32 md:size-24">
                    <AvatarImage v-if="profile.profile_photo" :src="profile.profile_photo" />
                    <AvatarImage v-else src="@/assets/images/user-profile.png" />                    
                    <AvatarFallback>{{ profile.user.username }}</AvatarFallback>
                </Avatar>
                <div class="user-names flex flex-col gap-1 items-center">
                    <h2 class="name font-bold text-xl tracking-tighter text-gray-800">{{ profile.user.full_name }} 🇧🇷</h2>
                    <h2 class="username font-medium text-base text-gray-500 tracking-tighter">{{ profile.user.username }}</h2>
                </div>
                <div class="bio flex flex-col items-end px-2">
                    <p class="bio font-body-regular text-sm line-clamp-2">
                        {{ profile.bio }}
                    </p>
                    <Button variant="link" size="sm" class="p-0 h-6 font-body-medium text-xs">Ler mais...</Button>
                </div>
            </div>
            <div class="user-stats grid grid-cols-3 my-6">
                <div class="insights col-span-1 flex flex-col items-center">
                    <h3 class="font-bold text-gray-800 text-xl tracking-tight">254</h3>
                    <span class="font-medium text-sm text-gray-500">Insights</span>
                </div>
                <div class="followers col-span-1 flex flex-col items-center">
                    <h3 class="font-bold text-gray-800 text-xl tracking-tight">325 Mil</h3>
                    <span class="font-medium text-sm text-gray-500">Seguidores</span>
                </div>
                <div class="following col-span-1 flex flex-col items-center">
                    <h3 class="font-bold text-gray-800 text-xl tracking-tight">500</h3>
                    <span class="font-medium text-sm text-gray-500">Seguindo</span>
                </div>
            </div>
            <div class="user-actions grid grid-flow-col auto-cols-auto gap-2">
                <Button variant="outline" class=" gap-2">
                    <UserPlus :stroke-width="1.80" class="size-5" />
                    Seguir
                </Button>
                <Button variant="outline" class=" gap-2">
                    <MessageSquareText :stroke-width="1.60" class="size-5" />
                    Mensagem
                </Button>
            </div>
            <div class="user-informations flex flex-col gap-2 mt-6">
                <div class="website flex flex-col gap-1 font-body-medium text-sm text-gray-800">
                    <span class="text-gray-600">Website:</span>
                    <span>{{ profile.website_url }}</span>
                </div>
                <div class="member-at flex flex-col gap-1 font-body-medium text-sm text-gray-800">
                    <span class="text-gray-600">Membro desde:</span>
                    <span>{{ profile.user.created_at }}</span>
                </div>
            </div>

        </div>
        <div class="md:col-span-3">
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
                            <ListPosts />
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
                    {{ props.about }}
                </p>
            </TabsContent>
        </Tabs>
        </div>
    </div>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Edit, MessageSquareText, UserPlus } from 'lucide-vue-next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ListPosts from '@/views/Blog/Home/ListPosts.vue'
import PostCardSkeleton from '../Skeletons/PostCardSkeleton.vue'

const props = defineProps({
    profile: {
        type: Object,
        required: true
    }
})
</script>