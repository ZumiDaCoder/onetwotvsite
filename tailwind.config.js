/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src-code/onetwotvsite.{html,css,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px',
    },
    colours: {
      'dark-purple': '#1e1a33',
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
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',

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

