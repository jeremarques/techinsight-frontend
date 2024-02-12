<template>
    <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
    />
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