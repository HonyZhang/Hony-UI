// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import HonyUI from 'hony-ui';
import '../../../packages/styles/theme-dark/index.scss';
import 'hony-ui/styles/index.scss';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    app.use(HonyUI);
    app.use(ElementPlus);

    // 动态导入组件
    const components = import.meta.glob('../../examples/components/**/*.vue', {
      eager: true,
    });

    for (const [path, component] of Object.entries(components)) {
      // 提取文件名并转换为大驼峰
      const componentName =
        path
          .split('/')
          .pop()
          ?.replace(/\.vue$/, '') || '';

      if (componentName) {
        // 注册组件
        app.component(componentName, component.default);
      }
    }
  },
} satisfies Theme;
