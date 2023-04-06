<script setup lang="ts">
const isOpened = ref(false)

const onClick = () => {
  isOpened.value = !isOpened.value
}

let navbarPos

onMounted(async () => {
  const { default: NavbarPos } = await import(
    '~/assets/scripts/utils/navbarPos'
  )
  navbarPos = new NavbarPos()
  navbarPos.init()
})

onBeforeUnmount(() => {
  navbarPos && navbarPos.destroy()
})
</script>

<template>
  <header class="header navbar">
    <div class="container header__wrapper">
      <NuxtLink to="/" class="header__logo">Integral</NuxtLink>
      <button class="header__btn" @click="onClick">
        {{ !isOpened ? 'Menu' : 'Close' }}
      </button>
    </div>
  </header>
  <PopupMenu :open="isOpened" @close="isOpened = false" />
</template>
