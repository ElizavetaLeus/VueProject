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
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6667 18V16.3333C15.6667 15.4493 15.3155 14.6014 14.6904 13.9763C14.0652 13.3512 13.2174 13 12.3333 13H7.33333C6.44928 13 5.60143 13.3512 4.97631 13.9763C4.35119 14.6014 4 15.4493 4 16.3333V18" stroke="#8394A7" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.83333 9.66667C11.6743 9.66667 13.1667 8.17428 13.1667 6.33333C13.1667 4.49238 11.6743 3 9.83333 3C7.99238 3 6.5 4.49238 6.5 6.33333C6.5 8.17428 7.99238 9.66667 9.83333 9.66667Z" stroke="#8394A7" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
