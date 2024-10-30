<template>
    <div>
        <label for="hony-input">{{ label }}</label>
        <input type="text" id="hony-input" v-model="value">
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

defineOptions({name: 'HonyInput'})

const label = ref('Hony Input')
const value = ref('')
</script>