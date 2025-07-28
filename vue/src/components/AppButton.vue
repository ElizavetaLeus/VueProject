<template>
<button 
:class="getClassList()"
>
{{ text }}
</button>
</template>

<script setup>
import { useCssModule } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    }
})

const $style = useCssModule();

const getClassList = () => {
    return [
        $style.button,
        props.isDisabled && $style.buttonDisabled
    ]
}
</script>

<style module>

 .button {
    --color-button: rgb(200, 166, 231);
    --color-violet: rgb(150, 62, 227);
    --color-black: black;
    padding: 10px 20px;
    background-color: var(--color-button);
    color: var(--color-black);
    border: 1px var(--color-violet) solid;
    margin-inline-end: 10px;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.buttonDisabled {
    --base-color-gray: 176, 174, 177;
    --color-gray-90: rgba(var(--base-color-gray), 0.9);
    --color-dark-gray: rgb(99, 99, 100);
    background-color: var(--color-gray-90);
    border-color: var(--color-dark-gray);
    cursor: not-allowed;
}
</style>