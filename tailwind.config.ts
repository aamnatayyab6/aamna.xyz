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
        "dark-davys-gray": '#131B1B',
        "davys-gray": '#232A2E',
        "dim-gray": '#393C48',
        "timberwolf": '#B1ADB1',
        "pale-dogwood": '#CCB7AE',
        "mountbatten-pink": '#2E333B',
        "chinese-violet": '#393C48',
        "rose-quartz": "#AC9598",
        "gunmetal": '#232A2E',
        "heading": '#62606B',
        "basic": '#78757D',
        "taupegray": '#7F7B82',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
