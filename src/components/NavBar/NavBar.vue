<template>
    <header class="fixed w-full top-0 z-50 dark:border-b dark:border-dark-200">
        <nav class="w-full shadow-sm backdrop-blur-lg bg-white/80 dark:bg-dark-mixed-100">
            <div class="container px-6 md:px-6 lg:px-20 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex justify-between items-center gap-4 md:gap-0 w-full">
                        <div class="flex items-center gap-4">
                            <RouterLink :to="{ name: 'home-blog' }">
                              <img
                                src="../../assets/images/logo-icon.svg"
                                alt="logo"
                                class="w-auto h-8"
                              />
                            </RouterLink>
                            <div class="md:block relative w-full md:w-3/4">
                                <span class="absolute text-gray-400 inset-y-0 left-0 flex items-center pl-3">
                                    <Icon name="Glass" size="5" color="text-gray-400" />
                                </span>

                                <input type="text" class="w-full py-2 pl-10 pr-4 text-sm font-regular text-gray-700 bg-white border rounded-full dark:bg-dark-mixed-200/50 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search">
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="hidden md:flex w-full items-center justify-end gap-8">
                                <RouterLink :to="{ name: 'home-blog' }" class="flex flex-col gap-0.5 items-center justify-center text-gray-900 dark:text-gray-200">
                                    <Home :stroke-width="1.50" :size="20" />
                                    <span class="font-medium text-xs transition-colors duration-300 transform mx-1.5">Início</span>
                                </RouterLink>

                                <div class="flex flex-col gap-0.5 items-center justify-center text-gray-900 dark:text-gray-200">
                                    <PlusCircle :stroke-width="1.50" :size="20" />
                                    <a href="#" class="font-medium text-xs  transition-colors duration-300 transform mx-1.5">Publicar</a>
                                </div>

                                <div class="flex flex-col gap-0.5 items-center justify-center text-gray-900 dark:text-gray-200">
                                    <MessageSquareText :stroke-width="1.50" :size="20" />
                                    <a href="#" class="font-medium text-xs transition-colors duration-300 transform mx-1.5">Mensagens</a>
                                </div>

                                <div class="flex flex-col gap-0.5 items-center justify-center text-gray-900 dark:text-gray-200">
                                    <Bell :stroke-width="1.50" :size="20" />
                                    <a href="#" class="font-medium text-xs transition-colors duration-300 transform mx-1.5">Notificações</a>
                                </div>
                            </div>

                            <NavBarMenuUser :userData="userProfile" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="fixed w-full bottom-0 left-0 md:hidden bg-white shadow dark:bg-dark-mixed-100 dark:border-t dark:border-dark-200">
            <div class="container flex items-center justify-between px-4 py-2 text-gray-600 dark:text-gray-300">
                <RouterLink :to="{ name: 'home-blog' }" class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 gap-0.5">
                    <Home :stroke-width="1.50" :size="20" />
                    <span class="font-regular text-xs transition-colors duration-300 transform mx-1.5">Início</span>
                </RouterLink>

                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 gap-0.5">
                    <PlusCircle :stroke-width="1.50" :size="20" />
                    <a href="#" class="font-regular text-xs transition-colors duration-300 transform mx-1.5">Publicar</a>
                </div>

                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 gap-0.5">
                    <MessageSquareText :stroke-width="1.50" :size="20" />
                    <a href="#" class="font-regular text-xs transition-colors duration-300 transform mx-1.5">Mensagens</a>
                </div>

                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 gap-0.5">
                    <Bell :stroke-width="1.50" :size="20" />
                    <a href="#" class="font-regular text-xs transition-colors duration-300 transform mx-1.5">Notificações</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { reactive } from 'vue'
import Icon from '@/components/Icon/index.vue'
import { Bell, Home, MessageSquareText, PlusCircle } from 'lucide-vue-next'
import NavBarMenuUser from '@/components/NavBar/NavBarMenuUser.vue'

const props = defineProps({
    userProfile: {
        type: Object,
        required: true
    }
})

const navState = reactive({
    isActive: false,
    isActive2: false
})
</script>