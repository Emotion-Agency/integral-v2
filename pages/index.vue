<script setup lang="ts">
import gsap from 'gsap'
import { shuffleText } from '~/assets/scripts/shuffleText'
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})

const $h1 = ref<HTMLElement>(null)

onMounted(() => {
  const tl = gsap.timeline()

  const $h1Chars = shuffleText($h1.value)

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
    0
  )
})
</script>

<template>
  <main>
    <section class="section section--nm home-1">
      <TheVideo class="home-1__bg" src="/video/main_new.mp4" />
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
    <Section8 />
  </main>
</template>
