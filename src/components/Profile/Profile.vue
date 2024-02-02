<template>
    <div class="grid grid-cols-1 md:gap-12 md:grid-cols-5 relative">
        <div class="md:col-span-2 md:p-6 bg-white mt-4 md:mt-8">
            <div class="user w-full flex flex-col items-center gap-6 relative">
                <Button variant="outline" size="sm" class="absolute top-0 left-0 gap-2">
                    <Edit class="size-4" />Editar
                </Button>
                <Avatar class="size-32 md:size-24">
                    <AvatarImage src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg" />
                    <AvatarFallback>Jeremias</AvatarFallback>
                </Avatar>
                <div class="user-names flex flex-col gap-1 items-center">
                    <h2 class="name font-bold text-xl tracking-tighter text-gray-800">Jeremias Marques 🇧🇷</h2>
                    <h2 class="username font-medium text-base text-gray-500 tracking-tighter">jeremarques</h2>
                </div>
                <div class="bio flex flex-col items-end px-2">
                    <p class="bio font-body-regular text-sm line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lacinia dolor. Sed libero mi, tempus non aliquam vitae, feugiat a arcu.
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
                    <span>https://jeremiasmarques.vercel.app</span>
                </div>
                <div class="member-at flex flex-col gap-1 font-body-medium text-sm text-gray-800">
                    <span class="text-gray-600">Membro desde:</span>
                    <span>20 Jan, 2024</span>
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
                        <div>
                            <PostItemSkeleton
                                v-for="n in Array(4).keys()"
                                :key="n"
                            />
                        </div>
                    </template>
                </Suspense>
            </TabsContent>
            <TabsContent value="about">
                <p class="font-body-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Sit amet consectetur adipiscing elit duis tristique. Lectus quam id leo in vitae turpis massa. Imperdiet proin fermentum leo vel orci. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Imperdiet nulla malesuada pellentesque elit eget gravida. Sit amet mattis vulputate enim nulla. Ut sem viverra aliquet eget sit amet tellus. Scelerisque purus semper eget duis at tellus at urna. At urna condimentum mattis pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nibh tortor id aliquet lectus proin nibh nisl. Justo eget magna fermentum iaculis eu. Turpis in eu mi bibendum neque egestas congue. Erat nam at lectus urna duis convallis. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Congue quisque egestas diam in arcu cursus. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Sem et tortor consequat id porta nibh. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Congue eu consequat ac felis donec et odio pellentesque diam. Mauris a diam maecenas sed enim ut sem viverra. Urna id volutpat lacus laoreet non curabitur. Feugiat pretium nibh ipsum consequat. Commodo ullamcorper a lacus vestibulum sed arcu.
                </p>
            </TabsContent>
        </Tabs>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Edit, MessageSquareText, UserPlus } from 'lucide-vue-next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ListPosts from '@/views/Blog/Home/ListPosts.vue'
import PostItemSkeleton from '../Skeletons/PostItemSkeleton.vue'

const isOpen = ref(false)
</script>