import glob from 'fast-glob';
import {fileURLToPath} from 'node:url';

export const getFiles = async () => {
    return await glob('**/*.{js,ts,vue}', {
        cwd: fileURLToPath(new URL('../../packages/', import.meta.url)),
        absolute: true,
        onlyFiles: true,
        ignore: ['dist/**', 'node_modules/**', '**/*.d.ts'] // 忽略 packages/dist 和 packages/node_modules
    });
};
