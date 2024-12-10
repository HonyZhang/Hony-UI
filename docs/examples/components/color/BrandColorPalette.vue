<script lang="ts" setup>
import ColorCard from './ColorCard.vue';

defineOptions({ name: 'BrandColorPalette' });

const colors = ref([
  {
    var: 'primary',
    desc: '主按钮背景色、边框色、链接字体颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'primary-hover',
    desc: '主按钮背景、边框色、链接字体的Hover颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'primary-active',
    desc: '主按钮背景、边框色、链接字体的激活颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'primary-disabled',
    desc: '主按钮背景、边框色、链接字体的禁用颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'primary-light',
    desc: '次级品牌着色，按钮、tag等背景填充色',
    fontVar: 'text-regular',
  },
]);
</script>

<template>
  <ColorCard :colors="colors" style="width: 600px"></ColorCard>
</template>
