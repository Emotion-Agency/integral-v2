<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { resize } from '@emotionagency/utils'

import { SectionRevealer } from '~/assets/scripts/SectionRevealer'

const $revealSection = ref<HTMLElement>(null)
const $el = ref<HTMLElement>(null)
const $video = ref<HTMLElement>(null)

const sp = ref(null)

const initAnimations = () => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: $el.value,
      start: () => 'top top',
      end: () => 'bottom bottom',
      scrub: 0.1,
      pin: true,
      pinSpacing: false,
    },
    defaults: {
      ease: 'linear.none',
      overwrite: true,
    },
  })

  tl.fromTo(
    $video.value,
    { scale: 0.5, opacity: 0.5 },
    { scale: 1, opacity: 1 },
    0
  )

  resize.on(() => {
    tl.scrollTrigger.refresh()
  })
}

onMounted(() => {
  resize.on(() => {
    if (window.innerWidth < 1024) {
      return
    }
    initAnimations()
  })
  sp.value = new SectionRevealer($revealSection.value)
  sp.value.init()
})

onBeforeUnmount(() => {
  sp.value && sp.value.destroy()
})
</script>

<template>
  <div data-reveal-wrapper>
    <div ref="$revealSection" data-offset="0" style="z-index: -2">
      <div ref="$el" class="pin-wrapper home-3-pin-wrapper">
        <section class="section section--nm home-3">
          <div ref="$video" class="home-3__wrapper">
            <TheVideo class="home-3__content" src="/video/22.mp4" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
