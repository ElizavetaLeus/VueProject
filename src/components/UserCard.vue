<template>
  <div :class="$style.userCard">
    <div :class="getUserCardClasslist">
      <AppIcon :icon="icons.userIcon" />
    </div>
    <div>{{ user.name }}</div>
  </div>
</template>

<script setup>
import { computed, useCssModule } from 'vue';
import AppIcons from './AppIcon.vue';
import { icons } from '@/icons/icons.js';
import AppIcon from './AppIcon.vue';

const $style = useCssModule();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  }
})

const getUserCardClasslist = computed(() => {
  return [
    $style.userCardRole,
    user.role === 'admin' && $style.userCardRoleAdmin,
    user.role === 'editor' && $style.userCardRoleEditor
  ]
})
</script>

<style module>
.userCard {
  background-color: var(--color-white);
  border-radius: 99px 10px 99px 10px;
  padding: 5px;
  color: var(--color-black);
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userCardRole {
  --user-color-by-role: var(--color-dark-gray-10);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--user-color-by-role);
  color: var(--color-dark-gray);
}
.userCardRoleAdmin {
  --user-color-by-role: var(--color-pink);
  color: var(--color-white);
}
.userCardRoleEditor {
  --user-color-by-role: var(--color-violet);
}
</style>