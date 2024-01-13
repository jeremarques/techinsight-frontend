<template>
    <BubbleMenu
      :editor="editor"
      :tippy-options="{ duration: 100 }"
      v-if="editor"
      class="drop-shadow-md flex items-center bg-background rounded-md overflow-hidden"
    >
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger >
                    <BubbleButton @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :data-active="editor.isActive('italic')">
                        <Italic class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent >
                    <p class="text-sm">Italic</p>
                    <small class="text-gray-700">Ctrl + I</small>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger >
                    <BubbleButton @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :data-active="editor.isActive('bold')">
                        <Bold class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent >
                    <p class="text-sm">Bold</p>
                    <small class="text-gray-700">Ctrl + B</small>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger >
                    <BubbleButton @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :data-active="editor.isActive('code')">
                        <Code class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent >
                    <p class="text-sm">Marcar como código</p>
                    <small class="text-gray-700">Ctrl + Shift + X</small>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger >
                    <BubbleButton @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :data-active="editor.isActive('strike')">
                        <Strikethrough class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent >
                    <p class="text-sm">Strike-through</p>
                    <small class="text-gray-700">Ctrl + E</small>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        
        
        <!-- <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            h1
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
            h2
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
            h3
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
            h4
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
            h5
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
            h6
        </button> -->
    </BubbleMenu>

    <EditorContent :editor="editor" />
</template>
<script>
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Toggle } from '@/components/ui/toggle'
import { Bold, Code, Italic, Strikethrough } from 'lucide-vue-next'
import BubbleButton from './BubbleButton.vue'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default {
    components: {
        EditorContent,
        BubbleMenu,
        Toggle,
        Italic,
        Bold,
        BubbleButton,
        Code,
        Strikethrough,
        Tooltip,
        TooltipContent,
        TooltipProvider,
        TooltipTrigger,
    },

    setup () {
        const editor = useEditor({
            editorProps: {
                attributes: {
                    class: 'prose prose-gray dark:prose-invert prose-base m-2 max-w-none focus:outline-none prose-h2:font-semibold prose-p:font-p-regular'
                }
            },
            content: `
            <section class="ingredientes">
            <h2>Ingredientes</h2>
            <ul>
                <li>3 ovos</li>
                <li>1 xícara (240ml) de açúcar</li>
                <li>1 xícara (240ml) de leite</li>
                <li>1/2 xícara (120ml) de óleo</li>
                <li>2 xícaras (240g) de farinha de trigo</li>
                <li>1 colher de sopa de fermento em pó</li>
                <li>1 colher de sopa de bicarbonato de sódio</li>
                <li>1/2 xícara (100g) de chocolate em pó</li>
                <li>1/2 xícara (100g) de nozes picadas (opcional)</li>
            </ul>
            </section>

            <section class="modo-de-preparo">
            <h2>Modo de preparo</h2>
            <ol>
                <li>Pré-aqueça o forno a 180°C (350°F). Unte e enfarinhe uma forma redonda de 20cm (8 polegadas).</li>
                <li>Em uma tigela grande, bata os ovos e o açúcar até ficarem claros e foram.</li>
                <li>Adicione o leite, o óleo, a farinha, o fermento, o bicarbonato de sódio, o chocolate em pó e as nozes picadas (se estiver usando). Misture até ficar homogêneo.</li>
                <li>Despeje a massa na forma preparada e asse por 30-35 minutos, ou até que um palito inserido no centro saia limpo.</li>
                <li>Deixe o bolo esfriar completamente antes de desenformar.</li>
            </ol>
            </section>
            `,
            extensions: [
                StarterKit,
            ]
        })

        return {
            editor
        }
    }
}
</script>