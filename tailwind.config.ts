import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-parkday)', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        midnight: '#071426',
        twilight: '#10233f',
        royal: '#6f5cff',
        gold: '#f6d98a',
        cream: '#fff7e6',
        sky: '#70c8ff'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(112, 200, 255, 0.18)',
        card: '0 16px 48px rgba(3, 10, 24, 0.26)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    }
  },
  plugins: []
};

export default config;
