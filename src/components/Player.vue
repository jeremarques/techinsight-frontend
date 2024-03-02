<template>
    <div 
        ref="element"
        style="touch-action:none;"
        :style="style"
        class="fixed select-none cursor-move z-31"
    >
        <div class="relative flex">
            <div class="group relative">
                <div class="lofi-gif border border-gray-400 dark:border-gray-500 size-16 rounded-full">
                    <img class="h-full w-full object-cover rounded-full" src="@/assets/gifs/lofi-gif-1.gif" alt="Lofi Gif"/>
                </div>
                <div class="absolute bg-black rounded-full bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-center">
                    <button @click="handlePlay" class="hover:scale-110 text-white opacity-0 transform translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <WaveLoader v-if="play" class="size-8" />
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="absolute flex flex-col items-center bg-gray-50 border rounded-lg p-4 right-20">
                <WaveLoader v-if="!loadingVideo" class="size-8 mb-2" />
                <img v-else src="@/assets/images/three-dots.svg" class="w-8 mb-2 mt-2" alt="">

                <div ref="videoIframe" class="hidden" />
                <div class="moving-title overflow-hidden w-[250px] mb-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-30px),transparent_100%)]">
                    <p class="inline-block text-black whitespace-nowrap animate-infinite-scroll text-xs font-medium">Lonely Night 🌑 [dark ambient/music to escape to]</p>
                </div>
                <div class="player-actions flex items-center gap-4">
                    <Button variant="ghost" size="sm" class="rounded-full p-0 hover:bg-transparent ml-2">
                        <SkipBack class="size-5" />
                    </Button>
                    <Button @click="handlePlay" variant="ghost" size="sm" class="rounded-full">
                        <PauseCircle v-if="play" class="size-7" :stroke-width="1.50" />
                        <PlayCircle v-else class="size-7" :stroke-width="1.50" />
                    </Button>
                    <Button variant="ghost" size="sm" class="rounded-full p-0 hover:bg-transparent mr-2">
                        <SkipForward class="size-5" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePlayer, PlayerState } from '@vue-youtube/core'
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'
import { PauseCircle, PlayCircle, SkipBack, SkipForward } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import WaveLoader from '@/components/WaveLoader.vue'

const videoIframe = ref()
const videoId = ref('AzwgsZUcTfM')
const loadingVideo = ref(false)
const play = ref(false)
const element = ref(null)

const { togglePlay, onStateChange, instance } = usePlayer(videoId, videoIframe)
instance.value?.setPlaybackQuality('small')

onStateChange((event) => {
    if (event.data == PlayerState.UNSTARTED) {
        loadingVideo.value = true
    } else {
        loadingVideo.value = false
    }
})

const { x, y, style } = useDraggable(element, {
    initialValue: { x: 40, y: 80 },
    preventDefault: true,
    onEnd: () => false
})

function handlePlay() {
    togglePlay()
    play.value = !play.value
}
</script>