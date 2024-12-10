<script lang="ts" setup>
import ColorCard from './ColorCard.vue';

defineOptions({ name: 'SemanticColorPalette' });

const successColors = ref([
  {
    var: 'success-default',
    desc: '页面中表示成功的背景颜色、链接字体default颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'success-hover',
    desc: '页面中表示成功的背景颜色、链接字体hover颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'success-active',
    desc: '页面中表示成功的背景颜色、链接字体active颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'success-disabled',
    desc: '页面中表示成功的背景颜色、链接字体disabled颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'success-light',
    desc: '页面中次级表示成功的着色、toast、info、tag等背景填充色',
    fontVar: 'text-regular',
  },
]);

const warningColors = ref([
  {
    var: 'warning-default',
    desc: '页面中表示警示的背景颜色、链接字体default颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'warning-hover',
    desc: '页面中表示警示的背景颜色、链接字体hover颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'warning-active',
    desc: '页面中表示警示的背景颜色、链接字体active颜色',
    fontVar: 'text-inverse',
  },
  {
    var: 'warning-disabled',
    desc: '页面中表示警示的背景颜色、链接字体disabled颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'warning-light',
    desc: '页面中次级表示警示的着色、toast、info、tag等背景填充色',
    fontVar: 'text-regular',
  },
]);

const dangerColors = ref([
  {
    var: 'danger-default',
    desc: '页面中表示危险、失败的背景颜色、链接字体default颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'danger-hover',
    desc: '页面中表示危险、失败的背景颜色、链接字体hover颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'danger-active',
    desc: '页面中表示危险、失败的背景颜色、链接字体active颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'danger-disabled',
    desc: '页面中表示危险、失败的背景颜色、链接字体disabled颜色',
    fontVar: 'text-regular',
  },
  {
    var: 'danger-light',
    desc: '页面中次级表示危险、失败的着色、toast、info、tag等背景填充色',
    fontVar: 'text-regular',
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
