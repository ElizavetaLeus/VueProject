<template>
  <div
    :class="$style.icon"
    v-html="icon"
  >
  </div>
</template>

<script setup>
// import { icons } from '@/icons/icons.js';

defineProps({
  icon: {
    type: String,
    required: true,
  }
})
</script>

<style module>
.icon {
  --size: 20px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon svg {
  width: var(--size);
  height: var(--size);
}
</style>