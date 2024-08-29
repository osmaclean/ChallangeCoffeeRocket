'use client'

import {
  createContext,
  useState,
  useEffect,
  useReducer,
  ReactNode,
  useContext,
} from 'react'
import {
  addItemToCartAction,
  clearCartAction,
  removeItemToCartAction,
  updateCartAction,
} from '../reducers/actions'
import { cartManager } from '../reducers/reducer'
import { Product } from '@/@types/interfaces'

interface ContextProps {
  cartItems: Product[]
  totalToPay: number
  deliveryCost: number
  addItemToCart: (item: Product) => void
  removeItemFromCart: (itemId: number) => void
  updateCartItemQty: (itemId: number, itemQty: number) => void
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ContextProps)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItemsState, dispatch] = useReducer(cartManager, { cartItems: [] })
  const [totalToPay, setTotalToPay] = useState<number>(0)
  const [deliveryCost, setDeliveryCost] = useState<number>(0)

  const { cartItems } = cartItemsState

  const addItemToCart = (item: Product) => dispatch(addItemToCartAction(item))

  const removeItemFromCart = (item_id: number) =>
    dispatch(removeItemToCartAction(item_id))

  const updateCartItemQty = (itemId: number, itemQty: number) =>
    dispatch(updateCartAction(itemId, itemQty))

  const clearCart = () => dispatch(clearCartAction())

  const calculateTotal = (items: Product[]) => {
    setTotalToPay(
      items.reduce((total, item) => total + item.qty * item.price, 0),
    )
  }

  const calculateFreight = (items: Product[]) => {
    const totalProducts = items.reduce((total, item) => total + item.qty, 0)

    if (totalProducts > 3 && totalProducts <= 5) setDeliveryCost(5.7)
    else if (totalProducts > 5) setDeliveryCost(10.7)
    else if (totalProducts > 0) setDeliveryCost(3.7)
    else setDeliveryCost(0)
  }

  useEffect(() => {
    calculateTotal(cartItems)
    calculateFreight(cartItems)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        deliveryCost,
        totalToPay,
        addItemToCart,
        clearCart,
        removeItemFromCart,
        updateCartItemQty,
      }}
    >
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
