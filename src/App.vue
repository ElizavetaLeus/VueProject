<template>
  <div class="container">
    <h1 :class="$style.title">Пользователи</h1>
    <div>
      <FilterUsers 
        :inputValue="filters.query" 
        @filterUsers="filterUsers($event)" 
      />
      <div :class="$style.userList">
        <UserCard
          v-for="user in userListDefault"
          :key="user.id"
          :user="user" 
        />
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import FilterUsers from '@/components/FilterUsers.vue';
import UserCard from '@/components/UserCard.vue';

const userListDefault = [
  { id: 1001, name: 'Ваня', role: 'user' },
  { id: 1002, name: 'Ваня', role: 'admin' },
  { id: 1003, name: 'Петя', role: 'admin' },
  { id: 1004, name: 'Евкакий', role: 'editor' },
  { id: 1005, name: 'Пупа', role: 'user' },
  { id: 1006, name: 'Лупа', role: 'user' }
];

const filters = ref({
  query: '',
  role: 'all',
})

const changeFilters = (params) => {
  if (params.type === 'setInputValue') {
    filters.value.role = params.value;
  }
  if (params.type === 'setUserRole') {
    filters.value.query = params.value;
  }
}
const filterUsers = (params) => {
  changeFilters(params);
  userListDefault.filter((user) => {
    const userName = user.name.toLocaleLowerCase();
    return user.role === filters.value.role || user.role === 'all' 
    && userName.includes(filters.value.query.toLocaleLowerCase());
  })
  
  // computed?
  // const filterUsers = computed(() => { 
  //   changeFilters();
  //   return userListDefault.filter((user) => {
  //     user.role === filters.value.role || user.role === 'all' 
  //     && user.name.toLocaleLowerCase().includes(filters.value.query.toLocaleLowerCase());
  //   })
  // })


  // if (params.type === 'setInputValue') {
  //   userListDefault.filter((user) => {
  //     return user.role === filters.value.role || user.role === 'all';
  //   })
  // }
  // if (params.type === 'setUserRole') {
  //   userListDefault.filter(user => {
  //     // const userName = user.name.toLocaleLowerCase();

  //     return userName.includes(filters.value.query.toLocaleLowerCase());
  //   })
  // }
}

// const filterUsersByRole = (params) => {
//   filters.value.role = params.value;
//   const newUserList = userListDefault.filter((user) => {
//     return user.role === filters.value.role || user.role === 'all';
//   })
//   console.log(newUserList);
  
// }
// const FilterUsersByText = (params) => {
//   filters.value.query = params.value;
//   const newUserList = userListDefault.filter(user => {
//     const userName = user.name.toLocaleLowerCase();

//     return userName.includes(filters.value.query.toLocaleLowerCase());
//   })
// }


</script>

<style module>
.title {
  margin-top: 74px;
  font-size: 26px;
  font-weight: 400;
}
.userList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 30px;
}

</style>
