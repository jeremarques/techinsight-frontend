<template>
    <header class="fixed w-full top-0 z-50 dark:border-b dark:border-gray-800">
        <nav class="w-full shadow-sm backdrop-blur-lg bg-white/80 dark:bg-gray-950">
            <div class="container px-6 md:px-6 lg:px-20 py-4 mx-auto">
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
                                            :modelValue="state.titleValue" 
                                            class="border-none p-0 h-5 rounded-sm text-[16px] font-body-medium focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-default" 
                                            placeholder="Título..." 
                                            :disabled="state.updateTitleAutomatically"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent v-if="state.updateTitleAutomatically" side="bottom" class="mt-2">
                                        <p class="text-xs font-regular">Se você deseja adicionar o título manualmente,<br /> clique no botão ao lado.</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip :delayDuration="400">
                                    <TooltipTrigger as-child>
                                        <Button variant="ghost" class="p-1 h-auto" @click="changeTitleUpdate">
                                            <Edit class="text-gray-500 h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p class="text-xs font-regular">Editar título menualmente</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    
                    <div class="flex flex-1 items-center justify-end space-x-2">
                        <Button class="font-medium">
                            Publicar
                        </Button>
                        <Button variant="ghost" as-child>
                            <RouterLink class="px-2" :to="{ name: 'home-blog' }">
                                <X class="text-gray-800" />
                            </RouterLink>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <div>
        <div class="container mt-24 md:px-6 lg:px-20 mx-auto pb-16 md:mb-0">
            <div class="px-6 xl:px-52 2xl:px-56 pt-16">
                <Editor @updateTitle="updateInputTitle" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import Editor from '@/components/Editor/Editor.vue'
import { Input } from '@/components/ui/input'
import { Edit, X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

export default {
    components: {
    Editor,
    Input,
    Edit,
    Button,
    X,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
},
    
    setup () {
        const state = reactive({
            titleValue: '',
            updateTitleAutomatically: true
        })

        function updateInputTitle(newTitle) {
            if (state.updateTitleAutomatically) {
                state.titleValue = newTitle               
            }
        }

        function changeTitleUpdate() {
            state.updateTitleAutomatically = false
        }

        return {
            state,
            updateInputTitle,
            changeTitleUpdate
        }

    }
}
</script>