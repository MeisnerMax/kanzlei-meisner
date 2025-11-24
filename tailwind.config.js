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
        soft: '0 1px 2px 0 rgba(0,0,0,0.04), 0 1px 1px -1px rgba(0,0,0,0.04)',
        elevated:
          '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.06)',
        'xl-soft':
          '0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(10,34,64,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,34,64,0.06) 1px, transparent 1px)',
        'dots-pattern':
          'radial-gradient(rgba(10,34,64,0.08) 1px, transparent 1px)',
        'radial-spot':
          'radial-gradient(600px 300px at 10% 10%, rgba(10,34,64,0.12), transparent), radial-gradient(500px 250px at 90% 0%, rgba(26,57,102,0.10), transparent)',
      },
      colors: {
        primary: {
          DEFAULT: '#0A2240',
          50: '#F1F4F8',
          100: '#E3E9F1',
          200: '#C7D3E3',
          300: '#A8BBD1',
          400: '#7E99B7',
          500: '#4F7398',
          600: '#2E547C',
          700: '#0A2240',
          800: '#071A31',
          900: '#051323',
        },
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      serif: ['var(--font-playfair)', 'Georgia', 'serif'],
    },
  },
  plugins: [],
}
