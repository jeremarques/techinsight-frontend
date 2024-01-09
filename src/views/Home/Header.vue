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
						<div class="mr-4">
							<ThemeSwitcher />
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
                        <ThemeSwitcher />

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
import RegisterButton from './RegisterButton.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
	components: {
		LoginButton,
		RegisterButton,
		ThemeSwitcher
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