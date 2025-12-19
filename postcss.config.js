import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import postcssPxToRem from 'postcss-pxtorem'

/** @type {import('postcss').ProcessOptions} */
const config = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    postcssPxToRem({
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    })
  ]
}

export default config
