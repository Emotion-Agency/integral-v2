<script setup lang="ts">
import gsap from 'gsap'

import { shuffleText } from '~/assets/scripts/shuffleText'

const $el = ref<HTMLElement>(null)
const $h1 = ref<HTMLElement>(null)

const onLoad = () => {
  const tl = gsap.timeline()

  const $h1Chars = shuffleText($h1.value)
  const $video = $el.value.querySelector('.home-1__bg-animation-container')

  tl.to($video, { duration: 2, height: '100vh', ease: 'power4.inOut' }, 0)

  tl.to($h1.value, { duration: 0.1, opacity: 1 }, 0)

  tl.to(
    $h1Chars,
    {
      duration: 0.2,
      opacity: 1,
      ease: 'power2.out',
      stagger: 0.01,
      onComplete() {
        $h1.value.classList.add('home-1__title--underline')
      },
    },
    1.5
  )
}
const { isLoaded } = useAppState()

watch(isLoaded, () => {
  onLoad()
})
</script>

<template>
  <main>
    <section ref="$el" class="section section--nm home-1">
      <div class="home-1__bg-animation-container">
        <div class="home-1__bg-wrapper">
          <TheVideo ref="$video" class="home-1__bg" src="/video/main_new.mp4" />
        </div>
      </div>
      <div class="container home-1__wrapper">
        <h1 ref="$h1" class="home-1__title">
          A multidisciplinary creative consultancy shaping
          <span class="home-1__underline-text"> digital culture </span>
        </h1>
      </div>
    </section>
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <!-- <Section8 /> -->
  </main>
</template>
