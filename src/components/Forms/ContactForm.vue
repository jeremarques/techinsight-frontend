<template>
    <div
        class="relative rounded-lg backdrop-blur bg-white/70 dark:bg-dark-mixed-200/70 dark:border dark:border-dark-300 drop-shadow-2xl p-8 shadow-lg sm:p-12"
        data-aos="fade-left"
        data-aos-easing="ease-out"
        data-aos-duration="800"
    >
        <form>
            <div class="mb-4">
                <h2 class="font-medium text-lg text-gray-500 dark:text-white">Escreva sua mensagem</h2>
            </div>
            <div class="mb-6">
                <BaseHiddenLabel forElement="name" text="Seu nome" />
                <BaseInput 
                    id="name"
                    iconName="User"
                    placeholder="Seu nome"
                    :darkVariant="true"
                    v-model="state.name.value"
                    :error="state.name.errorMessage"
                />
                <BaseErrorMessageInput :errorMessage="state.name.errorMessage" />
            </div>
            <div class="mb-6">
                <BaseHiddenLabel forElement="email" text="Seu e-mail" />
                <BaseInput 
                    id="email"
                    type="email"
                    iconName="Mail"
                    placeholder="Seu e-mail"
                    :darkVariant="true"
                    v-model="state.email.value"
                    :error="state.email.errorMessage"
                />
                <BaseErrorMessageInput :errorMessage="state.email.errorMessage" />
            </div>
            <div class="mb-6">
                <BaseHiddenLabel forElement="message" text="Sua mensagem" />
                <BaseTextArea
                    id="message"
                    placeholder="Mensagem"
                    :bgDarkCustom="true"
                    v-model="state.message.value"
                    :error="state.message.errorMessage"
                />
                <BaseErrorMessageInput :errorMessage="state.message.errorMessage" />
            </div>
            <div>
                <button
                    type="submit"
                    class="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-brand-blue-400 via-brand-blue-500 to-brand-blue-600 p-3 font-medium text-white transition-all duration-300 hover:bg-brand-blue-700">
                    Enviar mensagem
                    <Icon name="Send" size="5" />
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Icon from '@/components/Icon/index.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseHiddenLabel from '@/components/BaseHiddenLabel.vue'
import BaseTextArea from '@/components/BaseTextArea.vue';
import BaseErrorMessageInput from '@/components/BaseErrorMessageInput.vue'

const state = reactive({
    name: {
        value: "",
        errorMessage: ""
    },
    email: {
        value: "",
        errorMessage: ""
    },
    message: {
        value: "",
        errorMessage: ""
    }
})
</script>