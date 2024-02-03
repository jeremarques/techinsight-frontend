<template>
    <div class="container px-6 md:px-6 lg:px-20 xl:px-20 mx-auto pt-8">
        <Profile v-if="state.isLoaded" :profile="state.profile" />
        <ProfileSkeleton v-else />
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Profile from '@/components/Profile/Profile.vue'
import services from '@/services'
import ProfileSkeleton from '@/components/Skeletons/ProfileSkeleton.vue'

const route = useRoute()
const state = reactive({
    profile: {},
    isLoaded: false
})

async function getProfile() {
    const username = route.params.username
    const { data, errors } = await services.profile.getProfile(username)
    console.log(data)
    state.profile = data
    state.isLoaded = true
}
onMounted(() => getProfile())

</script>