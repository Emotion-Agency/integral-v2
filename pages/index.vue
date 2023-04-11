<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { SectionRevealer } from '~/assets/scripts/SectionRevealer'

definePageMeta({
  pageTransition,
})

const $revealSection = ref<HTMLElement>(null)
const sp = ref(null)

onMounted(() => {
  sp.value = new SectionRevealer($revealSection.value)
  sp.value.init()
})

onBeforeUnmount(() => {
  sp.value && sp.value.destroy()
})
</script>

<template>
  <main>
    <section class="section section--nm home-1">
      <TheVideo class="home-1__bg" src="/video/main.mp4" />
      <div class="container home-1__wrapper">
        <h1 class="home-1__title">
          A multidisciplinary creative consultancy shaping
          <span class="home-1__underline-text"> digital culture </span>
        </h1>
      </div>
    </section>
    <Section2 />
    <div data-reveal-wrapper>
      <div ref="$revealSection" data-offset="0" style="z-index: -2">
        <section class="section section--nm home-3">
          <div class="container home-3__wrapper">
            <TheVideo class="home-3__content" src="/video/main.mp4" />
          </div>
        </section>
      </div>
    </div>
    <section class="section section--nm home-4">
      <div class="container home-4__wrapper">
        <AboutInfo class="home-4__mob-text">About </AboutInfo>

        <div class="home-4__info-wrapper home-4__info-wrapper--1">
          <p class="home-4__info-text">
            Redefining
            <span class="home-4__arrow-part">
              <span class="home-4__arrow-text">&lt;&gt;</span> brand
              <span class="home-4__arrow-text">&lt;/&gt;</span>
            </span>
            <span class="home-4__text-part">dimensionalities</span>
            <IconsLeftAngleArrow class="home-4__arrow" />
          </p>
        </div>
        <div class="home-4__img-wrapper">
          <TheVideo class="home-4__img" src="/video/1.mp4" />
        </div>
        <div class="home-4__content">
          <AboutInfo class="home-4__about-text">About </AboutInfo>
          <div class="home-4__info-wrapper home-4__info-wrapper--2">
            <p class="home-4__info-text">
              Redefining
              <span class="home-4__arrow-part">
                <span class="home-4__arrow-text">&lt;&gt;</span> brand
                <span class="home-4__arrow-text">&lt;/&gt;</span>
              </span>
              <span class="home-4__text-part">dimensionalities</span>
              <IconsLeftAngleArrow class="home-4__arrow" />
            </p>
          </div>
          <div class="home-4__text-wrapper">
            <p class="home-4__med-desc">
              Operating at the intersection of physical & digital, specialising
              in; <span class="home-4__underline-text">brand</span>,
              <span class="home-4__underline-text">fashion</span>,
              <span class="home-4__underline-text">product</span> &
              <span class="home-4__underline-text">web3</span>.
            </p>
            <p class="home-4__small-desc">
              With deep knowledge broadly spanning design, fashion & web3, we
              help our partners grow through our innate understanding of the
              drivers behind tomorrow’s trends and opportunities.
            </p>
            <div class="home-4__btn-wrapper">
              <TheButton> Studio </TheButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
