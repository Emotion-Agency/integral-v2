<script lang="ts" setup>
const links = [
  {
    textLink: 'Astrid Andersen',
    href: 'https://astridandersen.com/',
  },
  {
    textLink: 'Aura',
    href: 'https://aura.brightid.org/',
  },
  {
    textLink: 'BrightID',
    href: 'https://www.brightid.org/',
  },
  {
    textLink: 'Carteblock',
    href: 'https://www.carteblock.com/',
  },
  {
    textLink: 'Connext',
    href: 'https://www.connext.network/',
  },
  {
    textLink: 'Emotion',
    href: 'https://www.emotion-agency.com/',
  },
  {
    textLink: 'Gitcoin',
    href: 'https://www.gitcoin.co/',
  },
  {
    textLink: 'Gnosis',
    href: 'https://www.gnosis.io/',
  },
  {
    textLink: 'InsureDAO',
    href: 'https://www.insuredao.fi/',
  },
  {
    textLink: 'OSAZ',
    href: 'https://www.osaz.xyz/',
  },
  {
    textLink: 'Raid Guild',
    href: 'https://www.raidguild.org/',
  },
  {
    textLink: 'SISU',
    href: 'https://sisu.network/',
  },
  {
    textLink: 'Thirdwork',
    href: 'https://www.thirdwork.xyz/ ',
  },
]
</script>

<template>
  <section class="section section--nm home-8">
    <div class="container home-8__wrapper">
      <AboutInfo>Trusted By </AboutInfo>
      <ul class="home-8__links-wrapper">
        <li v-for="(link, idx) in links" :key="idx" class="home-8__item">
          <a
            :href="link.href"
            class="home-8__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ link.textLink }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
