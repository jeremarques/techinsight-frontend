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
        <DropdownMenuContent class="mt-1 mr-4 2xl:mr-20 w-[250px] dark:bg-dark-mixed-100 dark:border-dark-mixed-300/60">
            <DropdownMenuLabel>
                <RouterLink 
                    class="flex flex-col"
                    :to="{
                        name: 'user-profile',
                        params: {
                                username: userData.user.username
                        }
                    }">
                    <span class="font-medium text-sm">{{ userData.user.full_name }}</span>
                    <small class="text-gray-500 font-regular">{{ userData.user.username }}</small>
                </RouterLink>
            </DropdownMenuLabel>
            <DropdownMenuSeparator class="dark:bg-dark-mixed-300/60" />
            <DropdownMenuItem>
                <RouterLink 
                    class="w-full flex items-center gap-3 font-regular text-gray-900 dark:text-white"
                    :to="{ name: 'edit-user-profile' }">
                    <Settings :stroke-width="1.50" class="size-6" />
                    Editar Perfil
                </RouterLink>
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
                    <HelpCircle :stroke-width="1.40" class="size-6" />
                    <a href="#" class="font-regular text-gray-900 dark:text-white">
                        Ajuda
                    </a>
                </div>
            </DropdownMenuItem>
            <div class="w-full px-2 py-2">
                <ThemeSwitcherMenu />
            </div>
            <div class="px-2 py-2">
                <Button 
                    variant="destructiveOutilined" 
                    size="sm" 
                    class="gap-2 w-full dark:border-dark-mixed-300/60 dark:bg-dark-mixed-100"
                    @click="logout()"
                >
                    <span>Sair</span>
                    <LogOut :stroke-width="2" class="size-4" />
                </Button>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    FileText,
    Settings,
    HelpCircle,
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
import ThemeSwitcherMenu from '@/components/ThemeSwitcherMenu.vue'
import services from '@/services'

const props = defineProps({
    userData: {
        type: Object,
        required: true
    }
})

function logout() {
    try {
        return services.auth.logout()
    } catch (error) {
        console.log(error)
    }
}
</script>