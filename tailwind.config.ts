import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f5f9',
          100: '#dbe4ee',
          200: '#b7c8dc',
          300: '#8aa3c1',
          400: '#5a7ba0',
          500: '#3a5d85',
          600: '#2a486b',
          700: '#1d3756',
          800: '#152a44',
          900: '#0f2138',
          950: '#08152a',
        },
        flame: {
          50: '#fff6ed',
          100: '#ffead4',
          200: '#fdd1a8',
          300: '#fbb072',
          400: '#f88339',
          500: '#f56112',
          600: '#e64708',
          700: '#bf3409',
          800: '#982a0f',
          900: '#7a2510',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 40px -10px rgba(245, 97, 18, 0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'pulse-slow': 'pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
