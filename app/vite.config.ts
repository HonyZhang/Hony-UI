import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools'
import {resolve} from 'path';

export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src") , // 使用 __dirname 拼接 src 目录路径
            "hony-ui": resolve(__dirname, "../lib/index.ts")
        }
    }
});