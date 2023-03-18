/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'pastel',
      'dark',
      {
        porfolio: {
          primary: '#FF79C6',
          secondary: '#BD93F9',
          accent: '#FFB86C',
          neutral: '#414558',
          'base-100': '#282A36',
          info: '#8BE9FD',
          success: '#50FA7B',
          warning: '#F1FA8C',
          error: '#FF5555'
        }
      }
    ]
  }
}
