import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '@/assets/css/index.css'
import '@/assets/css/fonts.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const pinia = createPinia()
const app = createApp(App)
AOS.init();
app.use(pinia)
app.use(Toast, { position: POSITION.BOTTOM_RIGHT })
app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')