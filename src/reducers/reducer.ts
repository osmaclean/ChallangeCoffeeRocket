import { Product } from '@/@types/interfaces'
import { ActionTypes } from './actions'

export interface CartProductsStateProps {
  cartItems: Product[]
}

export function cartManager(cartState: CartProductsStateProps, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return {
        ...cartState,
        cartItems: [...cartState.cartItems, action.payload.newItem],
      }

    case ActionTypes.REMOVE_ITEM_TO_CART:
      return {
        ...cartState,
        cartItems: cartState.cartItems.filter(
          (item) => item.id !== action.payload.item_id,
        ),
      }

    case ActionTypes.UPDATE_CART_QTY:
      const { item_id, item_qty } = action.payload
      return {
        ...cartState,
        cartItems: cartState.cartItems.map((item) => {
          if (item.id === item_id) {
            return {
              ...item,
              qty: item_qty,
            }
          }
          return item
        }),
      }

    case ActionTypes.CLEAR_CART:
      return {
        cartItems: [],
      }

    default:
      return cartState
  }
}
