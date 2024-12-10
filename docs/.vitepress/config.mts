import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

const resolvePath = (relativePath: string) =>
  fileURLToPath(new URL(relativePath, import.meta.url));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Hony UI',
  description: '基于 Vue 3，面向设计师和开发者的组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/components' },
    ],
    sidebar: [
      {
        text: '基础',
        items: [
          { text: '安装', link: '/guide/installation' },
          { text: '快速开始', link: '/guide/quickstart' },
        ],
      },
      {
        text: '进阶',
        items: [
          { text: '主题', link: '/markdown-examples' },
          { text: '暗黑模式', link: '/api-examples' },
          { text: '更新日志', link: '/api-examples' },
        ],
      },
      {
        text: 'Basic 基础组件',
        items: [
          { text: 'Color 色彩', link: '/components/color' },
          { text: 'Layout 布局', link: '/components/layout' },
          { text: 'Font 字体', link: '/components/font' },
          { text: 'Icon 图标', link: '/components/icon' },
          { text: '按钮', link: '/components/button' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  vite: {
    plugins: [
      AutoImport({
        imports: ['vue', '@vueuse/core'],
      }),
      Components({
        dirs: ['../examples/'],
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
      }),
    ],
    resolve: {
      alias: {
        'hony-ui/styles': resolvePath('../../packages/styles'),
        'hony-ui': resolvePath('../../packages/index.ts'),
      },
    },
  },
});
