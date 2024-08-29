'use client'

import { CartContextProvider } from '@/context/CartContext'
import { ToastContainer } from 'react-toastify'
import { FormContextProvider } from '@/context/FormContext'
import { roboto } from '@/@fonts/fonts'
import Header from '@/components/organisms/Header/Header'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

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
