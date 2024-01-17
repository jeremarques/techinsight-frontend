<template>
    <FloatingMenu 
        :editor="editor" 
        :tippy-options="{ duration: 100 }" 
        :should-show="(editor) => editor.state.selection.$from.nodeBefore?.textContent === '/'"
        v-if="editor"
        class="drop-shadow-md max-h-64 mt-24 flex items-center p-1 bg-background rounded-md overflow-scroll divide-slate-50"
    >
        <div class="flex flex-col mt-28">

            <FloatingMenuButton 
                iconName="Text" 
                title="Texto" 
                description="Escrever textos sem formatação" 
                class="mt-2"
                @click="() => {
                    editor.chain().focus().setParagraph().run()
                }"/>

            <FloatingMenuButton 
                iconName="Code2" 
                title="Código" 
                description="Escrever bloco de código" 
                @click="() => {
                    editor.chain().focus().setCodeBlock().run()
                }"/>

            <FloatingMenuButton 
                iconName="Heading2" 
                title="Título 2" 
                description="Escrever título médio" 
                @click="() => {
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }"/>

            <FloatingMenuButton 
                iconName="Heading3" 
                title="Título 3" 
                description="Escrever título pequeno"
                @click="() => {
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }"/>

            <FloatingMenuButton 
                iconName="Heading4" 
                title="Título 4" 
                description="Escrever título muito pequeno" 
                @click="() => {
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }"/>

            <FloatingMenuButton 
                iconName="Minus" 
                title="Linha horizontal" 
                description="Inserir uma linha horizontal" 
                @click="() => {
                    editor.chain().focus().setHorizontalRule().run()
                }"/>
        </div>

    </FloatingMenu>

    <BubbleMenu
      :editor="editor"
      :tippy-options="{ duration: 100 }"
      v-if="editor"
      class="drop-shadow-md flex items-center bg-background rounded-md overflow-hidden divide-x divide-slate-50"
    >
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <BubbleButton @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :data-active="editor.isActive('italic')">
                        <Italic class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent>
                    <p class="text-sm">Marcar como itálico</p>
                    <small class="text-gray-700">Ctrl + I</small>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <BubbleButton @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :data-active="editor.isActive('bold')">
                        <Bold class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent>
                    <p class="text-sm">Negrito</p>
                    <small class="text-gray-700">Ctrl + B</small>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <BubbleButton @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :data-active="editor.isActive('code')">
                        <Code class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent>
                    <p class="text-sm">Marcar como código</p>
                    <small class="text-gray-700">Ctrl + Shift + X</small>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <BubbleButton @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :data-active="editor.isActive('strike')">
                        <Strikethrough class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent>
                    <p class="text-sm">Tachado</p>
                    <small class="text-gray-700">Ctrl + E</small>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <BubbleButton @click="editor.chain().focus().toggleUnderline().run()" :disabled="!editor.can().chain().focus().toggleUnderline().run()" :data-active="editor.isActive('underline')">
                        <UnderlineIcon class="w-4 h-4" />
                    </BubbleButton>
                </TooltipTrigger>
                <TooltipContent>
                    <p class="text-sm">Sublinhado</p>
                    <small class="text-gray-700">Ctrl + U</small>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <Popover>
                        <PopoverTrigger @click="loadPreviousLink(editor)" :disabled="!editor.can().chain().focus().toggleLink().run()">
                            <BubbleButton :disabled="!editor.can().chain().focus().toggleLink().run()" :data-active="editor.isActive('link')">
                                <Link2 class="w-4 h-4" />
                            </BubbleButton>
                        </PopoverTrigger>
                        <PopoverContent class="-ml-40">
                            <form @submit.prevent class="flex flex-col space-y-2">
                                <Label for="width">Link</Label>
                                <Input
                                    id="link-input"
                                    type="text"
                                    placeholder="Insira aqui o link"
                                    :default-value="state.previousUrl"
                                    class="h-8 font-regular"
                                    />
                                <div class="flex space-x-1">
                                    <Button class="h-8 flex-1" variant="secondary" @click="setLink(editor)" type="submit">
                                        {{ state.previousUrl ? 'Alterar' : 'Adicionar' }}
                                    </Button>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button 
                                                v-if="state.previousUrl && editor.isActive('link')" 
                                                class="h-8 text-red-400 border-red-400 hover:text-white hover:bg-red-400" variant="outline" size="icon"
                                                @click="editor.chain().focus().unsetLink().run()" 
                                                :disabled="!editor.isActive('link')"
                                            >
                                                <Trash2 class="w-4 h-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p class="text-sm">Remover link</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </form>
                        </PopoverContent>
                    </Popover>
                </TooltipTrigger>
                <TooltipContent >
                    <p class="text-sm">Adicionar Link</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        
    </BubbleMenu>

    <EditorContent :editor="editor" />
</template>
<script>
import { reactive } from 'vue'
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import { createLowlight } from 'lowlight'
import { Toggle } from '@/components/ui/toggle'
import { Bold, Code, FileText, Italic, Link2, Strikethrough, Trash2, UnderlineIcon } from 'lucide-vue-next'
import BubbleButton from './BubbleButton.vue'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import FloatingMenuButton from '@/components/Editor/FloatingMenuButton.vue'
import Underline from '@tiptap/extension-underline'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

import 'highlight.js/styles/github-dark.css'

import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import typescript from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import py from 'highlight.js/lib/languages/python'
import php from 'highlight.js/lib/languages/php'
import bash from 'highlight.js/lib/languages/bash'
import shell from 'highlight.js/lib/languages/shell'
import go from 'highlight.js/lib/languages/go'
import java from 'highlight.js/lib/languages/java'
import rust from 'highlight.js/lib/languages/rust'
import ruby from 'highlight.js/lib/languages/ruby'
import c from 'highlight.js/lib/languages/c'
import csharp from 'highlight.js/lib/languages/csharp'
import cpp from 'highlight.js/lib/languages/cpp'
import json from 'highlight.js/lib/languages/json'
import swift from 'highlight.js/lib/languages/swift'
import dart from 'highlight.js/lib/languages/dart'
import kotlin from 'highlight.js/lib/languages/kotlin'

export default {
    components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
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
    FileText,
    FloatingMenuButton,
    UnderlineIcon,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Link2,
    Input,
    Label,
    Button,
    Trash2
},

    setup () {
        const lowlight = createLowlight({
            javascript,
            css,
            typescript,
            html,
            py,
            php,
            bash,
            shell,
            go,
            java,
            rust,
            ruby,
            c,
            csharp,
            cpp,
            json,
            swift,
            dart,
            kotlin,
        })

        const editor = useEditor({
            editorProps: {
                attributes: {
                    class: "prose prose-gray dark:prose-invert prose-lg m-2 max-w-none focus:outline-none prose-headings:font-body-bold prose-p:font-body-regular prose-code:font-code"
                }
            },
            content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis mauris eget eleifend bibendum. Maecenas nec velit id lacus tempus ornare elementum a nibh. Phasellus dictum felis erat, sed maximus justo lacinia nec. Phasellus eu consequat mauris. Duis auctor tellus malesuada mi gravida tempus. Cras finibus at neque pulvinar auctor. Quisque faucibus, nulla sit amet facilisis iaculis, ipsum elit ullamcorper felis, in maximus risus tellus euismod lorem. Curabitur et metus a ipsum dictum viverra. Sed id nisi eu eros ornare ultricies vitae vitae tellus. Sed eget dictum tortor.</p>

            <p>Nam nec metus nec nisl molestie dignissim id sit amet mi. In congue nisl nec varius lacinia. Donec efficitur magna turpis, quis lobortis urna fringilla id. Donec turpis orci, mattis id lacus a, convallis commodo erat. Aliquam consectetur, neque vel fermentum porta, nunc mi mollis quam, ut fermentum diam metus ut leo. Nam lobortis enim neque, vel vestibulum enim fermentum sollicitudin. Vivamus nec nisl in risus condimentum congue. Maecenas condimentum pharetra velit quis luctus. Ut in sollicitudin lacus. Phasellus at sodales nisl. Maecenas sapien orci, mollis vitae mi non, elementum pellentesque neque. Praesent maximus ante nibh, non condimentum dolor condimentum id. Nulla ligula elit, vulputate tempor fringilla sit amet, commodo non ex. Morbi euismod augue vel eros sagittis placerat. Praesent tincidunt auctor lorem, sed fermentum neque tempor quis.</p>

            <pre>
                <code class="language-javascript">
                    function sayHello(message) {
                        console.log(message)
                    }

                    sayHello('Hello')
                </code>
            </pre>

            <p>Sed vulputate purus non magna gravida, nec tristique risus consectetur. Mauris a gravida magna. Sed non turpis velit. Nam faucibus mauris eu tellus ornare euismod. Vivamus et eros vel lorem elementum consectetur vel eu sem. In tempor consequat placerat. Ut justo velit, vestibulum non tellus non, fermentum maximus nisl. Nulla euismod eros eget leo dapibus bibendum. Aliquam mi sapien, ullamcorper at malesuada ac, posuere id nisl. Curabitur laoreet volutpat ultrices. Ut eu dui ac metus gravida tincidunt.</p>
            `,
            extensions: [
                StarterKit,
                Underline,
                Placeholder.configure({
                    placeholder: ({ node }) => {
                        if (node.type.name === 'heading') {
                            return 'Título...'
                        } else if (node.type.name === 'codeBlock') {
                            return 'Código...'
                        }
                        

                        return 'Pressione "/" para mais opções...'
                    },
                    emptyNodeClass: 'before:content-[attr(data-placeholder)] before:text-gray-300 before:h-0 before:float-left before-pointer-events-none',
                }),
                Link.configure({
                    HTMLAttributes: {
                        class: 'text-blue-600 cursor-pointer'
                    },
                    openOnClick: false,
                }),
                CodeBlockLowlight.configure({
                    lowlight,
                }),
                HorizontalRule
            ]
        })

        const state = reactive({
            previousUrl: ''
        })
        
        function loadPreviousLink(editorObject) {
            const previousUrl = editorObject.getAttributes('link').href
            if (previousUrl) {
                state.previousUrl = previousUrl
            } else {
                state.previousUrl = ''
            }
        }

        function setLink(editorObject) {
            const linkInput = document.getElementById('link-input')
            if (!linkInput.value) {
                editorObject
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .unsetLink()
                    .run()

                return
            }

            editorObject
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({ href: linkInput.value, target: '_blank' })
                .run()
        }

        return {
            editor,
            state,
            loadPreviousLink,
            setLink
        }
    }
}
</script>
