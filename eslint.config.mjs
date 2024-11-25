import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser'; // 确保导入 tsParser
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser'; // 确保导入 vue-eslint-parser
import globals from 'globals';

export default [
  // JavaScript 基础规则
  js.configs.recommended,

  // 全局基础配置
  {
    files: ['**/*.{js,ts,jsx,tsx,vue}'], // 匹配所有文件
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // 启用 Prettier 格式检查
    },
  },

  // 针对 Vue 文件的配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser, // 使用 TypeScript 解析器
        ecmaVersion: 2021,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser, // 启用浏览器全局变量
      },
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules, // Vue 推荐规则
      ...tsPlugin.configs.recommended.rules, // TypeScript 推荐规则
      'vue/script-setup-uses-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn', // 禁用对 any 的限制
      'no-console': 'off', // 禁用 console.log
      '@typescript-eslint/no-unused-vars': 'warn', // 禁用未使用的变量
    },
  },

  // TypeScript 配置
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, // 启用浏览器全局变量
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // TypeScript 推荐规则
      '@typescript-eslint/no-explicit-any': 'warn', // 禁用对 any 的限制
      'no-console': 'off', // 禁用 console.log
      '@typescript-eslint/no-unused-vars': 'warn', // 禁用未使用的变量
    },
  },

  {
    ignores: [
      'node_modules',
      'dist',
      'app/node_modules',
      'app/dist',
      'build/node_modules',
      'build/dist',
      'packages/node_modules',
      'packages/dist',
    ],
  },
];
