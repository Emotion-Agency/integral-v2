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
</template>
