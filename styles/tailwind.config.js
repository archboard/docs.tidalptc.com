const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gray: colors.coolGray,
        primary: {
          '50': '#edfafa',
          '100': '#d5f5f6',
          '200': '#afecef',
          '300': '#7edce2',
          '400': '#16bdca',
          '500': '#0694a2',
          '600': '#047481',
          '700': '#036672',
          '800': '#05505c',
          '900': '#014451',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: [
          `'Inter'`,
          ...defaultTheme.fontFamily.sans,
        ]
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              color: '#1D4ED8',
              '&:hover': {
              color: '#1E3A8A',
              },
            },
            '.prose a.edit, .tag a': {
              color: '#333',
              'text-decoration': 'none',
            },
            'ul.footer-nav': {
              '::before': {
                display: 'none',
                'text-decoration': 'none',
              }
            },
            'ul.contains-task-list': {
              '::before': {
                display: 'none',
              }
            },
            'ul.spacelog': {
              '::before': {
                display: 'none',
              }
            },
          },
        },
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}