import type { Config } from 'tailwindcss';

import tailwindForms from '@tailwindcss/forms';
import tailwindTypography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e0e0e0',
          300: '#cccccc',
          400: '#a9a9a9',
          500: '#858585',
          600: '#757575',
          700: '#595959',
          800: '#434343',
          900: '#2c2c2c',
          950: '#1f1f1f',
        },
        // red-pink flame
        primary: {
          '50': '#fff1f2',
          '100': '#ffe4e6',
          '200': '#fecdd3',
          '300': '#fda4af',
          '400': '#fb7185',
          '500': '#f43f5e',
          '600': '#e11d48',
          '700': '#be123c',
          '800': '#9f1239',
          '900': '#881337',
          '950': '#610316',
        },
        // yellow flame
        secondary: {
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fde58a',
          '300': '#fbd24e',
          '400': '#fabe25',
          '500': '#f49d0c',
          '600': '#d87607',
          '700': '#bc560a',
          '800': '#923f0e',
          '900': '#78340f',
          '950': '#451a03',
        },
      },
      fontFamily: {
        // lexend: ["Lexend", "sans-serif"],
        // amatic: ["Amatic SC", "sans-serif"],
        // 👇 Add CSS variables
        lexend: ['var(--font-lexend)'],
        amatic: ['var(--font-amatic)'],
        yesteryear: ['var(--font-yesteryear)'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.037em' }],
        '3xl': [
          '1.875rem',
          { lineHeight: '1.3333', letterSpacing: '-0.037em' },
        ],
        '4xl': ['2.25rem', { lineHeight: '1.2777', letterSpacing: '-0.037em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
        '6xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
      },
      animation: {
        moveIcon: 'moveIcon linear infinite', // Infinite linear animation
        floatIcon: 'floatIcon infinite', // Continuous animation
      },
      keyframes: {
        moveIcon: {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '50%': {
            transform: 'translate(calc(-50% + 2rem), calc(-50% + 2rem))',
          }, // Slight movement
        },
        floatIcon: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -15px)' },
          '50%': { transform: 'translate(-10px, 10px)' },
          '75%': { transform: 'translate(15px, 5px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'code-1': {
          '0%': { opacity: '0' },
          '2.5%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-2': {
          '16.2%': { opacity: '0' },
          '18.75%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-3': {
          '32.5%': { opacity: '0' },
          '35%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-4': {
          '48.75%': { opacity: '0' },
          '51.25%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-5': {
          '65%': { opacity: '0' },
          '72.5%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-6': {
          '81.25%': { opacity: '0' },
          '83.75%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        breath: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        line: {
          '0%, 100%': { left: '0', opacity: '0' },
          '50%': { left: '100%', transform: 'translateX(-100%)' },
          '10%, 40%, 60%, 90%': { opacity: '0' },
          '25%, 75%': { opacity: '1' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [tailwindForms, tailwindTypography],
};
export default config;
