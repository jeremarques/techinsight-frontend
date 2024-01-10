<template>
    <router-link :to="{ name: 'register' }" class="group flex-1 md:flex-none inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-50 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:text-white bg-gradient-to-br from-brand-blue-400 via-brand-blue-500 to-brand-blue-600">
        <svg class="w-5 h-5 mr-2 group-hover:fill-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <span class="relative">Criar conta</span>
    </router-link>
</template>