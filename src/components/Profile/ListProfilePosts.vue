<template>
    <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
    />
    <div v-if="!posts.length" class="flex flex-col items-center pt-14">
        <img class="size-32 hidden dark:block" src="../../assets/images/no-result-dark.svg" alt="">
        <img class="size-32 dark:hidden" src="../../assets/images/no-result-light.svg" alt="">
        <h3 class="font-medium text-lg tracking-tight pt-4 pb-1 text-gray-700 dark:text-gray-200">Nada aqui</h3>
        <p class="font-regular text-sm text-gray-500 dark:text-gray-400">Até agora o usuário não compartilhou insights</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import PostCard from '@/components/Post/PostCard.vue'
import services from '@/services'

const props = defineProps({
    profileId: {
        type: Number,
        required: true
    }
})
const toast = useToast()
const posts = ref([])

async function getProfilePosts() {
    try {
        toast.clear()
        const { data, errors } = await services.post.getProfilePosts(props.profileId)

        if (!errors) {
            posts.value = data
            return
        }
        if (errors.status === 404) {
            toast.error('Oops... Esse perfil não existe.')
        }
        if (errors.status === 500) {
            toast.error('Ocorreu um erro ao seguir o usuário. Por favor, tente novamente mais tarde.')
        }

    } catch (err) {
        toast.error('Ocorreu um erro ao seguir o usuário. Por favor, tente novamente mais tarde.')
    }
}
await getProfilePosts()
</script>