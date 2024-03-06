<template>
    <HoverCard :openDelay="400">
        <div class="fixed top-20 right-2 z-31">
            <div ref="videoIframe" class="hidden" />
            <div class="relative flex">
                <HoverCardTrigger>
                    <div @click="handlePlay" class="group relative cursor-pointer">
                        <div class="lofi-gif border-2 border-gray-600 dark:border-gray-500 size-14 rounded-full">
                            <img class="h-full w-full object-cover rounded-full" src="@/assets/gifs/lofi-gif-1.gif" alt="Lofi Gif"/>
                        </div>
                        <div class="absolute bg-black/50 rounded-full group-hover:bg-black/60 w-full h-full top-0 flex items-center transition justify-center">
                            <button class="hover:scale-110 text-white transition">
                                <WaveLoader v-if="play" class="size-8" />
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-circle-fill opacity-90" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent 
                    class="absolute flex flex-col items-center bg-cover bg-center border border-gray-300 rounded-lg p-4 -right-6 top-2"
                    :class="videoThumbnailClass"
                >
                    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-lg bg-gradient-to-b from-gray-100/30 via-gray-800/75 to-black opacity-80 -z-10"></div>
                    <div class="flex items-center h-8 z-35">
                        <img v-if="!play" src="@/assets/images/three-dots-static.svg" class="w-8 mb-2" alt="">
                        <img v-else-if="loadingVideo" src="@/assets/images/three-dots-animated.svg" class="w-8 mb-2" alt="">
                        <WaveLoader v-else class="size-8 mb-2 text-white" />
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <div class="moving-title overflow-hidden w-[250px] mb-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-30px),transparent_100%)]">
                                    <a :href="currentSong.link" target="_blank">
                                        <p class="inline-block text-white whitespace-nowrap animate-infinite-scroll text-xs font-medium">{{ currentSong.title }}</p>
                                    </a>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span class="text-xs">
                                    Abrir vídeo no YouTube
                                </span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <div class="flex w-full gap-4">
                        <div class="player-actions flex items-center gap-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger as-child>
                                        <Button variant="ghost" size="sm" class="rounded-full p-2 h-8 text-white hover:bg-white/90">
                                            <SkipBack @click="prevSong" class="size-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span class="text-xs">
                                            Voltar
                                        </span>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger as-child>
                                        <Button @click="handlePlay" variant="ghost" size="sm" class="p-1.5 rounded-full text-white hover:bg-white/90">
                                            <PauseCircle v-if="play" class="size-6" :stroke-width="1.50" />
                                            <PlayCircle v-else class="size-6" :stroke-width="1.50" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span class="text-xs">
                                            {{ play ? 'Pausar' : 'Iniciar' }}
                                        </span>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger as-child>
                                        <Button variant="ghost" size="sm" class="rounded-full p-2 h-8 text-white hover:bg-white/90">
                                            <SkipForward @click="nextSong" class="size-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span class="text-xs">
                                            Próximo
                                        </span>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            
                        </div>
                        <SliderRoot
                            v-model="volumeValue" 
                            class="relative flex w-full touch-none select-none items-center" 
                            :max="100"
                            :step="5"
                        >
                            <SliderTrack class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
                                <SliderRange class="absolute h-full bg-brand-main-400" />
                            </SliderTrack>
                            <SliderThumb
                                class="block h-5 w-5 rounded-full border-2 border-brand-main-700 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
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
import { ref, computed, watch } from 'vue'
import { usePlayer, PlayerState } from '@vue-youtube/core'
import { PauseCircle, PlayCircle, SkipBack, SkipForward } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import WaveLoader from '@/components/WaveLoader.vue'
import { songs } from '@/utils/lofiSongs'

const currentSong = ref(songs[0])
const currentSongIndex = ref(0)
const maxSongs = songs.length
const videoIframe = ref()
const loadingVideo = ref(false)
const videoThumbnailClass = computed(() => `bg-[url('https://img.youtube.com/vi/${currentSong.value.id}/0.jpg')]`)
const play = ref(false)
const volumeValue = ref([50])
const { togglePlay, onStateChange, instance } = usePlayer(currentSong.value.id, videoIframe)

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

function nextSong() {
    if ((maxSongs - 1) === currentSongIndex.value) {
        currentSongIndex.value = 0
        currentSong.value = songs[0]
        instance.value?.loadVideoById(currentSong.value.id)
    } else {
        currentSongIndex.value += 1
        currentSong.value = songs[currentSongIndex.value]
        instance.value?.loadVideoById(currentSong.value.id)
    }
}

function prevSong() {
    if (currentSongIndex.value === 0) {
        currentSongIndex.value = maxSongs - 1
        currentSong.value = songs[currentSongIndex.value]
        instance.value?.loadVideoById(currentSong.value.id)
    } else {
        currentSongIndex.value -= 1
        currentSong.value = songs[currentSongIndex.value]
        instance.value?.loadVideoById(currentSong.value.id)
    }
}
</script>