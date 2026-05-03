import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        'navy-dark': '#0f1824',
        'red-accent': '#E63946',
        'teal-accent': '#06A77D',
        'gold-accent': '#C8922A',
        cream: '#F8F5F0',
        charcoal: '#2C2C2C',
        'light-gray': '#E8E8E8',
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-out': 'fadeOut 0.8s ease-out forwards',
        'fade-out-long': 'fadeOut 1.2s ease-out forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
