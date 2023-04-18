<script lang="ts" setup>
const infoText = [
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
  <section class="section section--nm home-7">
    <div class="container grid home-7__wrapper">
      <AboutInfo class="home-7__about-text">Approach </AboutInfo>
      <div class="home-7__content">
        <div
          v-for="(el, idx) in infoText"
          :key="idx"
          class="home-7__info-wrapper"
          :class="idx === 0 && 'home-7__info-wrapper--active'"
        >
          <div class="home-7__text-list">
            <p class="home-7__title">{{ el.title }}</p>
            <p class="home-7__med-desc">
              {{ el.mediumText }}
            </p>
            <p class="home-7__small-desc">
              {{ el.smallText }}
            </p>
          </div>
        </div>
        <div class="home-7__btn-wrapper">
          <TheButton> Learn More </TheButton>
        </div>
        <div class="home-7__pages-wrapper">
          <p class="home-7__numbers">
            <span class="home-7__number">1 </span>/
            <span class="home-7__number">3</span>
          </p>
        </div>
      </div>
      <div class="home-7__img-wrapper">
        <TheVideo class="home-7__img" src="/video/6.mp4" />
      </div>
      <div class="home-7__btn-mob">
        <TheButton> Learn More </TheButton>
      </div>
    </div>
  </section>
</template>
