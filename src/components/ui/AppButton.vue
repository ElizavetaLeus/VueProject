<template>
  <button 
    :class="classList"
    @click="clickListener()"
    :type="type"
    :isActive="isActive"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { computed, useCssModule } from 'vue';

const emits = defineEmits(['click'])
const $style = useCssModule();
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'blue',
  },
  text: {
    type: String,
    requered: true,
  }
})

const classList = computed(() => {
  return [
    $style.button,
    props.isActive && $style.buttonActive,
    props.type === 'pink' && $style.buttonPink,
    props.type === 'violet' && $style.buttonViolet
  ]
})
const clickListener = () => {
  emits('click');
}
</script>

<style module>
/* основная кнопка */
.button {
  --color-button: var(--color-blue);
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-button);
  background-color: transparent;
  color: var(--color-button);
  padding: 13px 20px;
  border-radius: 99px;
  cursor: pointer;
  transition: 0.3s;
}
.button:hover {
  opacity: 90%;
}
/* розовая кнопка */
.buttonPink {
  --color-button: var( --color-pink);
}
.buttonPink:hover {
  opacity: 90%;
}
/* фиолетовая кнопка */
.buttonViolet {
  --color-button: var( --color-violet);
}
.buttonActive {
  background-color: var(--color-button);
  color: var(--color-white);
}
</style>