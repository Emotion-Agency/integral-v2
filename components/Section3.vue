<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { SectionRevealer } from '~/assets/scripts/SectionRevealer'

const $revealSection = ref<HTMLElement>(null)
const $el = ref<HTMLElement>(null)
const $video = ref<HTMLElement>(null)

const sp = ref(null)

gsap.registerPlugin(ScrollTrigger)

const initTimeline = () => {
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

  tl.fromTo($video.value, { scale: 0.5 }, { scale: 1 }, 0)
}

onMounted(() => {
  sp.value = new SectionRevealer($revealSection.value)
  sp.value.init()

  initTimeline()
})

onBeforeUnmount(() => {
  sp.value && sp.value.destroy()
})
</script>

<template>
  <div data-reveal-wrapper>
    <div ref="$revealSection" data-offset="0" style="z-index: -2">
      <div ref="$el" class="pin-wrapper" style="height: 200vh">
        <section class="section section--nm home-3">
          <div ref="$video" class="home-3__wrapper">
            <TheVideo class="home-3__content" src="/video/main.mp4" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
