/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#222222',
        secondary: '#595959',
        gray: {
          DEFAULT: '#8C8989',
          500: '#8C8989',
          neutral: '#8C8989',
        },
        dark: '#222',
      },
      
    },
  },
  plugins: [],
};
