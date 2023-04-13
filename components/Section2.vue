<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { resize, delayPromise } from '@emotionagency/utils'
import { shuffleText } from '~/assets/scripts/shuffleText.js'
import { SectionRevealer } from '~/assets/scripts/SectionRevealer'

const $el = ref<HTMLElement>(null)
const $text1 = ref<HTMLElement>(null)
const $text2 = ref<HTMLElement>(null)
const $counterParent = ref<HTMLElement>(null)
const $counter1 = ref<HTMLElement>(null)
const $counter2 = ref<HTMLElement>(null)

const $revealSection = ref<HTMLElement>(null)
const sp = ref(null)

gsap.registerPlugin(ScrollTrigger)

const desktopAnimations = () => {
  const $text1Chars = shuffleText($text1.value)
  const $text2Chars = shuffleText($text2.value)

  const masterTl = gsap.timeline({
    defaults: {
      ease: 'linear.none',
    },
  })

  ScrollTrigger.create({
    trigger: $el.value,
    start: () => 'top top',
    end: () => 'bottom bottom',
    scrub: true,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
    markers: false,
    animation: masterTl,
  })

  const tl = gsap.timeline({
    defaults: {
      ease: 'linear.none',
    },
  })

  tl.seek(-2)

  tl.fromTo(
    $text1Chars,
    { opacity: () => 0 },
    {
      opacity: () => 1,
      stagger: 0.03,
    },
    0
  )

  tl.fromTo(
    $text1.value,
    { '--a-progress': () => 0 },
    { '--a-progress': () => 1, duration: 1 },
    3
  )

  tl.fromTo(
    $counterParent.value,
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    0
  )

  const tl2 = gsap.timeline({
    defaults: {
      ease: 'linear.none',
      delay: 2,
    },
  })

  tl2.fromTo(
    $text1.value,
    { '--a-progress': () => 1 },
    { '--a-progress': () => 0, duration: 1 }
  )

  tl2.fromTo(
    $text1Chars,
    { opacity: () => 1 },
    {
      opacity: () => 0,
      stagger: 0.03,
    },
    0
  )

  tl2.to($text2Chars, {
    opacity: () => 1,
    stagger: 0.03,
  })

  tl2.fromTo(
    $text2.value,
    { '--a-progress': () => 0 },
    { '--a-progress': () => 1, duration: 1 },
    '-=3'
  )

  const tl3 = gsap.timeline({
    defaults: {
      ease: 'linear.none',
      delay: 5,
    },
  })

  ScrollTrigger.create({
    trigger: $el.value,
    start: () => 'top top',
    end: () => 'bottom-=20% bottom',
    scrub: true,
    pin: false,
    animation: tl3,
  })

  tl3.to(
    $counter1.value,
    {
      y: () => '-100%',
    },
    0
  )

  tl3.fromTo(
    $counter2.value,
    {
      y: () => '100%',
    },
    {
      y: () => '0%',
    },
    1
  )

  masterTl.add(tl, 0)
  masterTl.add(tl2)

  masterTl.to($text1.value, {
    '--a-progress': () => 0,
    duration: 5,
  })

  resize.on(() => {
    masterTl.scrollTrigger.refresh()
    tl3.scrollTrigger.refresh()
  })

  return tl
}

const mobileAnimations = () => {
  const $text1Chars = shuffleText($text1.value)
  const $text2Chars = shuffleText($text2.value)

  const tl = gsap.timeline({
    defaults: {
      ease: 'linear.none',
    },
  })

  ScrollTrigger.create({
    trigger: $el.value,
    start: () => 'top top',
    end: () => 'bottom bottom',
    scrub: true,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
    markers: false,
    animation: tl,
  })

  tl.fromTo(
    $text1Chars,
    { opacity: () => 0 },
    {
      opacity: () => 1,
      stagger: 0.03,
      onComplete() {
        $text1.value.classList.add('home-2__text--underline')
      },
      onReverseComplete() {
        $text1.value.classList.remove('home-2__text--underline')
      },
    }
  )

  tl.fromTo(
    $text2Chars,
    { opacity: () => 0 },
    {
      opacity: () => 1,
      stagger: 0.03,
      onComplete() {
        $text2.value.classList.add('home-2__text--underline')
      },
      onReverseComplete() {
        $text2.value.classList.remove('home-2__text--underline')
      },
    },
    0
  )
}

onMounted(async () => {
  resize.on(() => {
    if (window.innerWidth > 1024) {
      desktopAnimations()
    } else {
      mobileAnimations()
    }
  })

  sp.value = new SectionRevealer($revealSection.value)
  await delayPromise(10)
  sp.value.init()
})

onBeforeUnmount(() => {
  sp.value && sp.value.destroy()
})
</script>

<template>
  <div data-reveal-wrapper>
    <div ref="$revealSection" data-offset="0" style="z-index: -1">
      <div ref="$el" class="pin-wrapper" style="height: 320vh">
        <section class="section section--nm home-2">
          <div class="container home-2__wrapper">
            <AboutInfo class="home-2__about-text"
              >Empowering brands at the forefront of digital
            </AboutInfo>
            <div class="home-2__text-wrapper">
              <p ref="$text1" class="home-2__text">
                Integral is a multi-disciplinary design studio, catalysing
                insights with technology to build thoughtful
                <span class="home-2__underline-text">design-led solutions</span>
                for dynamic global clients.
              </p>
              <p ref="$text2" class="home-2__text">
                Spanning strategy, creative direction and production, we deliver
                innovative and engaging experiences that
                <span class="home-2__underline-text"
                  >connect brands with their audiences</span
                >.
              </p>
            </div>
            <div ref="$counterParent" class="home-2__pages-wrapper">
              <p class="home-2__numbers">
                <span ref="$counter1" class="home-2__number home-2__number--1"
                  >1</span
                >
                <span ref="$counter2" class="home-2__number home-2__number--2"
                  >2</span
                >
                / 2
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
