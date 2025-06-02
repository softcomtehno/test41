/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ef5350',
          DEFAULT: '#e53935',
          dark: '#c62828',
        },
        secondary: {
          light: '#ffb74d',
          DEFAULT: '#ff8f00',
          dark: '#ef6c00',
        },
        accent: {
          light: '#66bb6a',
          DEFAULT: '#4caf50',
          dark: '#388e3c',
        },
        success: {
          light: '#81c784',
          DEFAULT: '#4caf50',
          dark: '#2e7d32',
        },
        warning: {
          light: '#ffb74d',
          DEFAULT: '#ff9800',
          dark: '#ef6c00',
        },
        error: {
          light: '#e57373',
          DEFAULT: '#f44336',
          dark: '#c62828',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0,0,0,0.05)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};