/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Inter']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'custom-purple': {
          50: '#9574b080',
          100: '#e4dde93b',
          200: '#F9F7FA',
          300: '#EDE7F1',
          400: '#9574B0',
          // 500: '#06b6d4',
          // 600: '#0891b2',
          // 700: '#0e7490',
          // 800: '#155e75',
          // 900: '#cffafe',
        },
        'neon-green': '#3BE200',
      },
    },
    
  },
  plugins: [],
}

