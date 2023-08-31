import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "dark-davys-gray": '#474453',
        "davys-gray": '#565264',
        "dim-gray": '#706677',
        "timberwolf": '#D6CFCB',
        "pale-dogwood": '#CCB7AE',
        "mountbatten-pink": '#8B7382',
        "chinese-violet": '#776A7A',
      }
    },
  },
  plugins: [],
}
export default config
