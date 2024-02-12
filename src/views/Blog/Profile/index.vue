<template>
    <div class="container px-6 md:px-6 lg:px-20 xl:px-20 mx-auto pt-8">
        <div v-if="state.isLoaded" class="grid grid-cols-1 md:gap-12 md:grid-cols-5 relative">
            <div class="md:col-span-2 md:p-6 bg-white mt-4 md:mt-8">
                <ProfileUserInformation :profile="state.profile" />
            </div>
            <div class="md:col-span-3">
                <ProfileTabs :profile="state.profile" />
            </div>
        </div>
        <ProfileSkeleton v-else />
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProfileUserInformation from '@/components/Profile/ProfileUserInformation.vue'
import ProfileTabs from '@/components/Profile/ProfileTabs.vue'
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