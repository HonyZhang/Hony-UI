<script lang="ts" setup>
import ColorCard from './ColorCard.vue';
import { ref } from 'vue';

defineOptions({ name: 'BrandColorPalette' });

const colors = ref<{ var: string; fontVar: string; desc?: string }[]>([
  {
    var: 'brand-1',
    fontVar: 'neutral-10',
    desc: 'bg-container-active',
  },
  {
    var: 'brand-2',
    fontVar: 'neutral-10',
  },
  {
    var: 'brand-3',
    fontVar: 'neutral-10',
  },
  {
    var: 'brand-4',
    fontVar: 'neutral-10',
    desc: 'disabled',
  },
  {
    var: 'brand-5',
    fontVar: 'neutral-10',
    desc: 'hover',
  },
  {
    var: 'brand-6',
    fontVar: 'neutral-2',
    desc: 'primary',
  },
  {
    var: 'brand-7',
    fontVar: 'neutral-2',
    desc: 'active',
  },
  {
    var: 'brand-8',
    fontVar: 'neutral-2',
  },
  {
    var: 'brand-9',
    fontVar: 'neutral-2',
  },
  {
    var: 'brand-10',
    fontVar: 'neutral-2',
  },
]);
</script>

<template>
  <ColorCard :colors="colors" style="width: 600px"></ColorCard>
</template>
