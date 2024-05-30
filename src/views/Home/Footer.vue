<template>
    <footer class="bg-gray-50 dark:bg-dark-mixed-50 dark:border-t dark:border-dark-200">
        <div class="container px-6 py-10 mx-auto">
            <div class="flex flex-col items-center">
                <div class="w-full flex flex-col items-center">
                    <img src="../../assets/images/logo-light.svg" class="dark:hidden w-auto h-9" alt="Fast Insight Logo">
                    <img src="../../assets/images/logo-dark.svg" class="hidden dark:block w-auto h-9" alt="Fast Insight Logo">
                    <div class="w-full flex justify-center border-b dark:border-dark-mixed-100 py-6 pb-10">
                        <ul class="flex gap-4 md:gap-8">
                            <li class="text-gray-600 dark:text-gray-400 font-regular text-sm transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
                                <a href="#about">Sobre</a>
                            </li>
                            <li class="text-gray-600 dark:text-gray-400 font-regular text-sm transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
                                <a href="#contact">Fale conosco</a>
                            </li>
                            <li class="text-gray-600 dark:text-gray-400 font-regular text-sm transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
                                <RouterLink :to="{ name: 'login' }">Entrar</RouterLink>
                            </li>
                            <li class="text-gray-600 dark:text-gray-400 font-regular text-sm transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
                                <RouterLink :to="{ name: 'register' }">Criar conta</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full flex items-center justify-center lg:justify-between pt-8">
                    <span class="font-regular text-sm text-gray-600 dark:text-gray-500">Copyright © {{ year }} TechInsight</span>
                </div>
            </div>

        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>