<template>
    <button class="hony-button">{{ text }}</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineOptions({name: 'HonyButton'})
const text = ref('Click me')
</script>
<style scoped>
.hony-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>