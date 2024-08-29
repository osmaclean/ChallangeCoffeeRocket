import { CoffeeProductsCardsProps } from '@/@types/interfaces'
import {
  createContext,
  useState,
  // useEffect,
  ReactNode,
  useContext,
  SetStateAction,
  Dispatch,
} from 'react'

interface ContextProps {
  cartItems: CoffeeProductsCardsProps[]
  setCartItems: Dispatch<SetStateAction<CoffeeProductsCardsProps[]>>
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ContextProps)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CoffeeProductsCardsProps[]>([])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (!context)
    throw new Error('useCartContext must be used within a CartContextProvider')

  return context
}
