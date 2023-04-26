<script setup lang="ts">
const isOpened = ref(false)

const onClick = () => {
  isOpened.value = !isOpened.value
}

watch(isOpened, () => {
  if (isOpened.value) {
    window.ss.isFixed = true
  } else {
    window.ss.isFixed = false
  }
})

let navbarPos

const $header = ref<HTMLElement>()

onMounted(async () => {
  const { default: NavbarPos } = await import(
    '~/assets/scripts/utils/navbarPos'
  )
  navbarPos = new NavbarPos($header.value)
  navbarPos.init()
})

onBeforeUnmount(() => {
  navbarPos && navbarPos.destroy()
})
</script>

<template>
  <header ref="$header" class="header navbar">
    <div class="header__bg"></div>
    <div class="container header__wrapper">
      <NuxtLink to="/" class="header__logo">Integral</NuxtLink>
      <button class="header__btn" @click="onClick">
        {{ !isOpened ? 'Menu' : 'Close' }}
      </button>
    </div>
  </header>
  <PopupMenu :open="isOpened" @close="isOpened = false" />
</template>
