import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo\\ 2', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary-100': '#C47F17',
        'primary-200': '#DBAC2C',
        'primary-300': '#F1E9C9',
        'secondary-100': '#4B2995',
        'secondary-200': '#8047F8',
        'secondary-300': '#EBE5F9',
        'base-50': '#FFFFFF',
        'base-100': '#FAFAFA',
        'base-200': '#F3F2F2',
        'base-300': '#EDEDED',
        'base-400': '#E6E5E5',
        'base-500': '#D7D5D5',
        'base-600': '#8D8686',
        'base-700': '#574F4D',
        'base-800': '#403937',
        'base-900': '#272221',
      },
    },
  },
  plugins: [],
}
export default config
