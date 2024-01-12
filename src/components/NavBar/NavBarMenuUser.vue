<template>
<Sheet>
    <SheetTrigger as-child>
        <button type="button" class="flex items-center focus:outline-none md:pl-8" aria-label="toggle profile dropdown">
            <Avatar class="border border-gray-400 dark:border-gray-500 w-9 h-9 md:w-10 md:h-10">
                <AvatarImage v-if="!!userData.profile_photo" :src="userData.profile_photo" alt="imagem do usuário"/>
                <AvatarImage v-if="!!!userData.profile_photo" src="../../assets/images/user-profile.png" alt="imagem do usuário"/>
                <AvatarFallback>{{ userData.user.username }}</AvatarFallback>
            </Avatar>
        </button>
    </SheetTrigger>
    <SheetContent>
        <h2 class="font-regular text-sm -mt-2 text-gray-600 dark:text-gray-300">Menu do usuário</h2>

        <div class="mt-12 font-regular text-sm">
            <div class="flex flex-col items-center gap-x-4 ">
                <Avatar class="border-2 border-gray-300 dark:border-gray-400 h-20 w-20" size="lg">
                    <AvatarImage v-if="!!userData.profile_photo" :src="userData.profile_photo" alt="imagem do usuário"/>
                    <AvatarImage v-else src="../../assets/images/user-profile.png" alt="imagem do usuário"/>
                    <AvatarFallback>{{ userData.user.username }}</AvatarFallback>
                </Avatar>
                <span class="text-base font-medium mt-4 mb-6">{{ userData.user.full_name }}</span>
            </div>

            <div class="group relative flex items-center p-1 gap-x-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div class="p-2 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-800/40">
                    <CircleUserRound :stroke-width="1.35" />
                </div>
                <a href="#" class="text-gray-900 dark:text-white">
                    Perfil
                </a>
            </div>
            <div class="group relative flex items-center p-1 gap-x-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div class="p-2 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-800/40">
                    <FileText :stroke-width="1.35" />
                </div>
                <a href="#" class="text-gray-900 dark:text-white">
                    Seus insights
                </a>
            </div>
            <div class="group relative flex items-center p-1 gap-x-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div class="p-2 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-800/40">
                    <Settings :stroke-width="1.35" />
                </div>
                <a href="#" class="text-gray-900 dark:text-white">
                    Configurações
                </a>
            </div>
            <div class="group relative flex items-center p-1 gap-x-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div class="p-2 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-800/40">
                    <HelpCircle :stroke-width="1.35" />
                </div>
                <a href="#" class="font-regular text-gray-900 dark:text-white">
                    Ajuda
                </a>
            </div>
            <div class="group mt-6">
                <Button variant="secondary" class="group-hover:bg-red-500 w-full">
                    <span class="transition duration-200 group-hover:text-white mr-2">Sair</span>
                    <LogOut :stroke-width="1.90" :size="16" class="transition duration-200 group-hover:text-white" />
                </Button>
            </div>
        </div>
    </SheetContent>
</Sheet>
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
    LogOut
} from 'lucide-vue-next'

const props = defineProps({
    userData: {
        type: Object,
        required: true
    }
})
</script>