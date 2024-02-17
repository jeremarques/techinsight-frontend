<template>
    <div class="container px-6 md:px-6 lg:px-20 xl:px-56 mx-auto pt-8 pb-16">
        <h1 class="text-3xl font-bold mt-8">Editar perfil</h1>
        <form class="mt-8 space-y-6" @submit.prevent="updateProfile">
            <div class="grid grid-cols-1 md:gap-12 md:grid-cols-3 relative">
                <div class="md:col-span-2 flex flex-col gap-4">
                    <FormField v-slot="{ componentField }" name="name">
                        <FormItem v-auto-animate>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                            <Input class="font-regular" type="text" placeholder="Seu nome" v-bind="componentField" maxlength="80" />
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
                                <Input class="font-regular" type="text" placeholder="Usuário" v-bind="componentField" maxlength="20" />
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
                                <Textarea class="font-regular" type="text" placeholder="Dê uma breve descrição sobre você" v-bind="componentField" />
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
                            <Textarea class="font-regular" type="text" placeholder="Fale um pouco mais sobre você" v-bind="componentField" />
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
                                <Input class="font-regular" type="text" placeholder="Ex. https://meuwebsite.com.br" v-bind="componentField" maxlength="100"/>
                            </FormControl>
                            <FormDescription class="font-body-regular">
                                Se você tiver um site pessoal, deixe ele aqui.
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
                            <AvatarImage src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
                            <AvatarFallback>jeremias</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm" class="absolute bottom-0 left-0 gap-2">
                            <Edit class="size-4" />
                            Editar
                        </Button>
                    </div>
                </div>
            </div>
            <Button type="submit">Salvar</Button>
        </form>
    </div>
</template>

<script setup>
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
import { Edit } from 'lucide-vue-next'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
    name: z.string().min(2, { message: 'O nome deve ter no mínimo 2 caracteres' }).max(80, { message: 'O nome deve ter no máximo 80 caracteres' }),
    username: z.string().min(4, { message: 'O nome de usuário deve ter no mínimo 4 caracteres' }).max(20, { message: 'Deve ter no máximo 20 caracteres' }),
    bio: z.string().optional(),
    about: z.string().optional(),
    website_url: z.string().url({ message: 'Por favor, insira uma URL válida'}).optional(),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const updateProfile = handleSubmit((values) => {
    console.log('deu certo')

})
</script>