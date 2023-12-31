<template>
    <NavBar />
    <main class="mt-20">
        <router-view />
    </main>
</template>

<script>
 import NavBar from './NavBar.vue';

export default {
    components: {
        NavBar,
    }
};
</script>
