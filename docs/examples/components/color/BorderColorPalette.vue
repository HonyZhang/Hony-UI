<script lang="ts" setup>
import ColorCard from './ColorCard.vue';

defineOptions({ name: 'BorderColorPalette' });

const colors = ref([
  {
    var: 'border-regular',
    desc: '用于页面、组件最广泛使用的边框色',
    fontVar: 'text-regular',
  },
  {
    var: 'border-divider',
    desc: '用于页面中的分隔线条的颜色',
    fontVar: 'text-regular',
  },
]);
</script>

<template>
  <ColorCard :colors="colors" style="width: 600px"></ColorCard>
</template>
