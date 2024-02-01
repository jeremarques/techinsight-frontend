<template>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div class="md:col-span-2 md:p-6 bg-white mt-4 md:mt-8">
            <div class="user w-full flex flex-col items-center gap-6">
                <Avatar class="size-32 md:size-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1620403724159-40363e84a155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyZWF0b3JzfGVufDB8fDB8fHww" />
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
            <TabsList class="bg-transparent">
                <TabsTrigger value="insights" class="group data-[state=active]:relative data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none">
                    Insights
                    <span className="absolute -bottom-px h-[2.5px] bg-brand-blue-600 dark:bg-brand-blue-400 transition-all w-4/5 rounded-lg"></span>
                </TabsTrigger>
                <TabsTrigger value="about" class="group data-[state=active]:relative data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none">
                    Sobre
                    <span className="absolute -bottom-px h-[2.5px] bg-brand-blue-600 dark:bg-brand-blue-400 transition-all w-4/5 rounded-lg"></span>
                </TabsTrigger>
            </TabsList>
            
            <TabsContent value="insights" class="mt-6">
                <div className="grid auto-rows-[170px] grid-cols-3 gap-4">
                    <div
                        v-for="i in Array(7).keys()"
                        :key="i"
                        :class="[i === 3 || i === 6 ? 'col-span-2' : '', 'row-span-1 rounded-xl border border-slate-400/10 bg-neutral-50/70 p-4 dark:bg-neutral-900']"
                    >   
                        <div class="user flex items-center gap-2.5 cursor-pointer mb-2">
                            <Avatar class="border border-gray-400 dark:border-gray-500 w-5 h-5">
                                <AvatarImage src="https://images.unsplash.com/photo-1620403724159-40363e84a155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyZWF0b3JzfGVufDB8fDB8fHww" alt="imagem do usuário"/>
                                <AvatarFallback>jeremarques</AvatarFallback>
                            </Avatar>
                            <span class="username font-medium text-xs text-gray-600 dark:text-gray-200">jeremarques</span>
                        </div>
                        <h3 class="font-bold tracking-tighter text-base text-gray-700 md:line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </div>
                </div>
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
import { MessageSquareText, UserPlus } from 'lucide-vue-next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const isOpen = ref(false)
</script>