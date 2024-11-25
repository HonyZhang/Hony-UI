<template>
  <button class="hony-button">{{ text }}</button>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'HonyButton' });
const text = ref('Click me');
</script>
