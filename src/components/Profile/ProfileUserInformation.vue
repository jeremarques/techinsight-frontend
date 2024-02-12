<template>
    <div class="profile-user-informations">
        <div class="user w-full flex flex-col items-center gap-6 relative">
            <Avatar class="size-32 md:size-28">
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
                <h3 class="font-bold text-gray-800 text-xl tracking-tight">{{ formatBigNumbers(profile.posts) }}</h3>
                <span class="font-medium text-sm text-gray-500">Insights</span>
            </div>
            <div class="followers col-span-1 flex flex-col items-center">
                <h3 class="font-bold text-gray-800 text-xl tracking-tight">{{ formatBigNumbers(profile.user.followers) }}</h3>
                <span class="font-medium text-sm text-gray-500">Seguidores</span>
            </div>
            <div class="following col-span-1 flex flex-col items-center">
                <h3 class="font-bold text-gray-800 text-xl tracking-tight">{{ formatBigNumbers(profile.user.following) }}</h3>
                <span class="font-medium text-sm text-gray-500">Seguindo</span>
            </div>
        </div>
        <div class="user-actions">
            <div v-if="profile.user.id !== user?.id" class="grid grid-flow-col auto-cols-auto gap-2">
                <Button 
                    variant="outline" 
                    class="gap-2" 
                    :disabled="isLoading"
                    @click="handleFollow"
                >
                    <UserPlus v-if="!profile.user.is_follower" :stroke-width="1.80" class="size-5" />
                    <UserCheck v-else :stroke-width="1.80" class="size-5" />
                    {{ !profile.user.is_follower ? 'Seguir' : 'Seguindo' }}
                </Button>
                <Button variant="outline" class="gap-2">
                    <MessageSquareText :stroke-width="1.60" class="size-5" />
                    Mensagem
                </Button>
            </div>
            <div v-else>
                <Button variant="outline" class="w-full gap-2">
                    <UserCog :stroke-width="1.60" class="size-5" />
                    Editar perfil
                </Button>
            </div>
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
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/stores/user';
import { Edit, MessageSquareText, UserCheck, UserCog, UserPlus } from 'lucide-vue-next'
import { formatBigNumbers } from '@/utils/number'
import services from '@/services'

const props = defineProps({
    profile: {
        type: Object,
        required: true
    }
})

const userStore = useUserStore()
const user = userStore.currentUser
const toast = useToast()
const isLoading = ref(false)

async function handleFollow() {
    if (props.profile.user.is_follower) {
        try {
            isLoading.value = true
            const { data, status } = await services.follow.removeFollow(props.profile.user.id)
    
            if (status === 204) {
                props.profile.user.is_follower = false
                props.profile.user.followers -= 1
                isLoading.value = false
                return
            }
            if (errors.status === 500) {
                toast.error('Ocorreu um erro ao deixar de seguir o usuário. Por favor, tente novamente mais tarde.')
            }
            isLoading.value = false

        } catch (err) {
            isLoading.value = false
            toast.error('Ocorreu um erro ao deixar de seguir o usuário. Por favor, tente novamente mais tarde.')
        }

    } else {
        try {
            isLoading.value = true
            const { data, errors } = services.follow.addFollow(props.profile.user.id)
    
            if (!errors) {
                props.profile.user.is_follower = true
                props.profile.user.followers += 1
                isLoading.value = false
                return
            }
            if (errors.status === 500) {
                toast.error('Ocorreu um erro ao seguir o usuário. Por favor, tente novamente mais tarde.')
            }
            isLoading.value = false

        } catch (err) {
            isLoading.value = false
            toast.error('Ocorreu um erro ao seguir o usuário. Por favor, tente novamente mais tarde.')
        }
    }
}
</script>