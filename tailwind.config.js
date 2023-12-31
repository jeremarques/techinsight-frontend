/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // darkMode: 'media', // or 'class'
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          main: {
            '50': '#fff8ec',
            '100': '#fff0d3',
            '200': '#ffdea5',
            '300': '#ffc56d',
            '400': '#ffa132',
            '500': '#ff840a',
            '600': '#ff6b00',
            '700': '#cc4d02',
            '800': '#a13c0b',
            '900': '#82330c',
            '950': '#461704',
          },
          blue: {
            '50': '#f2f7fd',
            '100': '#e4edfa',
            '200': '#c2daf5',
            '300': '#8cbbed',
            '400': '#4f97e1',
            '500': '#287acf',
            '600': '#195dad',
            '700': '#164c8e',
            '800': '#164176',
            '900': '#183862',
            '950': '#102341',
          },
        },
        dark: {
            '100': '#121212',
            '200': '#282828',
            '300': '#3f3f3f',
            '400': '#575757',
            '500': '#717171',
            '600': '#8b8b8b',
            mixed: {
                '50': '#16171e',
                '100': '#171920',
                '200': '#2c2e35',
                '300': '#43444b',
                '400': '#5b5c62',
                '500': '#74757a',
                '600': '#8e8f93',
            }
        }
      },
      dropShadow: {
        'xs': '0 4px 4px rgba(36, 36, 36, 0.03)',
        '3xl': '0 35px 35px rgba(36, 36, 36, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    fontFamily: {
      regular: ['PoppinsRegular'],
      medium: ['PoppinsMedium'],
      semibold: ['PoppinsSemiBold'],
      bold: ['PoppinsSemiBold'],
      'p-regular': ['CrimsonProRegular'],
      'p-regular-italic': ['CrimsonProItalic'],
      'p-semibold': ['CrimsonProSemiBold'],
      'p-semibold-italic': ['CrimsonProSemiBoldItalic'],
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  plugins: [],
}

