<script setup lang="ts"></script>

<template>
  <button class="button">
    <span class="button__arrow">
      <IconsRightArrow />
    </span>
    <span class="button__text">
      <slot />
    </span>
    <span class="button__arrow">
      <IconsRightArrow />
    </span>
  </button>
</template>
