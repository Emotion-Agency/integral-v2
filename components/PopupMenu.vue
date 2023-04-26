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

const onClick = (e: MouseEvent) => {
  const clicked = e.currentTarget as HTMLElement
  const href = clicked.getAttribute('href').replace('/', '')

  const target = document.querySelector(href)

  if (!target) {
    return
  }

  const targetTop = target.getBoundingClientRect().top
  const targetHeight = target.getBoundingClientRect().height
  const windowHeight = window.innerHeight

  const scrollTo = targetTop - windowHeight / 2 + targetHeight / 2

  window.ss.state.target = window.ss.state.scrolled + scrollTo
}
</script>

<template>
  <div class="popup" :class="open && 'popup--opened'">
    <div class="popup-backdrop" @click="emit('close')"></div>
    <div class="popup__wrapper">
      <ul class="popup__nav-menu">
        <li
          v-for="(elem, idx) in nav"
          :key="idx"
          class="popup__nav-el"
          @click="emit('close')"
        >
          <a :href="elem.link" @click.prevent="onClick">{{ elem.text }}</a>
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
