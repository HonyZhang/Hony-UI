import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      '**/*.d.ts',
      'node_modules/*',
      'dist/*',
      '.husky/*',
      '.idea/*',
      'app/dist/*',
      'app/node_modules/*',
      'build-package/node_modules/*',
      'docs/node_modules/*',
      'docs/.vitepress/dist/*',
      'docs/.vitepress/cache/*',
      'packages/node_modules/*',
      'packages/dist/*',
    ],
  },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/multi-word-component-names': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  prettierConfig
);
