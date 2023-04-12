<script setup lang="ts">
interface iProps {
  open: boolean
}
defineProps<iProps>()
const emit = defineEmits(['close'])

const nav = [
  {
    link: '#about',
    text: 'About',
  },
  {
    link: '#studio',
    text: 'Studio',
  },
  {
    link: '#services',
    text: 'Services',
  },
  {
    link: '#approach',
    text: 'Approach',
  },
  {
    link: '#contact',
    text: 'Contact',
  },
]
</script>

<template>
  <div class="popup" :class="open && 'popup--opened'">
    <div class="popup-backdrop" @click="emit('close')"></div>
    <div class="popup__wrapper">
      <ul class="popup__nav-menu">
        <li
          v-for="(elem, idx) in nav"
          :key="idx"
          class="popup__nav"
          @click="emit('close')"
        >
          <NuxtLink :to="elem.link">{{ elem.text }}</NuxtLink>
        </li>
      </ul>
      <ul class="popup__socials-menu">
        <li class="popup__social">
          <a
            href="/"
            class="popup__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Email
          </a>
        </li>
        <li class="popup__social">
          <a
            href="/"
            class="popup__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li class="popup__social">
          <a
            href="/"
            class="popup__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li class="popup__social">
          <a
            href="/"
            class="popup__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
