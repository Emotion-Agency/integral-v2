<script lang="ts" setup>
const navLinks = [
  {
    textLink: 'About',
    link: '/',
  },
  {
    textLink: 'Studio',
    link: '/',
  },
  {
    textLink: 'Services',
    link: '/',
  },
  {
    textLink: 'Approach',
    link: '/',
  },
  {
    textLink: 'Contact',
    link: '/',
  },
  {
    textLink: 'Let’s Talk ',
    link: '/',
  },
]

const socialLinks = [
  {
    socialText: 'Instagram',
    link: '/',
  },
  {
    socialText: 'LinkedIn',
    link: '/',
  },
  {
    socialText: 'Twitter',
    link: '/',
  },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <div class="footer__email">
        <h3 class="footer__title">
          Let’s talk
          <span class="footer__arrow">
            <IconsAngleArrow />
          </span>
        </h3>
        <TheButton class="footer__btn">info@integral.im</TheButton>
      </div>
      <div class="grid footer__content-wrapper">
        <div class="footer__date-wrapper">
          <p class="footer__date">
            © Integral 2018 ⸺ 2023 All Rights Reserved.
          </p>
        </div>
        <ul class="grid footer__nav-list">
          <li v-for="(el, idx) in navLinks" :key="idx" class="footer__li">
            <NuxtLink class="footer__nav-link" :to="el.link">
              {{ el.textLink }}
            </NuxtLink>
          </li>
        </ul>
        <ul class="grid footer__social-list">
          <li
            v-for="(el, idx) in socialLinks"
            :key="idx"
            class="footer__social-li"
          >
            <a
              :href="el.link"
              class="footer__social-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {{ el.socialText }}
            </a>
          </li>
          <p class="footer__details">Beauty lies in the details</p>
        </ul>
      </div>
    </div>
  </footer>
</template>
