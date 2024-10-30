import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        vue(),
        dts({
            outDir: ["./dist/es", "./dist/cjs"],
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'HonyUI',
            fileName: "hony-ui"
        },
        emptyOutDir: true,
        rollupOptions: {
            external: ['vue'],
            input: ["index.ts"],
            output: [
                {
                    format: 'es',  // ES Module 格式
                    dir: 'dist/es',  // 输出目录
                    preserveModules: true,  // 保持模块独立
                    entryFileNames: '[name].mjs'
                },
                {
                    format: 'cjs',  // CJS 格式
                    dir: 'dist/cjs',  // 输出到 dist/cjs 目录
                    preserveModules: true,  // 保持模块独立
                    entryFileNames: '[name].cjs'  // 指定输出文件名称
                }
            ]
        }
    }
});