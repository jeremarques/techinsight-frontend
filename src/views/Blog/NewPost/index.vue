<template>
    <header class="fixed w-full top-0 z-50 dark:border-b dark:border-dark-200">
        <nav class="w-full shadow-sm backdrop-blur-lg bg-white/80 dark:bg-dark-mixed-100">
            <div class="container px-6 md:px-6 lg:px-8 py-4 mx-auto">
                <div class="flex gap-4 md:gap-0 items-center">
                    <div class="flex items-center gap-4">
                        <RouterLink :to="{ name: 'home-blog' }">
                            <img
                            src="@/assets/images/logo-icon.svg"
                            alt="logo"
                            class="w-auto h-8"
                            />
                        </RouterLink>
                        <div class="flex items-center gap-2">
                            <TooltipProvider>
                                <Tooltip :delayDuration="200">
                                    <TooltipTrigger>
                                        <Input 
                                            v-model="state.post.title.value" 
                                            id="title"
                                            class="border-none p-0 h-5 rounded-sm text-[16px] font-body-medium focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-default" 
                                            placeholder="Título do insight..." 
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" class="mt-2">
                                        <p class="text-xs font-regular">Digite aqui o título que você deseja dar<br /> ao seu insight.</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Edit class="text-gray-500 h-5 w-5" />
                            </TooltipProvider>
                        </div>
                    </div>
                    
                    <div class="flex flex-1 items-center justify-end space-x-2">

                        <Popover>
                            <PopoverTrigger as-child>
                                <Button class="font-medium">
                                    Publicar
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent class="mr-2">
                                <form @submit.prevent="createPost">
                                    <div class="flex flex-col p-1 space-y-4">
                                        <div>
                                            <span class="font-medium">Publicar insight</span>
                                            <p class="text-xs font-regular text-gray-500">Confirme as informações para publicar</p>
                                        </div>
                                        <div class="flex flex-col space-y-1">
                                            <Label for="title-confirmation">Título</Label>
                                            <Input 
                                                v-model="state.post.title.value"
                                                class="dark:bg-dark-mixed-100"
                                                id="title-confirmation"
                                                type="text"
                                                placeholder="Título..."
                                                :focus="false"
                                            />
                                            <span>{{ state.post.title.errorMessage }}</span>
                                        </div>
                                        
                                        <div class="flex flex-col space-y-1">
                                            <Label>Tag</Label>
                                            <Popover v-model:open="state.openTagCombobox">
                                                <PopoverTrigger as-child>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        :aria-expanded="state.openTagCombobox"
                                                        class="w-full justify-between"
                                                        @click="getTags"
                                                    >
                                                        {{ 
                                                            state.post.tag ? 
                                                            state.tags.find((tag) => tag.id === state.post.tag)?.name : 
                                                            "Selecionar tópico..." 
                                                        }}
                                                        <Tag class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent class="w-full p-0">
                                                    <Command>
                                                        <CommandInput class="h-9" placeholder="Buscar tópico..." />
                                                        <CommandEmpty>Nenhum tópico encontrada.</CommandEmpty>
                                                        <CommandList>
                                                            <CommandGroup>
                                                                <CommandItem
                                                                    v-if="!state.isLoading"
                                                                    v-for="tag in state.tags"
                                                                    :key="tag.id"
                                                                    :value="tag.id"
                                                                    @select="(ev) => {
                                                                        if (typeof ev.detail.value === 'number') {
                                                                            state.post.tag = ev.detail.value
                                                                        }
                                                                        state.openTagCombobox = false
                                                                    }"
                                                                >
                                                                    {{ tag.name }}
                                                                    <CheckIcon
                                                                        :class="cnFunc(
                                                                        'ml-auto h-4 w-4',
                                                                        state.post.tag === tag.id ? 'opacity-100' : 'opacity-0',
                                                                        )"
                                                                    />
                                                                </CommandItem>
                                                                <ComboboxSkeleton 
                                                                    v-else 
                                                                    v-for="n in Array(3).keys()"
                                                                    :key="n"
                                                                />
                                                            </CommandGroup>
                                                        </CommandList>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <Button type="submit">Publicar agora</Button>
                                    </div>
                                </form>
                            </PopoverContent>
                        </Popover>
                        <Button variant="ghost" size="sm" as-child>
                            <RouterLink class="pr-0 pl-1 md:px-2 hover:bg-transparent" :to="{ name: 'home-blog' }">
                                <X class="text-gray-800 dark:text-gray-100" />
                            </RouterLink>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main class="min-h-screen pt-16 bg-white dark:bg-dark-mixed-100">
        <div class="container md:px-6 lg:px-20 mx-auto pb-16 md:mb-0">
            <div class="px-6 xl:px-52 2xl:px-56 mt-20">
                <Editor v-model="state.post.content" />
            </div>
        </div>
    </main>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useField } from 'vee-validate'
import { useRouter } from 'vue-router'
import { validateEmpty } from '@/utils/validators'
import { useTitle } from '@vueuse/core'
import Editor from '@/components/Editor/Editor.vue'
import { Edit, Tag, X, CheckIcon } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import ComboboxSkeleton from '@/components/Skeletons/ComboboxSkeleton.vue'

import services from '@/services'
import { cn } from '@/lib/utils'
    
const router = useRouter()

const { 
    value: titleValue, 
    errorMessage: titleErrorMessage
} = useField('title', validateEmpty);

const state = reactive({
    post: {
        title: {
            value: titleValue,
            errorMessage: titleErrorMessage
        },
        tag: null,
        content: '',
    },
    tags: [],
    isLoading: false,
    openTagCombobox: false
})

const pageTitle = computed(() => {
    return !state.post.title.value ? 'Novo Insight' : state.post.title.value
})
useTitle(pageTitle)

async function getTags() {
    state.isLoading = true
    const { data } = await services.tags.getTags()
    state.tags = data
    state.isLoading = false
}

async function createPost() {
    state.isLoading = true
    console.log(state.post.content)
    const { data, errors } = await services.post.createPost({
        title: state.post.title.value,
        content: state.post.content,
        tag_id: state.post.tag
    })
    if (!errors) {
        state.isLoading = false
        router.push({
            name: 'post',
            params: {
                username: data.profile.user.username, 
                slugAndId: `${data.slug}-${data.public_id}`
            }
        })
    }
}
const cnFunc = cn
</script>