<template>
    <HoverCard :openDelay="400">
        <div 
            style="touch-action:none;"
            class="fixed top-20 right-2 select-none z-31"
        >
            <div ref="videoIframe" class="hidden" />
            <div class="relative flex">
                <HoverCardTrigger>
                    <div class="group relative cursor-move">
                        <div class="lofi-gif border-2 border-gray-600 dark:border-gray-500 size-14 rounded-full">
                            <img class="h-full w-full object-cover rounded-full" src="@/assets/gifs/lofi-gif-1.gif" alt="Lofi Gif"/>
                        </div>
                        <div class="absolute bg-black/30 rounded-full group-hover:bg-black/50 w-full h-full top-0 flex items-center transition justify-center">
                            <button @click="handlePlay" class="hover:scale-110 text-white transition">
                                <WaveLoader v-if="play" class="size-8" />
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-circle-fill opacity-90" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent class="absolute flex flex-col items-center bg-gray-50 border rounded-lg p-4 -right-6 top-2">
                        <div class="flex items-center h-8">
                            <img v-if="!play" src="@/assets/images/three-dots-static.svg" class="w-8 mb-2" alt="">
                            <img v-else-if="loadingVideo" src="@/assets/images/three-dots-animated.svg" class="w-8 mb-2" alt="">
                            <WaveLoader v-else class="size-8 mb-2" />
                        </div>
                        <div class="moving-title overflow-hidden w-[250px] mb-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-30px),transparent_100%)]">
                            <p class="inline-block text-black whitespace-nowrap animate-infinite-scroll text-xs font-medium">Lonely Night 🌑 [dark ambient/music to escape to]</p>
                        </div>
                        <div class="flex w-full gap-4">
                            <div class="player-actions flex items-center gap-2">
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
                            <SliderRoot
                                v-model="volumeValue" 
                                class="relative flex w-full touch-none select-none items-center" 
                                :max="100"
                                :step="5"
                            >
                                <SliderTrack class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
                                    <SliderRange class="absolute h-full bg-primary" />
                                </SliderTrack>
                                <SliderThumb
                                    class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                    aria-label="Volume"
                                />  
                            </SliderRoot>
                        </div>
                </HoverCardContent>
            </div>
        </div>
    </HoverCard>
</template>

<script setup>
import { ref, watch } from 'vue'
import { usePlayer, PlayerState } from '@vue-youtube/core'
import { PauseCircle, PlayCircle, SkipBack, SkipForward } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import WaveLoader from '@/components/WaveLoader.vue'

const videoIframe = ref()
const videoId = ref('AzwgsZUcTfM')
const loadingVideo = ref(false)
const play = ref(false)
const volumeValue = ref([50])
const { togglePlay, onStateChange, instance } = usePlayer(videoId, videoIframe)

instance.value?.setPlaybackQuality('small')
watch(volumeValue, () => instance.value?.setVolume(volumeValue.value[0]))

onStateChange((event) => {
    if (event.data == PlayerState.UNSTARTED) {
        loadingVideo.value = true
    } else {
        loadingVideo.value = false
    }
})

function handlePlay() {
    togglePlay()
    play.value = !play.value
}
</script>