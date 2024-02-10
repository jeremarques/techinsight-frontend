<template>
    <div class="comments-head flex items-center justify-between">
        <h2 class="font-regular text-lg text-gray-800">{{ state.comments.length > 0 ? state.comments.length : '' }} Comentários</h2>
        <Button @click="openWriteComment = !openWriteComment">Comentar</Button>
    </div>
    <div v-if="openWriteComment" class="bg-neutral-50/30 dark:bg-dark-mixed-150 border border-slate-400/15 rounded-lg dark:border-dark-mixed-300 shadow-none py-3 px-4">
        <Label class="font-regular mb-2" for="comment">Escreva um comentário</Label>
        <Textarea 
            v-model="state.comment.value" 
            placeholder="Digite seu comentário aqui" 
            class="font-regular resize-none"
            :class="{ 'border-red-400': !!state.comment.errorMessage }"
            id="comment" 
            name="comment" 
        />
        <span class="text-red-400 font-regular text-sm">{{ state.comment.errorMessage }}</span>
        <div class="write-comment-actions flex items-center justify-end gap-2 mt-3 mb-1">
            <Button @click="openWriteComment = !openWriteComment" size="sm" variant="ghost">Cancelar</Button>
            <Button @click="createComment" size="sm" :disabled="isLoading || !!!state.comment.value" class="gap-2">
                Confirmar
                <Loader2 v-if="isLoading" class="animate-spin size-4" />
            </Button>
        </div>
    </div>
    <Comment
        v-if="!!state.comments.length"
        v-for="comment in state.comments"
        :key="comment.id"
        :comment="comment"
        @delete-comment="deleteCommentFromList"
    />
    <div v-else class="w-full flex items-center justify-center py-6">
        <p class="font-regular text-sm text-gray-400">Nenhum comentário...</p>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useToast } from 'vue-toastification'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-vue-next'
import Comment from '@/components/Post/Comment.vue'
import services from '@/services'

const toast = useToast()
const props = defineProps({
    postId: {
        type: String,
        required: true
    }
})

const commentFieldSchema = toTypedSchema(
    z.string().min(1, { message: 'Este campo é obrigatório' })
)
const { 
    value: commentValue, 
    errorMessage: commentErrorMessage
} = useField('comment', commentFieldSchema)

const state = reactive({
    comment: {
        value: commentValue,
        errorMessage: commentErrorMessage
    },
    comments: []
})
const openWriteComment = ref(false)
const isLoading = ref(false)

async function getComments() {
    const { data, errors } = await services.comment.getComments(props.postId)
    if (!errors) {
        state.comments = data
    }
}
await getComments()

async function createComment() {
    try {
        toast.clear()
        isLoading.value = true
        const { data, errors } = await services.comment.createComment({ 
            postId: props.postId,
            content: state.comment.value
        })
        
        if (!errors) {
            openWriteComment.value = false
            isLoading.value = false
            state.comments.unshift(data)
            state.comment.value = ''
            return
        }
    
        if (errors.status === 500) {
            toast.error('Ocorreu um erro ao publicar o comentário. Por favor, tente novamente mais tarde.')
        }

        isLoading.value = false

    } catch (err) {
        isLoading.value = false
        toast.error('Ocorreu um erro ao publicar o comentário. Por favor, tente novamente mais tarde.')
    }
}

function deleteCommentFromList(commentId) {
    state.comments = state.comments.filter(comment => comment.id !== commentId)
}
</script>