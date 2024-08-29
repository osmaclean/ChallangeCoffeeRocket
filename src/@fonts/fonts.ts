import { Baloo_2, Roboto } from 'next/font/google'

export const baloo_2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})

export const roboto = Roboto({
  subsets: ['greek'],
  weight: ['100', '900', '300', '400', '500', '700'],
  preload: true,
})
