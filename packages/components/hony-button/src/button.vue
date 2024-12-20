<template>
  <button :class="buttonCls" @click="handleClick">
    <!-- 根据 isLeftIconPosition 来决定结构，先处理图标在左侧的情况 -->
    <template v-if="isLeftIconPosition">
      <!-- 图标在左侧 -->
      <template v-if="loading">
        <!-- loading 状态下，图标在左侧 -->
        <!-- 优先级：loading slot > icon slot > 默认图标 -->
        <slot v-if="$slots.loading" name="loading" />
        <slot v-else-if="$slots.icon" name="icon" />
        <!-- 当未定义 loading 或 icon slot 时，使用默认的 loading 图标 -->
        <span
          v-else
          :class="
            generateIconClasses({ ns, iconNs }, loading, {
              position: iconPosition,
              loadingIcon,
              icon,
            })
          "
        />
      </template>
      <template v-else>
        <!-- 非loading 状态下，图标在左侧 -->
        <!-- 优先级：icon slot > 默认图标 -->
        <slot v-if="$slots.icon" name="icon" />
        <!-- 未定义 icon slot 时，显示默认图标 -->
        <span
          v-else-if="icon"
          :class="
            generateIconClasses({ ns, iconNs }, loading, {
              position: iconPosition,
              loadingIcon,
              icon,
            })
          "
        />
      </template>
      <!-- 文本内容slot，始终显示在图标之后 -->
      <slot />
    </template>

    <!-- 图标在右侧的情况 -->
    <template v-else>
      <!-- 图标在右侧 -->
      <!-- 文本内容slot，始终在图标之前 -->
      <slot />
      <template v-if="loading">
        <!-- loading 状态下，图标在右侧 -->
        <!-- 优先级：loading slot > icon slot > 默认图标 -->
        <slot v-if="$slots.loading" name="loading" />
        <slot v-else-if="$slots.icon" name="icon" />
        <!-- 未定义 loading 或 icon 时，使用默认的 loading 图标 -->
        <span
          v-else
          :class="
            generateIconClasses({ ns, iconNs }, loading, {
              position: iconPosition,
              loadingIcon,
              icon,
            })
          "
        />
      </template>
      <template v-else>
        <!-- 非loading 状态下，图标在右侧 -->
        <!-- 优先级：icon slot > 默认图标 -->
        <slot v-if="$slots.icon" name="icon" />
        <!-- 未定义 icon slot 时，显示默认图标 -->
        <span
          v-else-if="icon"
          :class="
            generateIconClasses({ ns, iconNs }, loading, {
              position: iconPosition,
              loadingIcon,
              icon,
            })
          "
        />
      </template>
    </template>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from './buttton';
import { useNamespace } from '@hony-ui/hooks';
import { computed } from 'vue';
import { generateIconClasses } from './icon-classes';

defineOptions({ name: 'HonyButton' });

// 接收组件的属性
const {
  size,
  type,
  disabled,
  loading,
  secondary,
  tertiary,
  text,
  link,
  icon,
  iconPosition,
  loadingIcon,
} = defineProps<ButtonProps>();

// 命名空间hooks，用于生成对应 BEM 命名的 class
const ns = useNamespace('button');

const iconNs = useNamespace('iconfont');

// 计算图标位置是否为左侧：默认或者指定为 'left' 时为左侧，否则为右侧
const isLeftIconPosition = computed(
  () => !iconPosition || iconPosition === 'left'
);

// 根据各类属性计算按钮的class列表
const buttonCls = computed(() => [
  ns.b(), // 基础类名 .hony-button
  ns.m(type), // 按钮类型修饰类，如 .hony-button--primary
  ns.m(size), // 按钮尺寸修饰类，如 .hony-button--large
  ns.is('disabled', disabled), // 根据 disabled 属性添加 .is-disabled
  ns.is('loading', loading), // 根据 loading 属性添加 .is-loading
  ns.is('secondary', secondary),
  ns.is('tertiary', tertiary),
  ns.is('text', text),
  ns.is('link', link),
]);

const emit = defineEmits<{ click: [event: MouseEvent] }>();

const handleClick = (event: MouseEvent) => {
  if (!disabled && !loading) {
    emit('click', event);
  }
};
</script>
