<template>
    <div class="bg-neutral-50/30 dark:bg-dark-mixed-150 border border-slate-400/15 rounded-lg dark:border-dark-mixed-300 shadow-none">
        <div class="flex items-center justify-between px-4 pt-4">
            <div class="flex items-center space-x-2">
                <RouterLink
                    class="user flex items-center gap-2.5 cursor-pointer"
                    :to="{ 
                        name: 'user-profile',
                        params: { 
                            username: comment.profile.user.username
                        }
                    }">
                    <Avatar class="avatar-image border border-gray-400 dark:border-gray-500 size-6">
                        <AvatarImage v-if="comment.profile.profile_photo" :src="comment.profile.profile_photo" alt="imagem do usuário"/>
                        <AvatarImage v-else src="@/assets/images/user-profile.png" alt="imagem do usuário"/>                    
                        <AvatarFallback>{{ comment.profile.user.username }}</AvatarFallback>
                    </Avatar>
                    <span class="username font-regular text-sm text-gray-600 dark:text-gray-200">{{ comment.profile.user.username }}</span>
                </RouterLink>
                <div class="publi-date font-regular text-xs text-gray-500 dark:text-gray-400">
                    {{ createdAtFormatted }}
                </div>
                <span v-if="comment.updated_at" class="edited font-regular text-xs text-gray-500">(Editado)</span>
            </div>
            <div v-if="comment.profile.user.id == user?.id" class="comment-user-actions">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MoreVertical class="size-5 text-gray-700 dark:text-gray-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="mr-4">
                        <DropdownMenuItem class="flex items-center gap-2" @click="openEditComment = !openEditComment">
                            <Edit2 class="size-4" />
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem class="flex items-center gap-2 text-red-500" @click="showDeleteDialog = true">
                            <Trash2 class="size-4" />
                            Excluir
                        </DropdownMenuItem>
                        
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
        <AlertDialog :open="showDeleteDialog">
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                    Esta ação não poderá ser desfeita. Você excluirá permanentemente seu comentário desta publicação.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel @click="showDeleteDialog = false">Cancelar</AlertDialogCancel>
                <Button 
                    variant="destructive" 
                    @click="deleteComment" 
                    :disabled="isLoading"
                >
                    Excluir
                    <Loader2 v-if="isLoading" class="animate-spin size-4 ml-2" />
                </Button>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        <div class="flex flex-col px-4 pt-3 pb-5">
            <p v-if="!openEditComment" class="content text-base font-body-regular text-gray-800 dark:text-gray-200">
                {{ comment.content }}
            </p>
             
            <div 
                v-else
            >
                <Textarea 
                    v-model="newCommentContent"
                    class="font-regular resize-none dark:bg-dark-mixed-100 dark:border-dark-mixed-300"
                    :class="{ 'border-red-400': !!!newCommentContent.length }"
                />
                <p v-if="!!!newCommentContent.length" class="text-red-400 font-regular text-sm mt-1">Este campo é obrigatório</p>
                <div class="flex items-center justify-end mt-3 gap-2">
                    <Button @click="openEditComment = !openEditComment, newCommentContent = comment.content" size="sm" variant="ghost">Cancelar</Button>
                    <Button @click="editComment" size="sm" :disabled="isLoading || !!!newCommentContent" class="gap-2 bg-brand-main-800">
                        Confirmar
                        <Loader2 v-if="isLoading" class="animate-spin size-4" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Edit2, Loader2, MoreVertical, Trash2 } from 'lucide-vue-next'
import { formatTimeDifference } from '@/utils/date'
import { useUserStore } from '@/stores/user'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import services from '@/services'

const props = defineProps({
    comment: {
        type: Object,
        required: true
    }
})

const isLoading = ref(false)
const openEditComment = ref(false)
const newCommentContent = ref(props.comment.content)
const showDeleteDialog = ref(false)
const userStore = useUserStore()
const user = userStore.currentUser
const toast = useToast()
const emit = defineEmits(['deleteComment'])
const createdAtFormatted = formatTimeDifference(props.comment.created_at)

async function editComment() {
    try {
        isLoading.value = true
        const { data, errors } = await services.comment.editComment({
            commentId: props.comment.id,
            content: newCommentContent.value
        })

        if (!errors) {
            isLoading.value = false
            openEditComment.value = false
            props.comment.content = data.content
            props.comment.updated_at = data.updated_at
            return
        }

        if (errors.status === 500) {
            toast.error('Ocorreu um erro ao editar o comentário. Por favor, tente novamente mais tarde.')
        }

        isLoading.value = false

    } catch (err) {
        isLoading.value = false
        toast.error('Ocorreu um erro ao editar o comentário. Por favor, tente novamente mais tarde.')
    }
}

async function deleteComment() {
    try {
        isLoading.value = true
        const responseStatus = await services.comment.deleteComment(props.comment.id)
        
        if (responseStatus === 204) {
            emit('deleteComment', props.comment.id)
            showDeleteDialog.value = false
            isLoading.value = false
            return
        }

        if (responseStatus === 500) {
            toast.error('Ocorreu um erro ao excluir o comentário. Por favor, tente novamente mais tarde.')
            isLoading.value = false
        }
    } catch (err) {
        toast.error('Ocorreu um erro ao excluir o comentário. Por favor, tente novamente mais tarde.')
        isLoading.value = false
    }
}
</script>