import { dest, parallel, series, src, task } from 'gulp';
import replace from 'gulp-replace';
import { buildFull } from './src/tasks/rollup-full';
import { fileURLToPath } from 'node:url';
import clean from 'gulp-clean';
import { buildModules } from './src/tasks/rollup-modules';
import * as fs from 'node:fs';
import { generateTypes } from './src/tasks/generate-types';
import { buildDarkCssVars, buildThemeDefault } from './src/tasks/build-style';

type ReplaceRule = {
  target: string;
  replacement: string;
};

// 路径解析函数，将相对路径解析为绝对路径
const resolvePath = (relativePath: string) =>
  fileURLToPath(new URL(relativePath, import.meta.url));

// 路径配置，包含打包输出、类型定义、临时目录等路径
const paths = {
  rootDist: '../dist',
  typesSrc: '../dist/types/**/*',
  stylesSrc: '../packages/styles/**/*.scss',
  stylesDestDirs: ['../dist/styles/src'],
  typesDir: '../dist/types',
  destDirs: ['../dist/es', '../dist/lib'],
  indexTypeSrc: '../dist/types/index.d.ts',
  distDest: '../dist/dist',
  tempDir: '../dist/temp',
  packageJsonSrc: '../packages/package.json',
  packageJsonDest: '../dist/package.json',
  buildTypesScript: 'src/tasks/build-types.js',
  globalTypeSrc: '../packages/global.d.ts',
  globalTypeDest: '../dist/global.d.ts',
  assetsSrc: '../packages/assets/**/*',
  assetsDest: '../dist/assets',
};

// 通用控制台输出函数
const logSuccess = (message: string) => console.log(`${message} 成功。`);
const logError = (message: string, error: any) => {
  console.error(`${message} 时出错:`, error);
  throw error;
};

// 多模块打包任务
const buildMultiModules = async () => {
  try {
    await buildModules();
    logSuccess('多模块构建');
  } catch (error) {
    logError('多模块构建', error);
  }
};

// 全量打包任务
const buildAll = async () => {
  try {
    await buildFull();
    logSuccess('全量构建');
  } catch (error) {
    logError('全量构建', error);
  }
};

// 文件复制任务的通用函数
const copyFiles = (
  srcPath: string,
  destPaths: string[],
  successMessage: string,
  replaceImportPaths?: ReplaceRule[]
) =>
  Promise.all(
    destPaths.map(
      destDir =>
        new Promise<void>((resolve, reject) => {
          let stream = src(resolvePath(srcPath));
          if (replaceImportPaths) {
            replaceImportPaths.forEach(({ target, replacement }) => {
              stream = stream.pipe(
                replace(new RegExp(target, 'g'), replacement)
              );
            });
          }
          stream
            .pipe(dest(resolvePath(destDir)))
            .on('end', () => resolve())
            .on('error', reject);
        })
    )
  )
    .then(() => logSuccess(successMessage))
    .catch(error => logError(successMessage, error));

// 修改 package.json 文件任务
const modifyPackageJson = async () => {
  try {
    const data = await fs.promises.readFile(
      resolvePath(paths.packageJsonSrc),
      'utf8'
    );
    const packageJson = JSON.parse(data);
    packageJson.main = './lib/index.js';
    packageJson.module = './es/index.mjs';
    packageJson.types = './es/index.d.ts';
    delete packageJson.scripts;
    await fs.promises.writeFile(
      resolvePath(paths.packageJsonDest),
      JSON.stringify(packageJson, null, 2),
      'utf8'
    );
    logSuccess('package.json 文件修改');
  } catch (error) {
    logError('修改 package.json 文件', error);
  }
};

// 复制类型文件任务
const copyTypes = () =>
  copyFiles(paths.typesSrc, paths.destDirs, '类型定义文件复制', [
    { target: '@hony-ui/styles', replacement: 'hony-ui/styles' },
  ]);

// 复制类型文件任务
const copyStyles = () =>
  copyFiles(paths.stylesSrc, paths.stylesDestDirs, 'scss样式文件复制');

// 复制 index.d.ts 文件任务
const copyIndexType = () =>
  copyFiles(paths.indexTypeSrc, [paths.distDest], 'index.d.ts 文件复制');

const cleanTypes = () => {
  return src([paths.typesDir, paths.tempDir], { allowEmpty: true, read: false })
    .pipe(clean({ force: true }))
    .on('end', () => logSuccess('类型文件夹删除'))
    .on('error', error => logError('删除类型文件夹', error));
};

task(
  'build-types',
  series(generateTypes, parallel(copyTypes, copyIndexType), cleanTypes)
);

// 清理打包输出目录
task('clean-dist', () => {
  return src(resolvePath(paths.rootDist), { allowEmpty: true, read: false })
    .pipe(clean({ force: true }))
    .on('end', () => logSuccess('清理目录'))
    .on('error', error => logError('清理目录', error));
});

task('copy-global-types', () =>
  copyFiles(paths.globalTypeSrc, [paths.rootDist], '全局类型文件复制')
);

task('copy-assets', () =>
  copyFiles(paths.assetsSrc, [paths.assetsDest], '静态资源文件复制')
);

// 注册默认任务
task(
  'default',
  series(
    'clean-dist',
    parallel(buildMultiModules, buildAll, 'build-types'),
    parallel(modifyPackageJson, 'copy-global-types'),
    parallel(copyStyles, buildThemeDefault, buildDarkCssVars),
    'copy-assets'
  )
);
