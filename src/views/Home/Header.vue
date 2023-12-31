<template>
	<header class="fixed w-full top-0 z-50 dark:border-b dark:border-dark-200">
		<nav class="shadow-sm backdrop-blur-lg bg-white/80 dark:bg-dark-mixed-100/80">
	      	<div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
		        <div class="flex items-center justify-between">
		            <a href="javascript:void(0)">
		              <img
		                src="../../assets/images/fast-insight-logo-light.svg"
		                alt="logo"
		                class="dark:hidden w-auto h-8 lg:h-10"
		              />
                      <img
                        src="../../assets/images/fast-insight-logo-dark.svg"
                        alt="logo"
                        class="hidden dark:block w-auto h-8 lg:h-10"
                      />
		            </a>

    	            <!-- Mobile menu button -->
    	            <div class="flex md:hidden lg:hidden">
                        <div class="mr-6 flex items-center gap-1 p-1 border border-gray-300 dark:border-dark-400 rounded-full leading-none">
                            <button class="rounded-full bg-gray-200 dark:bg-dark-400 p-1 text-dark-400 dark:text-white hover:text-gray-600 focus:outline-none focus:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </button>
                            <button class="rounded-full p-1 text-gray-400 dark:text-white hover:text-gray-600 focus:outline-none focus:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            </button>
                        </div>

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
		        <div :class="[navState.isActive ? 'translate-x-0 opacity-100 shadow-sm md:shadow-none backdrop-blur-md bg-white/90 dark:bg-dark-mixed-100/80' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:flex-1 md:flex md:justify-between md:mt-0 mt-4 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:items-center">
		            <div class="flex flex-col md:flex-row md:ml-16">
		            	<a class="relative group mb-6 font-medium text-black dark:text-gray-200 hover:text-brand-blue-600 dark:hover:text-white md:mx-4 md:my-0" href="#about">
		                	<span>Sobre</span>
		                	<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue-600 dark:bg-brand-blue-400 transition-all group-hover:w-full"></span>
		            	</a>
		                <a class="relative group mb-2 font-medium text-black dark:text-gray-200 hover:text-brand-blue-600 dark:hover:text-white md:mx-4 md:my-0" href="#contact">
		                	<span>Fale conosco</span>
		                	<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue-600 dark:bg-brand-blue-400 transition-all group-hover:w-full"></span>
		            	</a>
		            </div>

                    <div class="md:flex md:items-center">
                        <div class="hidden md:flex items-center gap-2 p-1 border border-gray-200 dark:border-dark-400 rounded-full leading-none">
                            <button class="rounded-full bg-gray-200 dark:bg-dark-400 p-1 text-dark-400 dark:text-white hover:text-gray-600 focus:outline-none focus:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </button>
                            <button class="rounded-full p-1 text-gray-400 dark:text-white hover:text-gray-600 focus:outline-none focus:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            </button>
                        </div>

						<div class="flex gap-x-1 md:flex-row">
							<LoginButton />
							<RegisterButton />
						</div>
                    </div>
		        </div>
		    </div>
	    </nav>
    </header>
</template>

<script>
import { reactive } from 'vue';
import LoginButton from './LoginButton.vue'
import RegisterButton from './RegisterButton.vue';

export default {
	components: {
		LoginButton,
		RegisterButton
	},
	setup () {
		const navState = reactive({
			isActive: false
		})

		return {
			navState,
		}
	}
}
</script>