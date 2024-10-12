<template>
    <div id="app">
<!--        <hony-button-test/>-->
<!--        <hony-input-test/>-->
        <hony-horizontal-scroll-test/>
    </div>
</template>

<script setup lang="ts">

import HonyButtonTest from '@/test/HonyButtonTest.vue'
import HonyHorizontalScrollTest from '@/test/HonyHorizontalScrollTest.vue'
import HonyInputTest from '@/test/HonyInputTest.vue'
</script>

<style>
/* 全局样式 */
html, body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

#app {
    height: 100%;
    width: 100%;
    display: flex;
}

* {
    box-sizing: border-box; /* 确保所有元素的宽高包含内边距和边框 */
}
</style>
