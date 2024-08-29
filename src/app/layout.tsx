'use client'

import { Baloo_2, Roboto } from 'next/font/google'
import { CartContextProvider } from '@/context/CartContext'
import { ToastContainer } from 'react-toastify'
import Header from '@/components/organisms/Header/Header'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { FormContextProvider } from '@/context/FormContext'

export const baloo_2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})

const roboto = Roboto({
  subsets: ['greek'],
  weight: ['100', '900', '300', '400', '500', '700'],
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Coffee Shop</title>
      </head>
      <body className={`${roboto.className} max-w-[1280px] m-auto`}>
        <CartContextProvider>
          <FormContextProvider>
            <ToastContainer />
            <Header />
            {children}
          </FormContextProvider>
        </CartContextProvider>
      </body>
    </html>
  )
}
