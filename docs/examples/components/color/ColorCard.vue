<template>
  <div class="color-card">
    <div
      v-for="(color, index) in colors"
      :key="index"
      class="color-card__item"
      :style="{
        backgroundColor: `var(--hony-color-${color.var})`,
        color: `var(--hony-color-${color.fontVar})`,
      }"
      @mouseover="showValue = true"
      @mouseleave="showValue = false"
      @click="copyColor(color.var)"
    >
      <div class="color-card__var">
        <div class="color-card__var-name">
          {{ color.var }}
        </div>
        <div class="color-card__var-desc">
          {{ color.desc }}
        </div>
        <div v-if="showValue" class="color-card__var-value">
          {{ useCssVar(`--hony-color-${color.var}`) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCssVar } from '@vueuse/core';
import { useCopyColor } from '../../../utils/colors';

defineOptions({ name: 'ColorCard' });

// 接收外部传入的颜色列表
defineProps<{
  colors: { var: string; desc?: string; fontVar: string }[];
}>();

// 控制是否显示颜色值
const showValue = ref(false);

const { copyColor } = useCopyColor();
</script>

<style scoped lang="scss">
.color-card {
  display: flex;
  flex-direction: column;

  :first-child {
    border-radius: 4px 4px 0 0;
  }

  :last-child {
    border-radius: 0 0 4px 4px;
  }

  &__item {
    width: 100%;
    height: 40px;
    position: relative;
    cursor: pointer;
    transition: width 0.3s ease;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 14px;
    border: 1px solid var(--hony-color-neutral-5);

    &:hover {
      width: calc(100% + 16px);
      border-radius: 0 4px 4px 0;
    }
  }

  &__var {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px 0;
  }

  &__var-name {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  }

  &__var-desc {
    margin-left: 16px;
  }
}
</style>
