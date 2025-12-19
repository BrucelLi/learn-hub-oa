// ColorConfig
export const COLOR_CONFIG = {
  alias: {
    red: {
      50: '#FCF4F4',
      100: '#EC0000',
      150: '#FFE1DF',
      200: '#E02F3B',
      300: '#C24747'
    },
    blue: {
      50: '#EFF2FC',
      100: '#C5D7FB',
      300: '#3A59CC',
      400: '#00118F',
      500: '#000060'
    },
    black: {
      0: '#000000',
      50: '#555659',
      100: '#1E2024'
    },
    gray: {
      50: '#FAFAFA',
      100: '#F2F2F2',
      200: '#E5E5E5',
      300: '#CCCCCC',
      400: '#B2B2B2',
      500: '#999999',
      600: '#EEEEEE',
      650: '#D9D9D9',
      700: '#DDDDDD',
      800: '#AAAAAA'
    },
    green: {
      50: '#EFFCF6',
      100: '#259D63',
      200: '#197A4B',
      400: '#CAF1DE'
    },
    neutral: {
      100: '#767676',
      700: '#333333'
    },
    rose: {
      400: '#E59191',
      600: '#D44848'
    },
    yellow: {
      50: '#FCF9EF',
      200: '#927200'
    }
  },
  while: '#fff'
}

// TypographyConfig
export const TYPOGRAPHY_CONFIG = {
  fontFamily: {
    base: ['Zen Maru Gothic', 'sans-serif'], // default init by base.css
    ubuntu: ['Ubuntu', 'sans-serif']
  },
  fontSize: {
    '8px': '8px',
    '11px': '11px',
    '12px': '12px',
    '13px': '13px',
    '14px': '14px',
    '16px': '16px',
    '18px': '18px',
    '20px': '20px',
    '24px': '24px',
    '28px': '28px',
    '30px': '30px',
    '32px': '32px',
    '36px': '36px',
    '52px': '52px',
    '56px': '56px'
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700'
  },
  lineHeight: {
    '100': '100%',
    '150': '150%',
    '175': '175%',
    '200': '200%'
  },
  letterSpacing: { zero: '0', tight: '0.02em', loose: '0.04em' }
}

// ScreenConfig
export const SCREEN_CONFIG = {
  sm: '431px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}

// UiDesignWidth
export const UI_DESIGN_WIDTH = {
  pc: '1024px',
  phone: '431px'
}

// ShadowConfig
const SHADOW_CONFIG = {
  base: '0 0 10px 0 rgba(0, 0, 0, 0.1)'
}

// ThemeConfig
export const THEME_CONFIG = {
  COLOR_CONFIG,
  TYPOGRAPHY_CONFIG,
  SCREEN_CONFIG,
  UI_DESIGN_WIDTH,
  SHADOW_CONFIG
} as const
