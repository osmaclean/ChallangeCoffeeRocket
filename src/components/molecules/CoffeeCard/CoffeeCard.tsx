import { CartContext } from '@/context/CartContext'
import { Minus, Plus, Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { ComponentCoffeeCardCheckoutProps } from '@/@types/interfaces'
import Image from 'next/image'

export default function CoffeeCard({ item }: ComponentCoffeeCardCheckoutProps) {
  const { removeItemFromCart, updateCartItemQty } = useContext(CartContext)

  const handleAddCoffee = () => updateCartItemQty(item.id, item.qty + 1)

  const handleReduceCoffee = () => {
    if (item.qty > 1) updateCartItemQty(item.id, item.qty - 1)
  }

  const handleRemove = () => removeItemFromCart(item.id)

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-[80%] items-center justify-start gap-5">
          <Image
            alt={'Image Coffee'}
            aria-label={'Image Coffee'}
            src={item.img_path}
            width={250}
            height={250}
            className="w-16"
          />
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <h6>{item.name}</h6>
            <div className="flex w-full items-center justify-start gap-2">
              <div className="flex items-center justify-between bg-base-400 py-1 px-2 gap-2 rounded-md">
                <button type="button" className="border border-transparent">
                  <Minus
                    size={14}
                    onClick={handleReduceCoffee}
                    className="text-secondary-200 duration-300 hover:text-secondary-100"
                  />
                </button>
                <span className="text-base font-normal text-base-900">
                  {item.qty}
                </span>
                <button type="button" className="border border-transparent">
                  <Plus
                    size={14}
                    onClick={handleAddCoffee}
                    className="text-secondary-200 duration-300 hover:text-secondary-100"
                  />
                </button>
              </div>
              <button
                type="button"
                onClick={handleRemove}
                className="text-xs uppercase hover:bg-base-500 bg-base-400 p-2 duration-300 hover:text-base-800 border border-transparent rounded-md w-full flex items-center text-base-700 justify-center gap-2"
              >
                <Trash size={16} className="text-secondary-200" />
                remover
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-16 flex-1 items-center justify-center">
          <span className="h-full text-end w-full font-bold text-base-800">
            R$ {(item.qty * item.price).toFixed(2)}
          </span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-base-400"></div>
    </>
  )
}
