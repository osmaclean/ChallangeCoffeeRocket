'use client'

import { Baloo_2, Roboto } from 'next/font/google'
import { CartContextProvider } from '@/context/CartContext'
import { ToastContainer } from 'react-toastify'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/components/organisms/Header/Header'

export const baloo_2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
})

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <title>Coffee Shop</title>
      </head>
      <body className={`${roboto.className} max-w-[1280px] m-auto`}>
        <CartContextProvider>
          <ToastContainer />
          <Header />
        </CartContextProvider>
      </body>
    </html>
  )
}
