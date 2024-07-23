import type { Metadata } from 'next'
import { Baloo_2, Roboto } from 'next/font/google'
import { CartContextProvider } from '@/context/CartContext'
import Header from '@/components/organisms/Header/Header'
import './globals.css'

const baloo_2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description: 'Store of coffee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={baloo_2.className && roboto.className}>
        <CartContextProvider>
          <Header />
          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
