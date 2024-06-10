<template>
    <header class="fixed w-full top-0 z-50 dark:border-b dark:border-dark-mixed-300/60">
        <nav class="w-full shadow-sm backdrop-blur-lg bg-white/80 dark:bg-dark-mixed-100">
            <div class="container px-6 md:px-6 lg:px-8 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex justify-between gap-4 md:gap-0 items-center">
                        <div class="flex items-center gap-6">
                            <RouterLink :to="{ name: 'home-blog' }">
                              <img
                                src="../../assets/images/logo-icon.svg"
                                alt="logo"
                                class="w-auto h-8"
                              />
                            </RouterLink>
                            <div class="md:block relative w-full md:w-3/4">
                                <span class="absolute text-gray-400 inset-y-0 left-0 flex items-center pl-3">
                                    <Search :stroke-width="1.50" size="20" />
                                </span>

                                <input type="text" class="w-full py-2 pl-10 pr-4 text-sm font-regular text-gray-700 bg-white border rounded-full dark:bg-dark-mixed-200/50 dark:text-gray-300 dark:border-dark-mixed-300/60 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Pesquisar">
                            </div>
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex space-x-3 md:hidden lg:hidden">
                            <ThemeSwitcher />
                            <button @click="showNav = !showNav" type="button" class="text-gray-700 dark:text-gray-100 focus:outline-none focus:text-gray-700 dark:focus:text-gray-200" aria-label="toggle menu">
                                <Menu v-if="!showNav" :stroke-width="1.70" />
                                <X v-else :stroke-width="1.70" />
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div :class="[showNav ? 'translate-x-0 opacity-100 shadow-sm md:shadow-none backdrop-blur-md bg-white/90 dark:bg-dark-mixed-100/80' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:flex-1 md:flex md:justify-end md:mt-0 mt-4 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:items-center">
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
        <nav class="fixed w-full bottom-0 left-0 md:hidden bg-white shadow dark:bg-gray-950">
            <div class="container flex items-center justify-center px-4 py-2 text-gray-600 dark:text-gray-300">
                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
                    <Home :stroke-width="1.50" :size="20" />
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
import { ref } from 'vue'
import LoginButton from '@/views/Home/LoginButton.vue'
import RegisterButton from '@/views/Home/RegisterButton.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import { Home, Menu, Search, X } from 'lucide-vue-next'

const showNav = ref(false)
</script>