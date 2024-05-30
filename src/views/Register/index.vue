<template>
    <div class="bg-white dark:bg-dark-mixed-100">
        <div class="flex justify-center h-screen">
            <div class="hidden lg:flex lg:w-2/4 items-center justify-end">
                <img class="hidden dark:block w-auto h-[600px]" src="../../assets/images/animation-auth-dark.svg" alt="">
                <img class="dark:hidden w-auto h-[600px]" src="../../assets/images/animation-auth-light.svg" alt="">
            </div>

            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/4">
                <div class="flex-1">
                    <div class="">
                        <img class="w-auto h-12 mb-3" src="../../assets/images/logo-icon.svg" alt="">
                        <h1 class="text-black dark:text-white text-4xl font-bold mb-5 tracking-tight">Criar conta</h1>
                    </div>

                    <div class="mt-6">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import RegisterForm from './RegisterForm.vue'
</script>