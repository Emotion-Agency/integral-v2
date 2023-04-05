<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})
</script>

<template>
  <section class="section section--nm home-1">
    <video class="home-1__bg" autoplay muted loop>
      <source src="/images/main.webm" type="video/webm" />
    </video>
    <div class="container home-1__wrapper">
      <h1 class="home-1__title">
        A multidisciplinary creative consultancy shaping
        <span class="home-1__underline-text"> digital culture </span>
      </h1>
    </div>
  </section>
  <section class="section section--nm home-2">
    <div class="container home-2__wrapper">
      <AboutInfo class="home-2__about-text"
        >Empowering brands at the forefront of digital
      </AboutInfo>
      <div class="home-2__text-wrapper">
        <p class="home-2__text home-2__text--active">
          Integral is a multi-disciplinary design studio, catalysing insights
          with technology to build thoughtful
          <span class="home-2__underline-text">design-led solutions</span> for
          dynamic global clients.
        </p>
        <p class="home-2__text">
          Spanning strategy, creative direction and production, we deliver
          innovative and engaging experiences that
          <span class="home-2__underline-text"
            >connect brands with their audiences.</span
          >
        </p>
      </div>
      <div class="home-2__pages-wrapper">
        <p class="home-2__numbers"><span class="home-2__number">1</span> / 2</p>
      </div>
    </div>
  </section>
  <section class="section section--nm home-3">
    <div class="container home-3__wrapper">
      <img class="home-3__content" src="/images/3.jpg" alt="Content" />
    </div>
  </section>
  <section class="section section--nm home-4">
    <div class="container home-4__wrapper">
      <AboutInfo class="home-4__mob-text">About </AboutInfo>
      <div class="home-4__img-wrapper">
        <video class="home-4__img" autoplay muted loop>
          <source src="/images/1.webm" type="video/webm" />
        </video>
      </div>
      <div class="home-4__content">
        <AboutInfo class="home-4__about-text">About </AboutInfo>
        <div class="home-4__info-wrapper">
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
            With deep knowledge broadly spanning design, fashion & web3, we help
            our partners grow through our innate understanding of the drivers
            behind tomorrow’s trends and opportunities.
          </p>
          <div class="home-4__btn-wrapper">
            <TheButton> Studio </TheButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
