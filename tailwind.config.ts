import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

import { themeConfig } from './src/configs/theme'

const config: Config = {
  important: true,
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        ...themeConfig.colorConfig
      },
      fontFamily: {
        ...themeConfig.typographyConfig.fontFamily
      },
      fontSize: {
        ...themeConfig.typographyConfig.fontSize
      },
      fontWeight: {
        ...themeConfig.typographyConfig.fontWeight
      },
      screens: {
        ...themeConfig.screenConfig
      },
      spacing: {
        ...themeConfig.uiDesignWidth,
        'vt-section-gap': 'var(--section-gap)'
      },
      boxShadow: {
        ...themeConfig.shadowConfig
      }
    }
  },

  plugins: [
    plugin((pluginAPI) => {
      const { fontSize, fontWeight, lineHeight, letterSpacing } = themeConfig.typographyConfig
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
