<template>
  <div :class="$style.userCard">
    <div :class="getUserCardClasslist">
      <AppIcon  :icon="icons.userIcon"
                :size="20"
      />
    </div>
    <div>{{ user.name }}</div>
  </div>
</template>

<script setup>
import { computed, useCssModule } from 'vue';
import { icons } from '@/icons/icons.js';
import AppIcon from '@/components/AppIcon.vue';

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
    props.user.role === 'admin' && $style.userCardRoleAdmin,
    props.user.role === 'editor' && $style.userCardRoleEditor
  ]
})
</script>

<style module>
.userCard {
  background-color: var(--color-white);
  border-radius: 99px 10px 10px 99px;
  padding: 5px;
  color: var(--color-black);
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.userCardRole {
  --user-color-by-role: var(--color-dark-gray-10);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--user-color-by-role);
  color: var(--color-dark-gray);
}
.userCardRoleAdmin {
  --user-color-by-role: var(--color-pink);
  color: var(--color-white);
}
.userCardRoleEditor {
  --user-color-by-role: var(--color-violet);
  color: var(--color-white);
}
</style>