<template>
    <header class="fixed w-full top-0 z-50 dark:border-b dark:border-gray-800">
        <nav class="w-full shadow-sm backdrop-blur-lg bg-white/80 dark:bg-gray-900/80">
            <div class="container px-6 md:px-6 lg:px-20 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex justify-between items-center gap-4 md:gap-0 w-full">
                        <div class="flex items-center gap-4">
                            <RouterLink :to="{ name: 'home-blog' }">
                              <img
                                src="../assets/images/logo-icon.svg"
                                alt="logo"
                                class="w-auto h-8"
                              />
                            </RouterLink>
                            <div class="md:block relative w-full md:w-3/4">
                                <span class="absolute text-gray-400 inset-y-0 left-0 flex items-center pl-3">
                                    <Icon name="Glass" size="5" color="text-gray-400" />
                                </span>

                                <input type="text" class="w-full py-2 pl-10 pr-4 text-sm font-regular text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search">
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="hidden md:flex w-full items-center justify-end gap-8">
                                <RouterLink :to="{ name: 'home-blog' }" class="flex flex-col gap-0.5 items-center justify-center text-gray-900 dark:text-gray-200">
                                    <Icon name="Home" size="5" color="text-gray-900 dark:text-gray-200" />
                                    <span class="font-medium text-xs transition-colors duration-300 transform mx-1.5">Início</span>
                                </RouterLink>

                                <div class="flex flex-col gap-0.5 items-center justify-center text-gray-900 dark:text-gray-200">
                                    <Icon name="PlusCircle" size="5" color="text-gray-900 dark:text-gray-200" />
                                    <a href="#" class="font-medium text-xs  transition-colors duration-300 transform mx-1.5">Publicar</a>
                                </div>

                                <div class="flex flex-col gap-0.5 items-center justify-center text-gray-900 dark:text-gray-200">
                                    <Icon name="ChatText" size="5" color="text-gray-900 dark:text-gray-200" />
                                    <a href="#" class="font-medium text-xs transition-colors duration-300 transform mx-1.5">Mensagens</a>
                                </div>

                                <div class="flex flex-col gap-0.5 items-center justify-center text-gray-900 dark:text-gray-200">
                                    <Icon name="Bell" size="5" color="text-gray-900 dark:text-gray-200" />
                                    <a href="#" class="font-medium text-xs transition-colors duration-300 transform mx-1.5">Notificações</a>
                                </div>
                            </div>

                            <div class="relative">
                                <div class="flex items-center md:pl-12" :aria-hidden="navState.isActive2">
                                    <button type="button" class="flex items-center  focus:outline-none" aria-label="toggle profile dropdown" @click="navState.isActive2 = !navState.isActive2">
                                        <div class="w-8 h-8 md:w-9 md:h-9 md overflow-hidden rounded-full border border-gray-400 dark:border-gray-500">
                                            <img v-if="!!userProfile.profile_photo" :src="userProfile.profile_photo" class="object-cover w-full h-full" alt="avatar">
                                            <img v-else src="../assets/images/user-profile.png" class="object-cover w-full h-full" alt="avatar">
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-5 md:h-5 text-gray-800 dark:text-gray-200 block ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <Transition
                                    enter-from-class="opacity-0 -translate-y-1"
                                    enter-active-class="transition ease-out duration-200"
                                    leave-active-class="transition ease-in duration-200"
                                    leave-to-class="opacity-0 transform -translate-y-1"
                                >
                                    <div 
                                        v-if="navState.isActive2"
                                        class="absolute -left-20 md:-left-10 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
    
                                        <div class="w-screen max-w-72 flex-auto overflow-hidden rounded-2xl bg-white leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800 dark:border dark:border-gray-600">
                                            <div class="p-4 font-regular text-sm">
                                                <div class="group relative flex items-center p-1 gap-x-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <div class="p-2 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-white dark:bg-gray-700 dark:group-hover:bg-gray-800/40">
                                                        <Icon name="Profile" color="text-gray-600 group-hover:text-brand-main-600 dark:text-white" />
                                                    </div>
                                                    <a href="#" class="text-gray-900 dark:text-white">
                                                        Perfil
                                                    </a>
                                                </div>
                                                <div class="group relative flex items-center p-1 gap-x-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <div class="p-2 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-white dark:bg-gray-700 dark:group-hover:bg-gray-800/40">
                                                        <Icon name="DocumentText" color="text-gray-600 group-hover:text-brand-main-600 dark:text-white" />
                                                    </div>
                                                    <a href="#" class="text-gray-900 dark:text-white">
                                                        Seus insights
                                                    </a>
                                                </div>
                                                <div class="group relative flex items-center p-1 gap-x-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <div class="p-2 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-white dark:bg-gray-700 dark:group-hover:bg-gray-800/40">
                                                        <Icon name="Settings" color="text-gray-600 group-hover:text-brand-main-600 dark:text-white" />
                                                    </div>
                                                    <a href="#" class="text-gray-900 dark:text-white">
                                                        Configurações
                                                    </a>
                                                </div>
                                                <div class="group relative flex items-center p-1 gap-x-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <div class="p-2 rounded-lg flex items-center justify-center bg-gray-50 group-hover:bg-white dark:bg-gray-700 dark:group-hover:bg-gray-800/40">
                                                        <Icon name="QuestionMarkCircle" color="text-gray-600 group-hover:text-brand-main-600 dark:text-white" />
                                                    </div>
                                                    <a href="#" class="font-regular text-gray-900 dark:text-white">
                                                        Ajuda
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="group flex items-center justify-center">
                                                <button type="button" class="transition duration-200 flex items-center justify-center gap-x-1 p-3 w-full font-regular text-sm bg-gray-50 text-gray-900 group-hover:bg-red-500 dark:bg-gray-800 dark:border-t dark:border-gray-600 dark:text-white">
                                                    <span class="group-hover:text-white">Sair</span>
                                                    <Icon name="LogOut" size="5" color="text-gray-900 group-hover:text-white dark:text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="fixed w-full bottom-0 left-0 md:hidden bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-between px-4 py-2 text-gray-600 dark:text-gray-300">
                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <RouterLink :to="{ name: 'home-blog' }" class="font-regular text-xs transition-colors duration-300 transform mx-1.5">Início</RouterLink>
                </div>

                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <a href="#" class="font-regular text-xs transition-colors duration-300 transform mx-1.5">Publicar</a>
                </div>

                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>

                    <a href="#" class="font-regular text-xs transition-colors duration-300 transform mx-1.5">Mensagens</a>
                </div>

                <div class="flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>

                    <a href="#" class="font-regular text-xs transition-colors duration-300 transform mx-1.5">Notificações</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { reactive } from 'vue'
import Icon from '@/components/Icon/index.vue'

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