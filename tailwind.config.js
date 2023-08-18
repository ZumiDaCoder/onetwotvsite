/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,css,js}"
    ],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'strongpurple': '#1e1a33',
      'purple': '#403a60',
      'light-purple': '#5a5478',
      'gray': '#bdc9c5',
      'orange': '#fd5001',
      'yellow': '#ffa300'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      sm: '11px',
      base: '14px',
      xl: '15px',
      '2xl': '30px',
      '3xl': '40px',
      '4xl': '50px',
      '5xl': '60px'

    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}


