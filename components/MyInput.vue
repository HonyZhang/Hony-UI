<template>
  <div>
    <label for="my-input">{{ label }}</label>
    <input type="text" id="my-input" v-model="value">
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineOptions({name: 'MyInput'})

const label = ref('My Input')
const value = ref('')
</script>