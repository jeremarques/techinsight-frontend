<template>
    <NavBar v-if="haveUserProfile" :user-profile="currentUserProfile" />
    <NavBarVisitor v-else />
    <main class="min-h-screen pt-16 bg-white dark:bg-dark-mixed-100">
        <router-view />
    </main>
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import NavBarVisitor from '@/components/NavBar/NavBarVisitor.vue'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()
const currentUserProfile = userStore.currentUserProfile
const haveUserProfile = !!Object.values(currentUserProfile).length
</script>
