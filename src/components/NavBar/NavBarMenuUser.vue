<template>
    <DropdownMenu>
        <DropdownMenuTrigger class="md:pl-8 flex" as-child>
            <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <Avatar class="border border-gray-400 dark:border-gray-500 size-9 md:size-10">
                    <AvatarImage v-if="!!userData.profile_photo" :src="userData.profile_photo" alt="imagem do usuário"/>
                    <AvatarImage v-if="!!!userData.profile_photo" src="../../assets/images/user-profile.png" alt="imagem do usuário"/>
                    <AvatarFallback>{{ userData.user.username }}</AvatarFallback>
                </Avatar>
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="mt-1 mr-4 xl:mr-8 2xl:mr-20 w-[220px]">
            <DropdownMenuLabel class="flex flex-col">
                <span class="font-medium text-sm">Jeremias Marques</span>
                <small class="text-gray-500 font-regular">jeremarques</small>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <div class="flex items-center gap-3">
                    <User :stroke-width="1.50" class="size-6" />
                    <a href="#" class="font-regular text-gray-900 dark:text-white">
                        Perfil
                    </a>
                </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <div class="flex items-center gap-3">
                    <FileText :stroke-width="1.30" class="size-6" />
                    <a href="#" class="font-regular text-gray-900 dark:text-white">
                        Seus Insights
                    </a>
                </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <div class="flex items-center gap-3">
                    <Settings :stroke-width="1.40" class="size-6" />
                    <a href="#" class="font-regular text-gray-900 dark:text-white">
                        Configurações
                    </a>
                </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <div class="flex items-center gap-3">
                    <HelpCircle :stroke-width="1.40" class="size-6" />
                    <a href="#" class="font-regular text-gray-900 dark:text-white">
                        Ajuda
                    </a>
                </div>
            </DropdownMenuItem>
            <div class="px-2 py-2">
                <Button variant="destructiveOutilined" size="sm" class="gap-2 w-full">
                    <span>Sair</span>
                    <LogOut :stroke-width="2" class="size-4" />
                </Button>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    CircleUserRound,
    FileText,
    Settings,
    HelpCircle,
    UserRound,
    User,
    LogOut
} from 'lucide-vue-next'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const props = defineProps({
    userData: {
        type: Object,
        required: true
    }
})
</script>