/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF8',
        card: '#FFFFFF',
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#666660',
          light: '#999990',
        },
        dew: {
          DEFAULT: '#E11D24', // Signature Red from "dew" logo
          hover: '#C8141B',
          light: '#FDF2F2',
          border: '#FCA5A5',
        },
        drop: {
          DEFAULT: '#255BB3', // Signature Royal Blue from "drop" logo
          hover: '#1B4791',
          light: '#EFF6FF',
          border: '#BFDBFE',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F7F1E5',
          200: '#EBDCBF',
          300: '#DFC799',
          400: '#CF9D6C',
          500: '#C38546',
          600: '#A3682F',
          700: '#804D20',
        },
        sand: {
          DEFAULT: '#F3F1EC',
          dark: '#E7E4DD',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(0,0,0,0.04), 0 1px 4px -1px rgba(0,0,0,0.02)',
        'soft': '0 10px 30px -5px rgba(0,0,0,0.05), 0 4px 12px -2px rgba(0,0,0,0.02)',
        'soft-lg': '0 20px 40px -10px rgba(0,0,0,0.08), 0 8px 20px -4px rgba(0,0,0,0.03)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
