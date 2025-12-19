import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

import { THEME_CONFIG } from './src/configs/theme'

const config: Config = {
  important: true,
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        ...THEME_CONFIG.COLOR_CONFIG
      },
      fontFamily: {
        ...THEME_CONFIG.TYPOGRAPHY_CONFIG.fontFamily
      },
      fontSize: {
        ...THEME_CONFIG.TYPOGRAPHY_CONFIG.fontSize
      },
      fontWeight: {
        ...THEME_CONFIG.TYPOGRAPHY_CONFIG.fontWeight
      },
      screens: {
        ...THEME_CONFIG.SCREEN_CONFIG
      },
      spacing: {
        ...THEME_CONFIG.UI_DESIGN_WIDTH,
        'vt-section-gap': 'var(--section-gap)'
      },
      boxShadow: {
        ...THEME_CONFIG.SHADOW_CONFIG
      }
    }
  },

  plugins: [
    plugin((pluginAPI) => {
      const { fontSize, fontWeight, lineHeight, letterSpacing } = THEME_CONFIG.TYPOGRAPHY_CONFIG
      const components: Record<string, Record<string, string>> = {}

      for (const [sizeKey, sizeVal] of Object.entries(fontSize)) {
        for (const [weightKey, weightVal] of Object.entries(fontWeight)) {
          for (const [lhKey, lhVal] of Object.entries(lineHeight)) {
            for (const [lsKey, lsVal] of Object.entries(letterSpacing)) {
              const selector = `.t-${sizeKey}-${weightKey}-${lhKey}-${lsKey}`

              components[selector] = {
                fontSize: sizeVal,
                fontWeight: `${weightVal}`,
                lineHeight: lhVal,
                letterSpacing: lsVal
              }
            }
          }
        }
      }

      pluginAPI.addComponents(components)
    })
  ]
}

export default config
