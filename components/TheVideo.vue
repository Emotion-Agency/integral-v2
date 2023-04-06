<script lang="ts" setup>
interface VideoProps {
  src: string
  isWebm?: boolean
}

const props = withDefaults(
  defineProps<VideoProps>(),

  {
    isWebm: true,
  }
)

const webmSrc = computed(() => {
  return props.src.slice(0, -4) + '.webm'
})
</script>

<template>
  <video class="video" autoplay muted loop>
    <source v-if="isWebm" :src="webmSrc" type="video/webm" />
    <source :src="src" type="video/mp4" />
  </video>
</template>
