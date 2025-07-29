<template>
  <div class="container">
    <h1 :class="$style.title">Пользователи</h1>
    <div :class="$style.filters">
      <FieldSearch 
        :value="inputValue"
        placeholder="Поиск"
        @input="printValue($event)"
      />
      <button @click="getValueByClick()"> Click </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FieldSearch from '@/components/FieldSearch.vue';

const inputValue = ref('');

const printValue = (value)=>{
  inputValue.value =value;
}
const getValueByClick = () => {
  console.log(inputValue.value);
  
}
</script>

<style module>
.title {
  margin-top: 74px;
  font-size: 26px;
  font-weight: 400;
}
.filters{
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}
</style>
