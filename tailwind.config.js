const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  
  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}',
	],
  
  theme: {
    container: {
      center: true,
      padding: "0.375rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
}