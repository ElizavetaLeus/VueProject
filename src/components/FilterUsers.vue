<template>
  <div :class="$style.filters">
    <div :class="$style.buttonList">
        <AppButton
          v-for="button in buttonList"
          :key="button.id"
          :text="button.text"
          :type="button.type"
          :isActive="button.isActive"
          :role="button.role"
          @click="changeActiveButton(button.role)"
        />
    </div>
    <AppInputText 
        :class="$style.fieldSearch"
        :value="inputValue"
        placeholder="Поиск"
        @input="setInputValue($event)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppInputText from '@/components/ui/AppInputText.vue';

const props = defineProps({
  inputValue: {
    type: String,
    required: true,
  }
})
const buttonList = ref([
  { id:11, text: 'Все пользователи', isActive: true, type: 'blue', role: 'all' },
  { id:12, text: 'Админы', isActive: false, type: 'pink', role: 'admin' },
  { id:12, text: 'Редакторы', isActive: false, type: 'violet', role: 'editor' }
])
const emits = defineEmits(['setInputValue', 'setUserRole']);

const setInputValue = (value) => {
  emits('setInputValue', value);
}
const changeActiveButton = (role) => {
  buttonList.value = buttonList.value.map((button) => {
    button.isActive = false;
    if (button.role === role) {
      button.isActive = true;
    }
    return button;
  })
  emits('setUserRole', role)
}
</script>

<style module>
.filters {
  display: flex;
  justify-content: space-between;
}
.buttonList {
  display: flex;
  gap: 20px;
}
.fieldSearch {
  max-width: 266px;
}
</style>