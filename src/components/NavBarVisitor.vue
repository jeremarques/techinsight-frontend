<template>
    <header class="fixed w-full top-0 z-50 dark:border-b dark:border-gray-800">
        <nav class="w-full shadow-sm backdrop-blur-lg bg-white/80 dark:bg-gray-900/80">
            <div class="container px-6 md:px-6 lg:px-20 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex justify-between gap-6 md:gap-0 items-center">
                        <div class="flex items-center gap-4">
                            <RouterLink :to="{ name: 'home-blog' }">
                              <img
                                src="../assets/images/logo-icon.svg"
                                alt="logo"
                                class="w-auto h-8"
                              />
                            </RouterLink>
                            <div class=" md:block relative w-full md:w-3/4">
                                <span class="absolute text-gray-400 inset-y-0 left-0 flex items-center pl-3">
                                    <Icon name="Glass" size="5" color="text-gray-900" />
                                </span>

                                <input type="text" class="w-full py-2 pl-10 pr-4 text-sm font-regular text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search">
                            </div>
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex md:hidden lg:hidden">

                            <button @click="navState.isActive = !navState.isActive" type="button" class="text-gray-500 dark:text-gray-100 focus:outline-none focus:text-gray-600 dark:focus:text-gray-200" aria-label="toggle menu">
                                <svg v-if="!navState.isActive" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>

                                <svg v-if="navState.isActive" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div :class="[navState.isActive ? 'translate-x-0 opacity-100 shadow-sm md:shadow-none backdrop-blur-md bg-white/90 dark:bg-dark-mixed-100/80' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:flex-1 md:flex md:justify-end md:mt-0 mt-4 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:items-center">
                        <div class="md:flex md:items-center">

                            <div class="flex gap-x-1 md:flex-row">
                                <LoginButton />
                                <RegisterButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="fixed w-full bottom-0 left-0 md:hidden bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-center px-4 py-2 text-gray-600 dark:text-gray-300">
                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <RouterLink :to="{ name: 'home-blog' }"
                        class="font-regular text-xs transition-colors duration-300 transform mx-1.5">
                        Início
                    </RouterLink>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { reactive } from 'vue';
import LoginButton from '@/views/Home/LoginButton.vue'
import RegisterButton from '@/views/Home/RegisterButton.vue'
import Icon from '@/components/Icon/index.vue'

const navState = reactive({
    isActive: false
})
</script>