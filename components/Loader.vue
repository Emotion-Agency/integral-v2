<script lang="ts" setup>
import { raf } from '@emotionagency/utils'

const loaded = ref(0)

onMounted(() => {
  const sequences = document.querySelectorAll('[data-loaded]')

  const watchProgress = () => {
    sequences.forEach((s: HTMLElement) => {
      loaded.value =
        Math.floor(+s.dataset.loaded / sequences.length) * sequences.length
    })

    if (loaded.value >= 100) {
      raf.off(watchProgress)
    }
  }

  raf.on(watchProgress)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="loaded < 100" class="e-loader">
      <span class="e-loader__percent">{{ loaded }}%</span>
    </div>
  </Transition>
</template>
