<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { resize } from '@emotionagency/utils'
import emitter from 'tiny-emitter/instance'

import { shuffleText } from '~/assets/scripts/shuffleText.js'

gsap.registerPlugin(ScrollTrigger)

let scrollSequence

const $el = ref<HTMLElement>(null)

const $sequenceContainer = ref<HTMLElement>(null)
const $text = ref<HTMLElement>(null)

const initAnimations = () => {
  const $spans = [...$text.value.querySelectorAll('.home-5__subtext')].map(
    (el: HTMLElement) => shuffleText(el)
  )

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: $el.value,
      start: () => 'top+=60% top',
      end: () => 'bottom bottom',
      scrub: 0.1,
      pin: false,
      pinSpacing: false,
    },
    defaults: {
      ease: 'linear.none',
      overwrite: true,
    },
  })

  const st = ScrollTrigger.create({
    trigger: $el.value,
    start: () => 'top top',
    end: () => 'bottom bottom',
    scrub: true,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
    markers: false,
    onUpdate: ({ progress }) => {
      emitter.emit('sequence-1', progress * 100)
    },
  })

  tl.fromTo(
    $spans,
    { opacity: 0 },
    {
      duration: 0.1,
      opacity: 1,
      stagger: 0.03,
    }
  )

  tl.fromTo(
    $text.value,
    { '--a-progress': () => 0 },
    { '--a-progress': () => 1, duration: 1 }
  )

  tl.fromTo(
    $sequenceContainer.value,
    { opacity: () => 1 },
    { opacity: () => 0.3, duration: 1 },
    2
  )

  resize.on(() => {
    tl.scrollTrigger.refresh()
    st.refresh()
  })
}

onMounted(async () => {
  const initImages = new Array(86).fill(0).map((_, i) => {
    const filename = `https://integral-v2.vercel.app/images/sequence-1/${
      i + 1
    }.jpg`
    return filename
  })

  const { ScrollSequence } = await import('~/assets/scripts/PlaySequence')
  scrollSequence = new ScrollSequence({
    container: $sequenceContainer.value,
    images: initImages,
    cover: true,
    eventName: 'sequence-1',
  })

  initAnimations()
})

onBeforeUnmount(() => {
  scrollSequence && scrollSequence.destroy()
})
</script>

<template>
  <div ref="$el" class="pin-wrapper home-5-pin-wrapper">
    <section class="section section--nm home-5">
      <div class="container home-5__wrapper">
        <div class="scroll-sequence__wrapper">
          <div
            ref="$sequenceContainer"
            data-loaded="0"
            class="home-5__img home-5__background scroll-sequence"
            src="/video/2.mp4"
          />
          <div class="home-5__text-wrapper">
            <p ref="$text" class="home-5__text">
              <span class="home-5__subtext"> We tailor each experience </span>
              <span class="home-5__subtext"> around your story, </span>
              <span class="home-5__subtext">
                creating strategic solutions
              </span>
              <span class="home-5__subtext"> as unique as your vision </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
