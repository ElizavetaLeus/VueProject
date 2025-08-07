<template>
  <div class="container">
    <h1 :class="$style.title">Пользователи</h1>
    <div>
      <FilterUsers 
        :class="$style.filterUsers"
        :inputValue="filters.query" 
        @filterUsers="setFilter($event)" 
      />
      <div :class="$style.userList">
        <UserCard
          v-for="user in userList"
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

const setFilter = (params) => {
  if (params.type === 'setInputValue') {
    filters.value.query = params.value;
  }
  if (params.type === 'setUserRole') {
    filters.value.role = params.value;
  }
}

const userList = computed(() => {
  return userListDefault.filter((user) => {
    const hasUserRoleOrAll = user.role === filters.value.role || filters.value.role === 'all';
    const hasUserNameQuery = user.name.toLowerCase().includes(filters.value.query.toLowerCase());
    return hasUserRoleOrAll && hasUserNameQuery;
  })
})


</script>

<style module>
.title {
  margin-top: 74px;
  font-size: 26px;
  font-weight: 400;
}
.filterUsers {
  margin-top: 40px;
}
.userList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 30px;
}

</style>
