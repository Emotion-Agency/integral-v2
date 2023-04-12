<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { resize } from '@emotionagency/utils'
import { shuffleText } from '~/assets/scripts/shuffleText.js'

const $el = ref<HTMLElement>(null)
const $heading = ref<HTMLElement>(null)
const $heading2 = ref<HTMLElement>(null)
const $text = ref<HTMLElement>(null)
const $arrow = ref<HTMLElement>(null)
const $about = ref<HTMLElement>(null)
const $btn = ref<HTMLElement>(null)
const $video = ref<HTMLElement>(null)

gsap.registerPlugin(ScrollTrigger)

const createTimeline = () => {
  const $hSpans = shuffleText($heading.value)
  const $h2Spans = shuffleText($heading2.value)
  const $textSpans = shuffleText($text.value)

  // console.log($hSpans)
  $hSpans.push($arrow.value)

  const masterTl = gsap.timeline({
    defaults: {
      ease: 'linear.none',
    },
  })

  const tl = gsap.timeline({
    defaults: {
      ease: 'linear.none',
    },
  })

  const tl1 = gsap.timeline({
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

  tl.fromTo(
    $hSpans,
    { opacity: 0 },
    { duration: 0.1, opacity: 1, stagger: 0.03 }
  )

  tl.fromTo(
    $hSpans,
    { opacity: 1 },
    { duration: 0.1, opacity: 0, stagger: 0.03 },
    '+=2'
  )

  tl1.fromTo($about.value, { opacity: 0 }, { duration: 1, opacity: 1 }, 0)

  tl1.fromTo($btn.value, { opacity: 0 }, { duration: 1, opacity: 1 }, 0.5)

  tl1.fromTo(
    $video.value,
    { scale: 0.9, opacity: 0 },
    { duration: 2, opacity: 1, scale: 1 },
    0
  )

  tl1.fromTo(
    $h2Spans,
    { opacity: 0 },
    { duration: 0.1, opacity: 1, stagger: 0.03 },
    0
  )

  tl1.fromTo(
    $textSpans,
    { opacity: 0 },
    { duration: 0.1, opacity: 1, stagger: 0.01 },
    0
  )

  masterTl.add(tl)
  masterTl.add(tl1)

  resize.on(() => {
    masterTl.scrollTrigger.refresh()
  })
}

onMounted(() => {
  createTimeline()
})
</script>

<template>
  <div ref="$el" class="pin-wrapper home-4-pin-wrapper" style="height: 320vh">
    <section class="section section--nm home-4">
      <div class="container home-4__wrapper">
        <AboutInfo class="home-4__mob-text">About </AboutInfo>
        <div class="home-4__info-wrapper home-4__info-wrapper--1">
          <h2 ref="$heading" class="home-4__info-text">
            Redefining
            <span class="home-4__arrow-part">
              <span class="home-4__arrow-text">&lt;&gt;</span> brand
              <span class="home-4__arrow-text">&lt;/&gt;</span>
            </span>
            <span class="home-4__text-part">dimensionalities</span>
            <IconsLeftAngleArrow class="home-4__arrow" />
          </h2>
        </div>
        <div ref="$video" class="home-4__img-wrapper">
          <TheVideo class="home-4__img" src="/video/1_new.mp4" />
        </div>
        <div class="home-4__content">
          <span ref="$about">
            <AboutInfo class="home-4__about-text">About </AboutInfo>
          </span>
          <div class="home-4__info-wrapper home-4__info-wrapper--2">
            <h2 ref="$heading" class="home-4__info-text">
              Redefining
              <span class="home-4__arrow-part">
                <span class="home-4__arrow-text">&lt;&gt;</span> brand
                <span class="home-4__arrow-text">&lt;/&gt;</span>
              </span>
              <span class="home-4__text-part">dimensionalities</span>
              <span ref="$arrow">
                <IconsLeftAngleArrow class="home-4__arrow" />
              </span>
            </h2>
          </div>
          <div class="home-4__text-wrapper">
            <p ref="$heading2" class="home-4__med-desc">
              Operating at the intersection of physical & digital, specialising
              in; <span class="home-4__underline-text">brand</span>,
              <span class="home-4__underline-text">fashion</span>,
              <span class="home-4__underline-text">product</span> &
              <span class="home-4__underline-text">web3</span>.
            </p>
            <p ref="$text" class="home-4__small-desc">
              With deep knowledge broadly spanning design, fashion & web3, we
              help our partners grow through our innate understanding of the
              drivers behind tomorrow’s trends and opportunities.
            </p>
            <div ref="$btn" class="home-4__btn-wrapper">
              <TheButton> Studio </TheButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
