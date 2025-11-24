import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 1px 2px 0 rgba(0,0,0,0.04), 0 1px 1px -1px rgba(0,0,0,0.04)",
        elevated: "0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.06)",
        'xl-soft': "0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.06)"
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, rgba(39,59,99,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(39,59,99,0.06) 1px, transparent 1px)",
        'dots-pattern':
          "radial-gradient(rgba(39,59,99,0.08) 1px, transparent 1px)",
        'radial-spot':
          "radial-gradient(600px 300px at 10% 10%, rgba(64,95,159,0.12), transparent), radial-gradient(500px 250px at 90% 0%, rgba(106,137,194,0.10), transparent)"
      },
      colors: {
        primary: {
          DEFAULT: '#273B63',
          50: '#F1F4FA',
          100: '#E3E9F4',
          200: '#C2CFE6',
          300: '#9DB4D8',
          400: '#6A89C2',
          500: '#405F9F',
          600: '#304A81',
          700: '#273B63',
          800: '#1E2D4A',
          900: '#152033'
        }
      }
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      serif: ['var(--font-playfair)', 'Georgia', 'serif']
    }
  },
  plugins: []
}

export default config
