<template>
    <div class="container px-6 md:px-6 lg:px-20 xl:px-56 mx-auto pt-8 pb-16">
        <h1 class="text-3xl font-bold mt-8">Editar perfil</h1>
        <form class="mt-8 space-y-6" @submit.prevent="updateProfile">
            <div class="grid grid-cols-1 md:gap-12 md:grid-cols-3 relative">
                <div class="md:col-span-2 flex flex-col gap-4">
                    <FormField v-slot="{ componentField }" name="full_name">
                        <FormItem v-auto-animate>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input 
                                    class="font-regular" 
                                    type="text" 
                                    placeholder="Seu nome" 
                                    v-bind="componentField" 
                                    v-model="state.user.full_name"
                                    maxlength="80" 
                                />
                            </FormControl>
                            <FormDescription class="font-body-regular">
                                Todos que acessarem seu perfil poderão ver seu nome. Você pode alterar a qualquer momento.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    
                    <FormField v-slot="{ componentField }" name="username">
                        <FormItem v-auto-animate>
                            <FormLabel>Nome de usuário</FormLabel>
                            <FormControl>
                                <Input 
                                    class="font-regular" 
                                    type="text" 
                                    placeholder="Usuário" 
                                    v-bind="componentField" 
                                    v-model="state.user.username"
                                    maxlength="20" 
                                />
                            </FormControl>
                            <FormDescription class="font-body-regular">
                                Esse nome é visto por todos os usuários. Você pode alterar a qualquer momento.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    
                    <FormField v-slot="{ componentField }" name="bio">
                        <FormItem v-auto-animate>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea 
                                    class="font-regular" 
                                    type="text" 
                                    placeholder="Dê uma breve descrição sobre você" 
                                    v-bind="componentField" 
                                    v-model="state.profile.bio"
                                />
                            </FormControl>
                            <FormDescription class="font-body-regular">
                                Dê uma rápida descrição sobre você às pessoas.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>
    
                    <FormField v-slot="{ componentField }" name="about">
                        <FormItem v-auto-animate>
                            <FormLabel>Sobre mim</FormLabel>
                            <FormControl>
                            <Textarea 
                                class="font-regular" 
                                type="text" 
                                placeholder="Fale um pouco mais sobre você" 
                                v-bind="componentField" 
                                v-model="state.profile.about"
                            />
                            </FormControl>
                            <FormDescription class="font-body-regular">
                                Descreva sobre você para que as pessoas possam lhe conhecer melhor.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="website_url">
                        <FormItem v-auto-animate>
                            <FormLabel>Seu website</FormLabel>
                            <FormControl>
                                <Input 
                                    class="font-regular" 
                                    type="text" 
                                    placeholder="Ex. https://meuwebsite.com.br" 
                                    v-bind="componentField"
                                    v-model="state.profile.website_url"
                                    maxlength="100"
                                />
                            </FormControl>
                            <FormDescription class="font-body-regular">
                                Se você tiver um site pessoal, deixe-o aqui.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <div class="md:col-span-1">
                    <div class="ml-8 user-photo relative">
                        <Avatar class="size-32 md:size-48">
                            <!-- <AvatarImage v-if="profile.profile_photo" :src="profile.profile_photo" />
                            <AvatarImage v-else src="@/assets/images/user-profile.png" /> -->
                            <AvatarImage :src="state.profile.profile_photo" />
                            <AvatarFallback>jeremias</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm" class="absolute bottom-0 left-0 gap-2">
                            <Edit class="size-4" />
                            Editar
                        </Button>
                    </div>
                </div>
            </div>
            <Button type="submit" class="gap-1 bg-brand-main-800" :disabled="isLoading">
                Salvar
                <Loader2 v-if="isLoading" class="size-4 animate-spin" />
            </Button>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Edit, Loader2 } from 'lucide-vue-next'
import { useToast } from 'vue-toastification'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useUserStore } from '@/stores/user'
import services from '@/services'

const userStore = useUserStore()
const user = userStore.currentUser
const userProfile = userStore.currentUserProfile

const toast = useToast()
const isLoading = ref(false)
const state = reactive({
    profile: userProfile,
    user: user,
})

const formSchema = toTypedSchema(z.object({
    full_name: z.string().min(2, { message: 'O nome deve ter no mínimo 2 caracteres' }).max(80, { message: 'O nome deve ter no máximo 80 caracteres' }),
    username: z.string().min(4, { message: 'O nome de usuário deve ter no mínimo 4 caracteres' }).max(20, { message: 'Deve ter no máximo 20 caracteres' }),
    bio: z.string().optional(),
    about: z.string().optional(),
    website_url: z.string().url({ message: 'Por favor, insira uma URL válida'}).optional(),
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
        username: state.user.username,
        full_name: state.user.full_name,
        bio: state.profile.bio,
        about: state.profile.about,
        website_url: state.profile.website_url
    }
})

const updateProfile = handleSubmit(async (values) => {
    try {
        isLoading.value = true
        const { 
            data: userData,
            errors: userErrors
        } = await services.users.updateMe({
            username: state.user.username,
            email: state.user.email,
            full_name: state.user.full_name
        })

        const { 
            data: profileData,
            errors: profileErrors
        } = await services.profile.updateProfile({
            bio: state.profile.bio,
            about: state.profile.about,
            profile_photo: state.profile.profile_photo,
            website_url: state.profile.website_url,
        })

        if (!profileErrors && !userErrors) {
            isLoading.value = false
            state.profile = profileData
            toast.success('Seu perfil foi atualizado com sucesso!')
            return
        }

        if (userErrors.usernameError && userErrors.emailError) {
            toast.error('Este nome de usuário e e-mail já existem.')
            return
        }

        if (userErrors.usernameError) {
            toast.error(userErrors.usernameError)
            return
        }

        if (userErrors.emailError) {
            toast.error(userErrors.emailError)
            return
        }

        if (userData.status === 500) {
            toast.error('Ocorreu um erro ao atualizar seu perfil. Por favor, tente novamente mais tarde.')
            return
        }

        if (profileErrors.status === 500) {
            toast.error('Ocorreu um erro ao atualizar seu perfil. Por favor, tente novamente mais tarde.')
            return
        }

        isLoading.value = false

    } catch (err) {
        isLoading.value = false
        toast.error('Ocorreu um erro ao atualizar seu perfil. Por favor, tente novamente mais tarde.    ')
    }
})
</script>