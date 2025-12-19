import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended
    ],
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },

    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'no-unused-vars': 'off',
      'import/no-unresolved': ['off', { ignore: ['^/'] }],
      'import/no-dynamic-require': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
])
