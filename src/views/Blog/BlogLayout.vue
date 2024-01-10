<template>
    <NavBar v-if="haveUser" />
    <NavBarVisitor v-else />
    <main class="min-h-screen pt-16 dark:bg-gray-900">
        <router-view />
    </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import NavBarVisitor from '@/components/NavBarVisitor.vue'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()
const currentUser = userStore.currentUser
const haveUser = !!Object.values(currentUser).length
console.log(haveUser)

</script>
