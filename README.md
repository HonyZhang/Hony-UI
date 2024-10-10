# Hony ui 组件库

## 简介

Hony ui 是一套基于 Vue 3.x和Vite2.x 的 UI 组件库。

## 安装

```
npm install hony-ui
```

## 快速上手

```
import { createApp } from 'vue'
import App from './App.vue'
import HonyUI from 'hony-ui'

const app = createApp(App)
app.use(HonyUI)
app.mount('#app')
```

## 使用示例

```
<template>
  <div>
    <hony-button>按钮</hony-button>
  </div>
</template>
<script setup lang="ts"></script>
```

