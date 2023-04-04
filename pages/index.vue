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
  <section class="section home-2">
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
</template>
