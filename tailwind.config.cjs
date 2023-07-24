/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        brand: '#4FD1C5',
        main: {
          50: '#F1FAFA',
          100: '#E3F5F4',
          200: '#B9E7E3',
          300: '#8FD9D1',
          400: '#4B9D96',
          500: '#37928A',
          600: '#2C756E',
          700: '#276661',
          800: '#215853',
          900: '#1C4945',
        },
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        orange: {
          50: '#FFF2E3',
          100: '#FFEAD1',
          200: '#FFD8A9',
          300: '#FFBB6B',
          400: '#FFAF51',
          500: '#FF961B',
          600: '#E68718',
          700: '#CC7816',
          800: '#995A10',
          900: '#663C0B',
        },
        red: {
          50: '#FFF5F5',
          100: '#FED7D7',
        },
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        22: '1.375rem', // 22px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.375rem', // 38px
        '5xl': '3rem', // 48px
        '6xl': '3.625rem', // 58px
        '7xl': '4.375rem', // 70px
        '8xl': '6rem', // 96px
      },
    },
  },
  plugins: [],
};
