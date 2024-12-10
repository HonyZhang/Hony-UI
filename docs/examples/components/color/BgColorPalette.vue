<script lang="ts" setup>
import ColorCard from './ColorCard.vue';

defineOptions({ name: 'BgColorPalette' });

const colors = ref([
  {
    var: 'bg-base-1',
    desc: '页面中基础打底的背景色，交互时颜色不发生改变',
    fontVar: 'text-regular',
  },
  {
    var: 'bg-base-2',
    desc: '页面中用于放置图层、卡片或控件的主容器纯色背景，交互时颜色不发生改变',
    fontVar: 'text-regular',
  },
  {
    var: 'bg-container-base-1',
    desc: '容器中基础打底的背景色，交互时颜色不发生改变',
    fontVar: 'text-regular',
  },
  {
    var: 'bg-container-base-2',
    desc: '容器中以区分不同层级的模块或内容块，不需要突出的区域，交互时颜色不发生改变',
    fontVar: 'text-regular',
  },
  {
    var: 'bg-container-base-3',
    desc: '容器中以区分不同层级的模块或内容块，需要突出显示层次的内容区域。交互时颜色不发生改变',
    fontVar: 'text-regular',
  },
  {
    var: 'bg-container-default',
    desc: '用于任何需要用户交互默认效果的容器，例如下拉菜单、菜单、表格的默认背景色',
    fontVar: 'text-regular',
  },
  {
    var: 'bg-container-hover',
    desc: '用于任何需要用户交互悬浮效果的容器，例如下拉菜单、菜单、表格的悬浮背景色',
    fontVar: 'text-regular',
  },
  {
    var: 'bg-container-active',
    desc: '用于任何需要用户交互激活的容器，例如菜单、选项卡等',
    fontVar: 'text-regular',
  },
]);
</script>

<template>
  <ColorCard :colors="colors" style="width: 600px"></ColorCard>
</template>
