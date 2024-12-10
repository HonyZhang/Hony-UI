<script lang="ts" setup>
import ColorCard from './ColorCard.vue';

defineOptions({ name: 'TextColorPalette' });

const colors = ref([
  {
    var: 'text-strong',
    desc: '用于如标题要突出强调的加深色',
    fontVar: 'text-inverse',
  },
  {
    var: 'text-regular',
    desc: '用于默认常规正文字体色',
    fontVar: 'text-inverse',
  },
  { var: 'text-medium', desc: '用于次常规正文字体色', fontVar: 'text-inverse' },
  {
    var: 'text-weaker',
    desc: '用于提示、辅助等文字颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'text-disabled',
    desc: '用于所有Disabled状态下的文字颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'text-inverse',
    desc: '用于在深色背景下的反白文字颜色',
    fontVar: 'text-regular',
  },
]);
</script>

<template>
  <ColorCard :colors="colors" style="width: 600px"></ColorCard>
</template>
