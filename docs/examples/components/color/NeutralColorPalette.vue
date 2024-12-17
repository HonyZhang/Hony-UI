<script lang="ts" setup>
import ColorCard from './ColorCard.vue';
import { ref } from 'vue';

defineOptions({ name: 'NeutralColorPalette' });

const colors = ref([
  {
    var: 'neutral-1',
    fontVar: 'neutral-10',
    desc: 'bg-base-1, bg-container-base-1, bg-container-default, text-inverse',
  },
  {
    var: 'neutral-2',
    fontVar: 'neutral-10',
    desc: 'bg-base-2, bg-container-base-2',
  },
  {
    var: 'neutral-3',
    fontVar: 'neutral-10',
    desc: 'bg-base-3, bg-container-hover',
  },
  {
    var: 'neutral-4',
    fontVar: 'neutral-10',
    desc: 'border-divider',
  },
  {
    var: 'neutral-5',
    fontVar: 'neutral-10',
    desc: 'text-disabled, border-regular',
  },
  {
    var: 'neutral-6',
    fontVar: 'neutral-2',
  },
  {
    var: 'neutral-7',
    fontVar: 'neutral-2',
    desc: 'text-weaker, icon-gray-hover',
  },
  {
    var: 'neutral-8',
    fontVar: 'neutral-2',
    desc: 'text-medium, icon-gray-default',
  },
  {
    var: 'neutral-9',
    fontVar: 'neutral-2',
    desc: 'text-regular, icon-gray-active',
  },
  {
    var: 'neutral-10',
    fontVar: 'neutral-2',
    desc: 'text-strong',
  },
  {
    var: 'neutral-11',
    fontVar: 'neutral-2',
  },
]);
</script>

<template>
  <ColorCard :colors="colors" style="width: 600px"></ColorCard>
</template>
