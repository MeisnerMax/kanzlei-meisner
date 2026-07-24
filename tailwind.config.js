/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 40px rgba(25,37,34,0.08)',
        elevated: '0 28px 80px rgba(25,37,34,0.14)',
      },
      opacity: {
        12: '0.12',
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        58: '0.58',
        62: '0.62',
        64: '0.64',
        65: '0.65',
        66: '0.66',
        67: '0.67',
        68: '0.68',
        72: '0.72',
        76: '0.76',
        88: '0.88',
      },
      colors: {
        ink: {
          DEFAULT: '#192522',
          soft: '#263733',
        },
        ivory: '#F4F1EA',
        sage: {
          DEFAULT: '#82968B',
          dark: '#52685F',
          light: '#B9C8BF',
          wash: '#E7ECE8',
        },
        clay: '#C7785B',
        sand: '#DCD4C8',
      },
    },
    fontFamily: {
      sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      serif: ['var(--font-lora)', 'Georgia', 'serif'],
    },
  },
  plugins: [],
}
