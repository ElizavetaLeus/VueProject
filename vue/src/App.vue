<template>
  <div>
    <div>
      <span>Counter:</span>
      <span>{{ count }}</span>
    </div>
    <AppButton 
      text="Click +"
      @click="increaseValue()"
    />
    <AppButton 
      text="Click -"
      @click="decreaseValue()"
      :isDisabled="count <=0"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from './components/AppButton.vue';

const count = ref(10);

const increaseValue = () => {
  count.value += 1;
};
const decreaseValue = () => {
  if (count.value > 0) {
    count.value -=1;
  }
};
</script>

<style module>

</style>
