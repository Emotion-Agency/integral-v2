<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { resize } from '@emotionagency/utils'
import emitter from 'tiny-emitter/instance'

import { shuffleText } from '~/assets/scripts/shuffleText.js'

gsap.registerPlugin(ScrollTrigger)

const activeIdx = ref(0)
const $el = ref<HTMLElement>(null)
const $items = ref<NodeListOf<HTMLElement>>(null)
const $counter = ref<HTMLElement>(null)

let scrollSequence
const $sequenceContainer = ref<HTMLElement>(null)

const initAnimations = () => {
  const $h = []
  const $m = []
  const $p = []

  $items.value.forEach($item => {
    $h.push($item.querySelector('.home-7__title'))
    $m.push($item.querySelector('.home-7__med-desc'))
    $p.push($item.querySelector('.home-7__small-desc'))
  })

  const $hChars = $h.map(el => shuffleText(el))
  const $mChars = $m.map(el => shuffleText(el))
  const $pChars = $p.map(el => shuffleText(el))

  const $numbers = $el.value.querySelectorAll('.home-7__number-val')

  $items.value.forEach(($item, idx) => {
    const topPos = idx * 33
    const bottomPos = 100 - (idx + 1) * 33

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: $el.value,
        start: () => `top+=${topPos}% top`,
        end: () => `bottom-=${bottomPos}% bottom`,
        scrub: 0.1,
        pin: false,
        pinSpacing: false,
      },
      defaults: {
        ease: 'linear.none',
        overwrite: false,
      },
    })

    const tlPrev = gsap.timeline({
      defaults: { ease: 'linear.none' },
    })
    const tlCurrent = gsap.timeline({
      defaults: { ease: 'linear.none' },
    })

    tl.add(tlPrev, 1)

    tl.add(tlCurrent, 2)

    idx === 0 &&
      tlPrev.fromTo(
        $counter.value,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
        },
        0
      )

    idx === 0 &&
      tlPrev.fromTo(
        $sequenceContainer.value,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
        },
        0
      )

    idx > 0 &&
      tlPrev.fromTo(
        $items.value[idx - 1],
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
        },
        0
      )

    idx > 0 &&
      tlPrev.to(
        $numbers[idx - 1],
        {
          y: '-100%',
          duration: 1,
        },
        0
      )

    idx > 0 &&
      tlCurrent.fromTo(
        $numbers[idx],
        { y: '100%' },
        {
          y: '0%',
          duration: 1,
        },
        0
      )

    tlCurrent.fromTo(
      $item,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      },
      0
    )

    tlCurrent.fromTo(
      $hChars[idx],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        stagger: 0.03,
      },
      0
    )

    tlCurrent.fromTo(
      $mChars[idx],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        stagger: 0.03,
      },
      1
    )

    tlCurrent.fromTo(
      $pChars[idx],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        stagger: 0.03,
      },
      2
    )

    idx === 2 &&
      tlCurrent.fromTo(
        '.home-7__btn-wrapper',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
        },
        3
      )

    resize.on(() => {
      tl.scrollTrigger.refresh()
    })
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
      emitter.emit('sequence-2', progress * 100)
    },
  })

  resize.on(() => {
    st.refresh()
  })
}

onMounted(async () => {
  const initImages = new Array(100).fill(0).map((_, i) => {
    const filename = `/images/sequence-2/${i + 1}.jpg`
    return filename
  })

  const { ScrollSequence } = await import('~/assets/scripts/PlaySequence')
  scrollSequence = new ScrollSequence({
    container: $sequenceContainer.value,
    images: initImages,
    priorityFrames: [1],
    cover: true,
    eventName: 'sequence-2',
  })

  initAnimations()
})

onBeforeUnmount(() => {
  scrollSequence && scrollSequence.destroy()
})

const items = [
  {
    title: 'Simplified',
    mediumText:
      'Sophisticated solutions meticulously crafted around the needs of your audience',
    smallText:
      'Utilising the power of design & narrative, we turn complex concepts into meaningful digital experiences, from vision to launch.',
  },
  {
    title: 'Scalable',
    mediumText:
      'Design thinking allows inherent scalability of your products from the core',
    smallText:
      'Establishing practical & purpose driven systems builds versatile asset libraries, whilst affording the flexibility of modularity.',
  },
  {
    title: 'Growth',
    mediumText:
      'Expert knowledge catalyses your path to the forefront of the digital world',
    smallText:
      'Working diligently to accelerate & amplify your digital journey, through transparent partnerships and agile implementations.',
  },
]
</script>

<template>
  <div ref="$el" class="pin-wrapper home-7-pin-wrapper">
    <section id="approach" class="section section--nm home-7">
      <div class="container grid home-7__wrapper">
        <AboutInfo class="home-7__about-text">Approach </AboutInfo>
        <div class="home-7__content">
          <div
            v-for="(el, idx) in items"
            :key="idx"
            ref="$items"
            class="home-7__info-wrapper"
            :class="
              idx === Math.round(activeIdx) && 'home-7__info-wrapper--active'
            "
          >
            <div class="home-7__text-list">
              <p class="home-7__title">{{ el.title }}</p>
              <p class="home-7__med-desc">
                {{ el.mediumText }}
              </p>
              <p class="home-7__small-desc">
                {{ el.smallText }}
              </p>
              <div v-if="idx === items.length - 1" class="home-7__btn-wrapper">
                <TheButton> Learn More </TheButton>
              </div>
            </div>
          </div>
          <div class="home-7__pages-wrapper">
            <p ref="$counter" class="home-7__numbers">
              <span class="home-7__number">
                <span class="home-7__number-val home-7__number-val--0">1</span>
                <span class="home-7__number-val home-7__number-val--1">2</span>
                <span class="home-7__number-val home-7__number-val--2"
                  >3</span
                > </span
              >/
              <span class="home-7__number">3</span>
            </p>
          </div>
        </div>
        <div class="home-7__img-wrapper">
          <div ref="$sequenceContainer" class="home-7__img"></div>
          <!-- <TheVideo class="home-7__img" src="/video/6.mp4" /> -->
        </div>
      </div>
    </section>
  </div>
</template>
