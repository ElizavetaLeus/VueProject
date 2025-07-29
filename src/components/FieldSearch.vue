<template>
    <input 
        type="text"
        :value="value"
        :placeholder="placeholder"
        :class="$style.filterInput"
        @input="handlerInput($event)"
    />
</template>

<script setup>

const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    value: {
        type: String,
        default: "",
    },

})

const emits = defineEmits(['input'])

const handlerInput = (event)=>{
 emits('input', event.target.value)
}

</script>

<style module>
.filterInput {
    height: 100%;
    padding: 13px 15px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 14px;
}
</style>