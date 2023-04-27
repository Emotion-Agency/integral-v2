<script lang="ts" setup>
import gsap from 'gsap'
import { raf, clamp } from '@emotionagency/utils'

import { shuffleText } from '~/assets/scripts/shuffleText'

const loaded = ref(0)

const { isLoaded } = useAppState()

const loaderPhrases = [
  'Preparing fonts',
  'Loading assets',
  'Preparing content',
  'Creating scene',
  'Starting animations',
]

const currentIdx = ref(0)

const $loaderText = ref<HTMLElement>(null)
const $loaderCounter = ref<HTMLElement>(null)
const $loaderProgress = ref<HTMLElement>(null)

const afterLoadAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      isLoaded.value = true
    },
  })

  console.log($loaderText.value)

  const $loaderTextSpans = shuffleText($loaderText.value)
  const $loaderCounterSpans = shuffleText($loaderCounter.value)

  tl.to($loaderTextSpans, { duration: 0.2, opacity: 0, stagger: 0.02 }, 0)
  tl.to($loaderCounterSpans, { duration: 0.2, opacity: 0, stagger: 0.02 }, 0)
  tl.to($loaderProgress.value, { duration: 1, width: '100vw' }, 0)
}

onMounted(() => {
  const sequences = document.querySelectorAll('[data-loaded]')

  const watchProgress = () => {
    sequences.forEach((s: HTMLElement) => {
      loaded.value =
        Math.floor(+s.dataset.loaded / sequences.length) * sequences.length

      currentIdx.value = clamp(Math.round(loaded.value / 20), 0, 4)
    })

    if (loaded.value >= 100) {
      raf.off(watchProgress)

      setTimeout(() => {
        afterLoadAnimation()
        window.ss && (window.ss.isFixed = false)
      }, 500)
    }
  }

  raf.on(watchProgress)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="!isLoaded" class="e-loader">
      <div class="container e-loader__container">
        <div ref="$loaderProgress" class="e-loader__progress-wrapper">
          <div
            class="e-loader__progress"
            :style="{ width: `${loaded}%` }"
          ></div>
        </div>
        <div class="e-loader__content-wrapper">
          <div ref="$loaderText" class="e-loader__text">
            [ &lt;&gt; {{ loaderPhrases[currentIdx] }}... &lt;/&gt; ]
          </div>
          <span ref="$loaderCounter" class="e-loader__percent"
            >{{ loaded }}%</span
          >
        </div>
      </div>
    </div>
  </Transition>
</template>
