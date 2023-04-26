<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { resize } from '@emotionagency/utils'

gsap.registerPlugin(ScrollTrigger)

const $el = ref<HTMLElement>(null)
const $services = ref<NodeListOf<HTMLElement>>(null)
const activeIdx = ref(0)

const initAnimations = () => {
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
    activeIdx,
    { value: 0 },
    {
      duration: 1,
      value: 3,
    }
  )

  resize.on(() => {
    tl.scrollTrigger.refresh()
  })
}

onMounted(() => {
  initAnimations()
})

const services = [
  {
    title: 'Brand',
    items: [
      'Strategy',
      'Art Direction',
      'Identity Systems',
      'Merchandise',
      'Campaigns',
    ],
  },
  {
    title: 'Fashion',
    items: [
      '3D Wearables',
      'Digital Fashion',
      'Material Libraries',
      'Virtual Stores',
      'AR Dressing',
    ],
  },
  {
    title: 'Product',
    items: [
      'UIX',
      'Motion Design',
      'Creative Front-end',
      '3D Content',
      'Web XR',
    ],
  },
  {
    title: 'Web3',
    items: [
      'Advisory',
      'Design Sprints',
      'NFT Co-creation',
      'Generative NFTs',
      'Metaverse',
    ],
  },
]
</script>

<template>
  <div ref="$el" class="pin-wrapper home-6-pin-wrapper">
    <section id="services" class="section section--nm home-6">
      <div class="container home-6__wrapper">
        <AboutInfo>Services </AboutInfo>
        <div class="grid home-6__info-wrapper">
          <div
            v-for="(el, idx) in services"
            :key="idx"
            ref="$services"
            class="home-6__info"
            :class="{
              'home-6__info--active': Math.round(activeIdx) === idx,
            }"
          >
            <h3 class="home-6__title">
              {{ el.title }}
              <span class="home-6__info-arrow">
                <IconsAngleArrow />
              </span>
            </h3>
            <ul class="home-6__text-list">
              <li
                v-for="(elem, index) in el.items"
                :key="index"
                class="home-6__text-li"
              >
                <p class="home-6__text">
                  <span class="home-6__symbol">¬ </span>{{ elem }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
