<script lang="ts" setup>
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
  <section id="services" class="section section--nm home-6">
    <div class="container home-6__wrapper">
      <AboutInfo>Services </AboutInfo>
      <div class="grid home-6__info-wrapper">
        <div
          v-for="(el, idx) in services"
          :key="idx"
          class="home-6__info"
          :class="idx === 0 && 'home-6__info--active'"
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
</template>
