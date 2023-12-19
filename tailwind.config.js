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
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      strongpurple: '#1e1a33',
      purple: '#403a60',
      lightpurple: '#5a5478',
      gray: '#bdc9c5',
      orange: '#fd5001',
      yellow: '#ffa300',
      black: '#000'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      sm: '11px',
      base: '14px',
      xl: '15px',
      '1xl': '24px',
      '2xl': '30px',
      '3xl': '40px',
      '4xl': '50px',
      '5xl': '156px'

    },
    extend: {
      animation: {
        wipe: 'wipe 1.5s ease forwards'
      },
      keyframes: {
        wipe: {
          "0%": {
            'clip-path': 'polygon(-40% 0, 0 0, -10% 100%, -50% 100%)',
            opacity: 0
          },
          "50%": {
            opacity: 1
          },
          "100%": {
            'clip-path': 'polygon(140% 0, 180% 0, 170% 100%, 130% 100%)',
            opacity: 0
          }
        }
      },
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
  safelist: ['strongpurple', 'purple', 'lightpurple', 'gray', 'orange', 'yellow']
}


