<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div class="md:col-span-2 md:p-6 bg-white mt-8">
            <div class="user w-full flex flex-col items-center gap-6">
                <Avatar class="size-32 md:size-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1620403724159-40363e84a155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyZWF0b3JzfGVufDB8fDB8fHww" />
                    <AvatarFallback>Jeremias</AvatarFallback>
                </Avatar>
                <h2 class="username font-bold text-2xl tracking-tighter">Jeremarques</h2>
                <div class="bio flex flex-col items-end px-2">
                    <p class="bio font-body-regular text-sm line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lacinia dolor. Sed libero mi, tempus non aliquam vitae, feugiat a arcu.
                    </p>
                    <Button variant="link" size="sm" class="p-0 h-6 font-body-medium text-xs mr-3">Ler mais...</Button>
                </div>
            </div>
            <div class="user-actions grid grid-flow-col auto-cols-auto gap-2 mt-6">
                <Button variant="outline" class=" gap-2">
                    <UserPlus :stroke-width="1.80" class="size-5" />
                    Seguir
                </Button>
                <Button variant="outline" class=" gap-2">
                    <MessageSquareText :stroke-width="1.60" class="size-5" />
                    Mensagem
                </Button>
            </div>

        </div>
        <div class="md:col-span-3">
            asdfas
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { MessageSquareText, UserPlus } from 'lucide-vue-next';

const isOpen = ref(false)
</script>