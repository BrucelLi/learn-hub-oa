// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts

import { type Config } from 'prettier'

const config: Config = {
  // 基础风格
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 120,

  // 缩进
  tabWidth: 2,
  useTabs: false,

  // JSX / TS 友好
  jsxSingleQuote: false,
  arrowParens: 'always',

  // 空格 & 换行
  bracketSpacing: true,
  bracketSameLine: false,

  // 跨平台
  endOfLine: 'lf'
}

export default config
