/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-NeueBit)'],
      },
    },
    colors: {
      background: '#141A04',
      primary: '#C4E865',
      'primary-dark': '#99B54F',
      tertiary: '#424E22',
      'background-light': '#1C2409',
      white: '#F4F4EE',
      border: '#F4F4EE05',
      'border-dark': '#F4F4EE15',
    },
  },
  plugins: [],
}
