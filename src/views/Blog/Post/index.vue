<template>
    <div>
        <div class="container md:px-6 lg:px-20 mx-auto pb-16 md:mb-0">
            <Suspense>
                <template #default>
                    <Post
                        :post-id="postId"
                        :username-param="usernameParam"
                        :slug-param="slugParam"
                    />
                </template>
                <template #fallback>
                    <PostSkeleton />
                </template>
            </Suspense>
            <div class="comments space-y-4 px-6 xl:px-52 2xl:px-56">
                <hr class="mt-12 mb-12">
                <div class="comments-head flex items-center justify-between">
                    <h2 class="font-regu text-xl text-gray-800">Comentários</h2>
                    <Button @click="openWriteComment = !openWriteComment">Comentar</Button>
                </div>
                <div v-if="openWriteComment" class="bg-neutral-50/30 dark:bg-dark-mixed-150 border border-slate-400/15 rounded-lg dark:border-dark-mixed-300 shadow-none py-3 px-4">
                    <Label class="font-regular mb-2" for="new-comment-content">Escreva um comentário</Label>
                    <Textarea v-model="commentContent" placeholder="Digite seu comentário aqui" class="font-regular" id="new-comment-content" />
                    <div class="write-comment-actions flex items-center justify-end gap-2 mt-3 mb-1">
                        <Button @click="openWriteComment = !openWriteComment" size="sm" variant="ghost">Cancelar</Button>
                        <Button @click="createComment" size="sm" :disabled="isLoading" class="gap-2">
                            Confirmar
                            <Loader2 v-if="isLoading" class="animate-spin size-4" />
                        </Button>
                    </div>
                </div>
                <Suspense>
                    <template #default>
                        <ListComments :post-id="postId"/>
                    </template>
                    <template #fallback>
                        <CommentSkeleton 
                            v-for="n in Array(4).keys()"
                            :key="n"
                        />
                    </template>
                </Suspense>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import PostSkeleton from '@/components/Skeletons/PostSkeleton.vue'
import Post from '@/components/Post/Post.vue'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import ListComments from './ListComments.vue'
import CommentSkeleton from '@/components/Skeletons/CommentSkeleton.vue'
import services from '@/services'
import { Loader2 } from 'lucide-vue-next'

const route = useRoute()
// Get id of post and your slug
const slugAndId = route.params.slugAndId.split('-')
const postId = slugAndId.at(-1)
const usernameParam = route.params.username
const slugParam = slugAndId.slice(0, -1).join('-')

const openWriteComment = ref(false)
const commentContent = ref('')
const isLoading = ref(false)

async function createComment() {
    isLoading.value = true
    const { data, errors } = await services.comment.createComment({ 
        postId,
        content: commentContent.value
    })

    if (!errors) {
        openWriteComment.value = false
        isLoading.value = false
    }
}
</script>