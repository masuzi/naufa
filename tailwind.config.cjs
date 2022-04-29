const plugin = require('tailwindcss/plugin')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f'
      //   pink: '#d53369',
      //   yellow: '#daae51'
    }),
    extend: {}
  },

  plugins: [
    require('@tailwindcss/typography'),
  ]
}

module.exports = config
