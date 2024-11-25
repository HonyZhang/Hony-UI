import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import { fileURLToPath } from 'node:url';
import { rollup } from 'rollup';

export const buildFull = async () => {
  try {
    const inputOptions = {
      input: fileURLToPath(
        new URL('../../../packages/index.ts', import.meta.url)
      ),
      plugins: [
        vue(),
        nodeResolve({
          extensions: ['.mjs', '.js', '.ts'],
        }),
        commonjs(),
        esbuild({
          sourceMap: true,
          target: 'esnext',
          loaders: {
            '.vue': 'ts',
          },
        }),
        json(),
      ],
      external: (id: string) => /node_modules/.test(id) || id === 'vue',
    };

    const bundle = await rollup(inputOptions);

    await bundle.write({
      file: fileURLToPath(
        new URL('../../../dist/dist/index.umd.js', import.meta.url)
      ),
      name: 'HonyUI',
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      globals: {
        vue: 'Vue',
      },
    });
    console.log('全量构建成功');
  } catch (error) {
    console.error('全量构建失败', error);
    throw error;
  }
};
