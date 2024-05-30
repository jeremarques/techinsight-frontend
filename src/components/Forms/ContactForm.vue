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
                <BaseHiddenLabel for-element="name" text="Seu nome" />
                <BaseInput 
                    id="name"
                    icon-name="User"
                    placeholder="Seu nome"
                    :dark-variant="true"
                    v-model="state.name.value"
                    :error="state.name.errorMessage"
                />
                <BaseErrorMessageInput :error-message="state.name.errorMessage" />
            </div>
            <div class="mb-6">
                <BaseHiddenLabel for-element="email" text="Seu e-mail" />
                <BaseInput 
                    id="email"
                    type="email"
                    icon-name="Mail"
                    placeholder="Seu e-mail"
                    :dark-variant="true"
                    v-model="state.email.value"
                    :error="state.email.errorMessage"
                />
                <BaseErrorMessageInput :error-message="state.email.errorMessage" />
            </div>
            <div class="mb-6">
                <BaseHiddenLabel for-element="message" text="Sua mensagem" />
                <BaseTextArea
                    id="message"
                    placeholder="Mensagem"
                    :bgDarkCustom="true"
                    v-model="state.message.value"
                    :error="state.message.errorMessage"
                />
                <BaseErrorMessageInput :error-message="state.message.errorMessage" />
            </div>
            <div>
                <Button
                    type="submit"
                    class="transition duration-200 w-full gap-x-2 items-center h-11 text-white bg-gradient-to-br from-brand-main-500 via-brand-main-700 to-brand-main-800 hover:opacity-90">
                    Enviar mensagem
                    <SendHorizonal :stroke-width="1.70" size="20" />
                </Button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseHiddenLabel from '@/components/BaseHiddenLabel.vue'
import BaseTextArea from '@/components/BaseTextArea.vue'
import BaseErrorMessageInput from '@/components/BaseErrorMessageInput.vue'
import { Button } from '@/components/ui/button'
import { SendHorizonal } from 'lucide-vue-next'

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