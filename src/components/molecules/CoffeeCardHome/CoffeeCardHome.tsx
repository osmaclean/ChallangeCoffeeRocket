'use client'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ComponentCoffeeCardHomeProps } from '@/@types/interfaces'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CoffeeCardHome({ item }: ComponentCoffeeCardHomeProps) {
  const [count, setCount] = useState<number>(1)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count > 1) setCount((prevCount) => prevCount - 1)
  }

  return (
    <section className="w-[17rem] bg-base-200 p-5 rounded-tr-[2.25rem] rounded-tl-md rounded-br-md rounded-bl-[2.25rem] flex items-center justify-center flex-col gap-4">
      <div className="flex-col flex items-center justify-center gap-3">
        <Image
          src={item.imgPath}
          alt="Coffee Image"
          width={100}
          height={100}
          className="w-24 -mt-8"
        />
        <div className="flex items-center justify-center gap-2">
          {item.label.map((label) => (
            <span
              key={label}
              className="uppercase font-bold bg-primary-300 text-primary-100 px-2 py-1 rounded-full text-xs"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col text-center items-center justify-center gap-2">
          <h5 className="font-baloo font-extrabold text-base-800 text-xl">
            {item.name}
          </h5>
          <p className="font-roboto font-normal text-sm text-base-600">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 w-full">
          <span className="font-normal font-roboto text-sm text-base-700">
            R${' '}
            <strong className="font-baloo text-2xl font-extrabold">
              {item.price}
            </strong>
          </span>

          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-between bg-base-400 p-2 gap-1 rounded-md">
              <button type="button">
                <Minus
                  size={16}
                  onClick={handleDecrement}
                  className="text-secondary-200 duration-300 hover:text-secondary-100"
                />
              </button>
              <span className="font-roboto text-base font-normal text-base-900">
                {count}
              </span>
              <button type="button">
                <Plus
                  size={16}
                  onClick={handleIncrement}
                  className="text-secondary-200 duration-300 hover:text-secondary-100"
                />
              </button>
            </div>

            <button
              type="button"
              className="p-2 flex items-center justify-center text-base-50 bg-secondary-100 border-2 border-secondary-100 rounded-md"
            >
              <ShoppingCart size={20} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
