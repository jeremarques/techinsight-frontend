<template>
    <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
    />
    <div v-if="!posts.length" class="flex flex-col items-center pt-20">
        <img class="size-40 hidden dark:block" src="../../../assets/images/no-result-dark.svg" alt="">
        <img class="size-40 dark:hidden" src="../../../assets/images/no-result-light.svg" alt="">
        <h3 class="font-medium text-xl tracking-tight pt-6 pb-2 text-gray-700 dark:text-gray-200">Nada aqui</h3>
        <p class="font-regular text-sm text-gray-500 dark:text-gray-400">Até agora nenhum post foi criado com essa tag</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import PostCard from '@/components/Post/PostCard.vue'
import services from '@/services'

const toast = useToast()
const route = useRoute()
const posts = ref([])

async function getTagPosts() {
    try {
        toast.clear()
        const tagSlug = route.params.tagSlug
        const { data, errors } = await services.tags.getTagPosts(tagSlug)

        if (!errors) {
            posts.value = data
            return
        }
        if (errors.status === 404) {
            toast.error('Oops... Essa tag não existe.')
        }
        if (errors.status === 500) {
            toast.error('Ocorreu um erro ao buscar os posts da tag. Por favor, tente novamente mais tarde.')
        }

    } catch (err) {
        toast.error('Ocorreu um erro ao buscar os posts da tag. Por favor, tente novamente mais tarde.')
    }
}
await getTagPosts()
</script>