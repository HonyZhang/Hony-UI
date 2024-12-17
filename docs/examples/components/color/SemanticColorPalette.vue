<script lang="ts" setup>
import ColorCard from './ColorCard.vue';
import { ref } from 'vue';

defineOptions({ name: 'SemanticColorPalette' });

const successColors = ref<{ var: string; fontVar: string; desc?: string }[]>([
  {
    var: 'success-1',
    fontVar: 'neutral-10',
  },
  {
    var: 'success-2',
    fontVar: 'neutral-10',
  },
  {
    var: 'success-3',
    fontVar: 'neutral-10',
  },
  {
    var: 'success-4',
    fontVar: 'neutral-10',
  },
  {
    var: 'success-5',
    fontVar: 'neutral-10',
    desc: 'hover',
  },
  {
    var: 'success-6',
    fontVar: 'neutral-2',
    desc: 'primary',
  },
  {
    var: 'success-7',
    fontVar: 'neutral-2',
    desc: 'active',
  },
  {
    var: 'success-8',
    fontVar: 'neutral-2',
  },
  {
    var: 'success-9',
    fontVar: 'neutral-2',
  },
  {
    var: 'success-10',
    fontVar: 'neutral-2',
  },
]);

const warningColors = ref<{ var: string; fontVar: string; desc?: string }[]>([
  {
    var: 'warning-1',
    fontVar: 'neutral-10',
  },
  {
    var: 'warning-2',
    fontVar: 'neutral-10',
  },
  {
    var: 'warning-3',
    fontVar: 'neutral-10',
  },
  {
    var: 'warning-4',
    fontVar: 'neutral-10',
  },
  {
    var: 'warning-5',
    fontVar: 'neutral-10',
    desc: 'hover',
  },
  {
    var: 'warning-6',
    fontVar: 'neutral-2',
    desc: 'primary',
  },
  {
    var: 'warning-7',
    fontVar: 'neutral-2',
    desc: 'active',
  },
  {
    var: 'warning-8',
    fontVar: 'neutral-2',
  },
  {
    var: 'warning-9',
    fontVar: 'neutral-2',
  },
  {
    var: 'warning-10',
    fontVar: 'neutral-2',
  },
]);

const dangerColors = ref<{ var: string; fontVar: string; desc?: string }[]>([
  {
    var: 'danger-1',
    fontVar: 'neutral-10',
  },
  {
    var: 'danger-2',
    fontVar: 'neutral-10',
  },
  {
    var: 'danger-3',
    fontVar: 'neutral-10',
  },
  {
    var: 'danger-4',
    fontVar: 'neutral-10',
  },
  {
    var: 'danger-5',
    fontVar: 'neutral-10',
    desc: 'hover',
  },
  {
    var: 'danger-6',
    fontVar: 'neutral-2',
    desc: 'primary',
  },
  {
    var: 'danger-7',
    fontVar: 'neutral-2',
    desc: 'active',
  },
  {
    var: 'danger-8',
    fontVar: 'neutral-2',
  },
  {
    var: 'danger-9',
    fontVar: 'neutral-2',
  },
  {
    var: 'danger-10',
    fontVar: 'neutral-2',
  },
]);
</script>

<template>
  <div class="semantic-color-palette">
    <ColorCard :colors="successColors" style="width: 600px"></ColorCard>
    <ColorCard :colors="warningColors" style="width: 600px"></ColorCard>
    <ColorCard :colors="dangerColors" style="width: 600px"></ColorCard>
  </div>
</template>

<style>
.semantic-color-palette {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
