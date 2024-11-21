import {rollup} from 'rollup'
import vue from '@vitejs/plugin-vue'
import {getFiles} from '@hony-ui/build/src/build-infos'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import {fileURLToPath} from 'node:url'

export const buildModules = async () => {
    try {
        const input = await getFiles()
        const inputOptions = {
            input,
            plugins: [
                vue({
                    isProduction: true
                }),
                nodeResolve({
                    extensions: ['.mjs', '.js', '.ts', '.json']
                }),
                commonjs(),
                esbuild({
                    sourceMap: true,
                    target: 'esnext',
                    loaders: {
                        '.vue': 'ts'
                    }
                }),
                json()
            ],
            external: (id: string) => /node_modules/.test(id) || id === 'vue' || id.endsWith('.d.ts')
        }

        const bundle = await rollup(inputOptions)

        const esmPromise = bundle.write({
            format: 'esm',
            dir: fileURLToPath(new URL('../../../dist/es', import.meta.url)),
            preserveModules: true,
            preserveModulesRoot: fileURLToPath(new URL('../../../packages', import.meta.url)),
            sourcemap: true,
            entryFileNames: `[name].mjs`
        })

        const cjsPromise = bundle.write({
            format: 'cjs',
            dir: fileURLToPath(new URL('../../../dist/lib', import.meta.url)),
            exports: 'named',
            preserveModules: true,
            preserveModulesRoot: fileURLToPath(new URL('../../../packages', import.meta.url)),
            sourcemap: true,
            entryFileNames: `[name].js`
        })

        await Promise.all([esmPromise, cjsPromise])
        console.log('多模块构建成功');
    } catch (error) {
        console.error('多模块构建失败', error);
        throw error;
    }
}