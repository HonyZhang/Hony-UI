<script lang="ts" setup>
import ColorCard from './ColorCard.vue';

defineOptions({ name: 'IconColorPalette' });

const colors = ref([
  {
    var: 'icon-gray-default',
    desc: '页面中灰色图标的defalut颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'icon-gray-hover',
    desc: '页面中灰色图标的hover颜色，一般配合悬浮背景呈现',
    fontVar: 'text-inverse',
  },
  {
    var: 'icon-gray-active',
    desc: '页面中灰色图标的悬浮active颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'icon-blue-default',
    desc: '页面中蓝色图标的defalut颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'icon-blue-hover',
    desc: '页面中蓝色图标的hover颜色，一般配合悬浮背景呈现',
    fontVar: 'text-inverse',
  },
  {
    var: 'icon-blue-active',
    desc: '页面中蓝色图标的悬浮active颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'icon-inverse',
    desc: '用于在深色背景下的反白图标颜色',
    fontVar: 'text-regular',
  },
]);
</script>

<template>
  <ColorCard :colors="colors" style="width: 600px"></ColorCard>
</template>
