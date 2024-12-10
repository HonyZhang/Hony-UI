import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';
import { fileURLToPath } from 'node:url';

const resolvePath = (relativePath: string) =>
  fileURLToPath(new URL(relativePath, import.meta.url));

export default defineConfig({
  logLevel: 'info',
  plugins: [
    vue(),
    vueDevTools(),
    visualizer({
      emitFile: false,
      open: true,
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
    }),
    Inspect({
      enabled: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolvePath('./src'),
      },
    ],
  },
});
