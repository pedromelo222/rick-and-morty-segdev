module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-green': 'rgb(var(--app-green) / <alpha-value>)',
        'app-green-focus': 'rgb(var(--app-green-focus) / <alpha-value>)',
        'app-yellow': 'rgb(var(--app-yellow) / <alpha-value>)',
        'app-yellow-focus': 'rgb(var(--app-yellow-focus) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
