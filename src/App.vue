<template>
  <div class="container">
    <h1 :class="$style.title">Пользователи</h1>
    <div :class="$style.filters">
      <FieldSearch 
        :value="inputValue"
        placeholder="Поиск"
        @input="printValue($event)"
        :class="$style.fieldSearch"
      />
      <button @click="getValueByClick()"> Click </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FieldSearch from '@/components/FieldSearch.vue';

const UserList = [
  { id: 1001, name: 'Пользователь 1', role: 'user' },
  { id: 1002, name: 'Пользователь 2', role: 'admin' },
  { id: 1003, name: 'Пользователь 3', role: 'admin' },
  { id: 1004, name: 'Пользователь 4', role: 'editor' },
  { id: 1005, name: 'Пользователь 5', role: 'user' },
  { id: 1006, name: 'Пользователь 6', role: 'user' }
];
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
.fieldSearch {
  max-width: 266px;
  margin-inline-end: 4px;
}
</style>
