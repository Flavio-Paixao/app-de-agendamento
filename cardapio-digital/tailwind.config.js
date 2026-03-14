/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ifood: {
          50: '#fff1f2',
          100: '#ffe4e7',
          500: '#ea1d2c',
          600: '#d71724',
          700: '#b3121d'
        },
        neutral: {
          50: '#f7f7f7',
          100: '#f1f1f1',
          700: '#555555',
          900: '#222222'
        }
      },
      boxShadow: {
        soft: '0 10px 25px rgb(0 0 0 / 0.08)'
      }
    }
  },
  plugins: []
};
