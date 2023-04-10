<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const $el = ref<HTMLElement>(null)
const $text1 = ref<HTMLElement>(null)
const $text2 = ref<HTMLElement>(null)
const $counter1 = ref<HTMLElement>(null)
const $counter2 = ref<HTMLElement>(null)

gsap.registerPlugin(ScrollTrigger)

const initTimeline = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: $el.value,
      start: 'top top',
      end: 'bottom bottom-=150%',
      scrub: 0.1,
      pin: true,
    },
    defaults: {
      ease: 'linear.none',
    },
  })

  tl.to(
    $text1.value,

    {
      opacity: 0,
    }
  )
  tl.to($text2.value, {
    opacity: 1,
  })

  tl.to(
    $counter1.value,
    {
      y: '-100%',
    },
    0
  )

  tl.fromTo(
    $counter2.value,
    {
      y: '100%',
    },
    {
      y: '0%',
    },
    0.1
  )

  return tl
}

onMounted(() => {
  initTimeline()
})
</script>

<template>
  <div data-parallax-wrapper>
    <div ref="$parallax" data-parallax data-offset="0">
      <div ref="$el" class="pin-wrapper">
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
                  >connect brands with their audiences.</span
                >
              </p>
            </div>
            <div class="home-2__pages-wrapper">
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
