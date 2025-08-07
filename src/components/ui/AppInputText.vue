<template>
  <input 
    type="text"
    :value="value"
    :class="$style.filterInput"
    :placeholder="placeholder"
    @input="handlerInput($event)"
  />
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['input'])

const handlerInput = (event)=>{
  emits('input', event.target.value)
}
</script>

<style module>
.filterInput {
  width: 100%;
  max-height: 40px;
  padding: 13px 15px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 14px;
}
</style>