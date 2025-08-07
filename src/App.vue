<template>
  <div class="container">
    <h1 :class="$style.title">Пользователи</h1>
    <div>
      <FilterUsers 
        :inputValue="inputValue" 
        @setInputValue="setInputValue($event)" 
        @setUserRole="setUserRole($event)"
      />
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FilterUsers from '@/components/FilterUsers.vue';

const userList = [
  { id: 1001, name: 'Пользователь 1', role: 'user' },
  { id: 1002, name: 'Пользователь 2', role: 'admin' },
  { id: 1003, name: 'Пользователь 3', role: 'admin' },
  { id: 1004, name: 'Пользователь 4', role: 'editor' },
  { id: 1005, name: 'Пользователь 5', role: 'user' },
  { id: 1006, name: 'Пользователь 6', role: 'user' }
];
const inputValue = ref('');
const userRole = ref('all')

const setUserRole = (role) => {
  userRole.value = role;
  const newUserList = userList.filter((user) => {
    if (role === 'all') {
      return true;
    }
    return user.role === role;
  })
  console.log(newUserList);
  
}
const setInputValue = (value) => {
  inputValue.value = value;
  const newUserList = userList.filter(user => {
    const userName = user.name.toLocaleLowerCase();

    return userName.includes(inputValue.value.toLocaleLowerCase());
  })
  console.log(newUserList);
}


</script>

<style module>
.title {
  margin-top: 74px;
  font-size: 26px;
  font-weight: 400;
}

</style>
