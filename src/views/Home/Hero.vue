<template>
    <div class="relative bg-white dark:bg-dark-mixed-100 pb-[110px] pt-[120px] lg:pt-[190px] lg:pb-[160px]">
        <div class="container mx-auto">
            <div class="flex flex-wrap items-center">
                <div class="w-full px-6 lg:w-5/12">
                    <div
                        class="hero-content"
                        data-aos="fade-right"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000"
                    >
                        <h1
                            class="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl tracking-tighter"
                        >
                            Contribua com seu <br class="hidden md:block" />
                            Tech Insight <br />
                            Agora.
                        </h1>
                        <p
                            class="mb-8 max-w-[480px] font-regular text-base text-body-color dark:text-gray-300"
                        >
                            Participe da Conversa. Desde Novos Desenvolvedores a Gurus da Tecnologia,
                            Todos Têm uma Voz Aqui.
                        </p>
                        <div class="flex gap-x-1 md:flex-row">
                            <RegisterButton />
                            <LoginButton />
                        </div>
                        <!--<div class="clients pt-16">
                            <h6
                                class="mb-6 flex items-center text-xs font-regular text-body-color dark:text-gray-300">
                                Conheça nossos parceiros
                                <span class="ml-3 inline-block h-px w-8 bg-body-color"></span>
                            </h6>
                            <div class="flex items-center gap-4 xl:gap-[50px]">
                                <a href="javascript:void(0)" class="block py-3 grayscale">
                                    <img src="../../assets/images/google.svg" alt="intel" class="-mb-1.5 h-9 w-auto" />
                                </a>
                                <a href="javascript:void(0)" class="block py-3">
                                    <img src="../../assets/images/intel.svg" alt="oracle" />
                                </a>
                                <a href="javascript:void(0)" class="block py-3">
                                    <img src="../../assets/images/oracle.svg" alt="logitech" class="-mb-1.5" />
                                </a>
                            </div>
                        </div>-->
                    </div>
                </div>
                <div class="hidden px-4 lg:block lg:w-1/12"></div>
                <div class="w-full px-6 lg:w-6/12">
                    <div class="lg:ml-auto lg:text-right">
                        <div
                            class="relative z-10 inline-block pt-11 lg:pt-0"
                            data-aos="fade-left"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="1000">
                            <img
                                src="../../assets/images/man-with-vr.png"
                                alt="hero"
                                class="max-w-full lg:ml-auto drop-shadow-3xl"
                            />
                            <span class="absolute -bottom-8 -left-8 z-[-1]">
                                <svg
                                width="93"
                                height="93"
                                viewBox="0 0 93 93"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#195dad" />
                                <circle cx="2.5" cy="24.5" r="2.5" fill="#195dad" />
                                <circle cx="2.5" cy="46.5" r="2.5" fill="#195dad" />
                                <circle cx="2.5" cy="68.5" r="2.5" fill="#195dad" />
                                <circle cx="2.5" cy="90.5" r="2.5" fill="#195dad" />
                                <circle cx="24.5" cy="2.5" r="2.5" fill="#195dad" />
                                <circle cx="24.5" cy="24.5" r="2.5" fill="#195dad" />
                                <circle cx="24.5" cy="46.5" r="2.5" fill="#195dad" />
                                <circle cx="24.5" cy="68.5" r="2.5" fill="#195dad" />
                                <circle cx="24.5" cy="90.5" r="2.5" fill="#195dad" />
                                <circle cx="46.5" cy="2.5" r="2.5" fill="#195dad" />
                                <circle cx="46.5" cy="24.5" r="2.5" fill="#195dad" />
                                <circle cx="46.5" cy="46.5" r="2.5" fill="#195dad" />
                                <circle cx="46.5" cy="68.5" r="2.5" fill="#195dad" />
                                <circle cx="46.5" cy="90.5" r="2.5" fill="#195dad" />
                                <circle cx="68.5" cy="2.5" r="2.5" fill="#195dad" />
                                <circle cx="68.5" cy="24.5" r="2.5" fill="#195dad" />
                                <circle cx="68.5" cy="46.5" r="2.5" fill="#195dad" />
                                <circle cx="68.5" cy="68.5" r="2.5" fill="#195dad" />
                                <circle cx="68.5" cy="90.5" r="2.5" fill="#195dad" />
                                <circle cx="90.5" cy="2.5" r="2.5" fill="#195dad" />
                                <circle cx="90.5" cy="24.5" r="2.5" fill="#195dad" />
                                <circle cx="90.5" cy="46.5" r="2.5" fill="#195dad" />
                                <circle cx="90.5" cy="68.5" r="2.5" fill="#195dad" />
                                <circle cx="90.5" cy="90.5" r="2.5" fill="#195dad" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LoginButton from './LoginButton.vue'
import RegisterButton from './RegisterButton.vue';
</script>