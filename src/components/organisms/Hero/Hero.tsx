'use client'

import { BenefitsHeroProps } from '@/@types/interfaces'
import Image from 'next/image'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import React from 'react'

const benefitsBox1st: BenefitsHeroProps[] = [
  {
    content: 'Compra simples e segura',
    bgColor: 'cart',
    icon: <ShoppingCart size={16} className="text-base-50" weight="fill" />,
  },
  {
    content: 'Entrega rápida e rastreada',
    bgColor: 'clock',
    icon: <Timer size={16} className="text-base-50" weight="fill" />,
  },
]

const benefitsBox2nd: BenefitsHeroProps[] = [
  {
    content: 'Embalagem mantém o café intacto',
    bgColor: 'bag',
    icon: <Package size={16} className="text-base-50" weight="fill" />,
  },
  {
    content: 'O café chega fresquinho até você',
    bgColor: 'coffee',
    icon: <Coffee size={16} className="text-base-50" weight="fill" />,
  },
]

export default function Hero() {
  return (
    <section className="bg-base-50 w-full items-center flex justify-between px-40 py-24 text-2xl">
      <div className="flex items-start justify-center flex-col w-[51%] gap-4">
        <h1 className="font-bold font-baloo text-4xl">
          Encontre o café perfeito para qualquer hora do dia
        </h1>

        <p className="font-normal font-roboto text-base">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <section className="flex mt-12 items-center font-roboto justify-start flex-wrap w-full gap-4">
          <div className="flex flex-col items-start justify-center gap-4">
            {benefitsBox1st.map((item) => (
              <div
                key={item.content}
                className="flex items-center justify-center gap-2"
              >
                <span
                  className={`p-2 rounded-full ${
                    item.bgColor === 'cart'
                      ? 'bg-primary-100'
                      : item.bgColor === 'clock'
                        ? 'bg-primary-200'
                        : ''
                  }`}
                >
                  {item.icon}
                </span>
                <p className="text-sm text-base-700">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            {benefitsBox2nd.map((item) => (
              <div
                key={item.content}
                className="flex items-center justify-center gap-2"
              >
                <span
                  className={`p-2 rounded-full ${
                    item.bgColor === 'bag'
                      ? 'bg-base-700'
                      : item.bgColor === 'coffee'
                        ? 'bg-secondary-100'
                        : ''
                  }`}
                >
                  {item.icon}
                </span>
                <p className="text-sm text-base-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex items-center justify-end flex-1">
        <Image
          src={'/imgHero.png'}
          alt="Section Hero Image"
          width={476}
          height={360}
          className="w-[27rem]"
        />
      </div>
    </section>
  )
}
