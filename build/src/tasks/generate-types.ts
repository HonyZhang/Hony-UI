import {exec} from 'child_process'
import {fileURLToPath} from 'node:url'

// tsconfig.json 文件路径
const configFile = fileURLToPath(new URL('../../../packages/tsconfig.json', import.meta.url))

export const generateTypes = async () => {
    try {
        const result = await new Promise<string>((resolve, reject) => {
            exec(`npx vue-tsc --declaration --emitDeclarationOnly -p ${configFile}`, (error, stdout, stderr) => {
                if (error) {
                    reject(new Error(`生成类型声明文件时出错: ${error.message}`));
                    return
                }
                if (stderr) {
                    console.error(`标准错误输出: ${stderr}`)
                }
                resolve(stdout);
            })
        });
        console.log(`标准输出: ${result}`);
        console.log('类型声明文件已成功生成');
    } catch (error) {
        console.error(`生成类型声明文件时出错: ${(error as Error).message}`)
        throw error;
    }
}