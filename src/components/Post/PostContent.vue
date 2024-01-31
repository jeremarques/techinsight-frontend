<template>
    <div v-html="content" class="insight-content prose prose-gray dark:prose-invert prose-lg m-2 max-w-none focus:outline-none prose-headings:font-body-bold prose-p:font-body-regular prose-code:font-code prose-h1:text-gray-900 prose-h1:font-bold prose-h1:dark:text-gray-50 prose-h1:tracking-tighter"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/github-dark.css'
import '@/assets/css/content-insight-codes.css'

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

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('html', html)
hljs.registerLanguage('py', py)
hljs.registerLanguage('php', php)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('go', go)
hljs.registerLanguage('java', java)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('ruby', ruby)
hljs.registerLanguage('c', c)
hljs.registerLanguage('csharp', csharp)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('json', json)
hljs.registerLanguage('swift', swift)
hljs.registerLanguage('dart', dart)
hljs.registerLanguage('kotlin', kotlin)

const props = defineProps({
    content: {
        type: String,
        required: true,
        default: ''
    }
})

onMounted(() => {
    Array.from(document.querySelectorAll('pre code')).forEach((block) => {
        hljs.highlightElement(block)
    })
})
</script>