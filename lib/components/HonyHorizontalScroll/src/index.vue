<template>
    <div class="horizontal-scroll__wrapper">
        <div v-if="props.showScrollIndicators && !atStart"
             class="horizontal-scroll__indicator horizontal-scroll__indicator--left" @click="scrollLeft">
            <div class="horizontal-scroll__arrow-icon">
                <template v-if="typeof props.leftArrowIcon === 'string'">
                    <i :class="props.leftArrowIcon"
                       :style="{ 'font-size': props.arrowIconSize + 'px', 'color': props.arrowIconColor }"></i>
                </template>
                <template v-else>
                    <component :is="props.leftArrowIcon" class="horizontal-scroll__arrow-icon"></component>
                </template>
            </div>
        </div>
        <div class="horizontal-scroll__container" ref="scrollContainer" @scroll="handleScroll" :class="{ 'horizontal-scroll__container--hide-scrollbar': !props.showScrollbar }">
            <div class="horizontal-scroll__content" ref="scrollContent">
                <slot></slot>
            </div>
        </div>
        <div v-if="props.showScrollIndicators && !atEnd"
             class="horizontal-scroll__indicator horizontal-scroll__indicator--right" @click="scrollRight">
            <div class="horizontal-scroll__arrow-icon">
                <template v-if="typeof props.rightArrowIcon === 'string'">
                    <i :class="props.rightArrowIcon"
                       :style="{ 'font-size': props.arrowIconSize + 'px', 'color': props.arrowIconColor }"></i>
                </template>
                <template v-else>
                    <component :is="props.rightArrowIcon" class="horizontal-scroll__arrow-icon"></component>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref, defineProps, withDefaults, defineOptions} from 'vue';

// 定义组件选项，包括组件名称
defineOptions({
    name: 'HonyHorizontalScroll'
});

// 定义组件的属性及其默认值
const props = withDefaults(defineProps<{
    scrollFactor?: number;
    showScrollIndicators?: boolean;
    leftArrowIcon?: string | object;
    rightArrowIcon?: string | object;
    arrowIconSize?: number;
    arrowIconColor?: string;
    showScrollbar?: boolean;
}>(), {
    scrollFactor: 0.5,
    showScrollIndicators: false,
    leftArrowIcon: 'iconfont icon-arrow-double-left', // 默认左侧箭头图标
    rightArrowIcon: 'iconfont icon-arrow-double-right', // 默认右侧箭头图标
    arrowIconSize: 24, // 默认箭头大小
    arrowIconColor: '#000', // 默认箭头颜色
    showScrollbar: true // 默认显示滚动条
});

// 引用滚动容器和内容的元素
const scrollContainer = ref<HTMLElement | null>(null);
const scrollContent = ref<HTMLElement | null>(null);

// 控制箭头显示状态的变量
const atStart = ref(true);
const atEnd = ref(false);

// 在组件挂载时添加事件监听器，用于处理水平滚动
onMounted(() => {
    const container = scrollContainer.value;
    if (container) {
        container.addEventListener('wheel', (event: WheelEvent) => {
            event.preventDefault();
            // 根据鼠标滚轮的滚动量和滚动系数调整滚动距离
            container.scrollLeft += event.deltaY;








            const scrollAmount = event.deltaY * props.scrollFactor;
            container.scrollLeft += scrollAmount;
            handleScroll();
        });
    }
    handleScroll();
});

// 点击左侧箭头时滚动一个子元素宽度的位置
const scrollLeft = () => {
    const container = scrollContainer.value;
    const content = scrollContent.value;
    if (container && content && content.firstElementChild) {
        const childWidth = (content.firstElementChild as HTMLElement).offsetWidth;
        container.scrollLeft -= childWidth;
        handleScroll();
    }
};

// 点击右侧箭头时滚动一个子元素宽度的位置
const scrollRight = () => {
    const container = scrollContainer.value;
    const content = scrollContent.value;
    if (container && content && content.firstElementChild) {
        const childWidth = (content.firstElementChild as HTMLElement).offsetWidth;
        container.scrollLeft += childWidth;
        handleScroll();
    }
};

// 处理滚动事件，更新箭头的显示状态
const handleScroll = () => {
    const container = scrollContainer.value;
    if (container) {
        atStart.value = container.scrollLeft === 0;
        atEnd.value = container.scrollLeft + container.clientWidth >= container.scrollWidth;
    }
};
</script>

<style lang="scss" scoped>
.horizontal-scroll {
  &__wrapper {
    position: relative;
    width: 100%;
    height: fit-content;
  }

  &__container {
    overflow-x: auto; // 启用水平滚动
    white-space: nowrap; // 防止换行以确保水平布局
    -webkit-overflow-scrolling: touch; // 在 iOS 设备上启用更平滑的滚动
    scroll-behavior: smooth; // 平滑滚动行为

    // 自定义滚动条样式
    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }

    &.horizontal-scroll__container--hide-scrollbar {
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__content {
    display: inline-flex; // 将子元素排列为一行
    width: fit-content; // 设置宽度以包裹内容，确保内容宽度不会影响容器宽度
  }

  &__indicator {
    position: absolute; // 相对于外层 wrapper 固定位置，使左右箭头保持在两端
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
  }

  &__indicator--left {
    left: 10px;
  }

  &__indicator--right {
    right: 10px;
  }

  &__arrow-icon {
    transition: transform 0.3s ease-in-out;
    animation: blink 1s infinite;

    &:hover {
      transform: scale(1.2);
    }

    /* 添加闪烁动画 */
    @keyframes blink {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.3;
      }
    }
  }
}
</style>