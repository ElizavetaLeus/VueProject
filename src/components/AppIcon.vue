<template>
  <div
    :class="$style.icon"
    v-html="icons.userIcon"
  >
  </div>
</template>

<script setup>
import { icons } from '@/icons/icons.js';

// defineProps({
//   icon: {
//     type: String,
//     required: true,
//   }
// })
</script>

<style module>
.icons {
  --size: 20px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>