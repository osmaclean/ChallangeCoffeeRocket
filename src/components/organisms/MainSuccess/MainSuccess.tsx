'use client'

import { baloo_2 } from '@/app/layout'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import React, { useContext } from 'react'
import Image from 'next/image'
import { FormContext } from '@/context/FormContext'

export default function MainSuccess() {
  const { formOrder } = useContext(FormContext)

  return (
    <main className="bg-base-50 w-full items-start flex flex-col justify-between px-20 py-12 gap-8">
      <div className="w-full flex flex-col items-start justify-center">
        <h1
          className={`${baloo_2.className} text-primary-100 text-3xl font-extrabold`}
        >
          Uhu! Pedido confirmado
        </h1>
        <h5 className="text-base-800 text-xl">
          Agora é só aguardar que logo o café chegará até você
        </h5>
      </div>

      <section className="flex w-full items-start justify-center gap-4 py-8">
        <div className="w-1/2 borderGradient p-[1px] rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-md rounded-br-md">
          <div className="innerContent bg-base-50 p-10 h-full flex gap-8 flex-col items-start justify-center">
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center justify-center p-2 bg-secondary-200 rounded-full">
                <MapPin size={16} weight="fill" className="text-base-50" />
              </div>
              <div className="text-base text-base-700 leading-5 w-[70%]">
                Entrega em{' '}
                <span className="font-bold">
                  {`Rua ${formOrder.street}`}, {formOrder.number}{' '}
                  {formOrder.complement}
                </span>{' '}
                {formOrder.neighborhood} - {formOrder.city}, {formOrder.uf}
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center justify-center p-2 bg-primary-200 rounded-full">
                <Timer size={16} weight="fill" className="text-base-50" />
              </div>
              <div className="text-base flex flex-col items-start justify-center text-base-700 leading-5">
                <p>Previsão de entrega</p>
                <p className="font-bold">20 min - 30 min</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center justify-center p-2 bg-primary-100 rounded-full">
                <CurrencyDollar
                  size={16}
                  weight="fill"
                  className="text-base-50"
                />
              </div>
              <div className="text-base flex flex-col items-start justify-center text-base-700 leading-5">
                <p>Pagamento na entrega</p>
                <p className="font-bold">
                  {formOrder.methodPayment === 'debitCard'
                    ? 'Cartão de Débito'
                    : formOrder.methodPayment === 'creditCard'
                      ? 'Cartão de Crédito'
                      : formOrder.methodPayment === 'cash' && 'Dinheiro'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            alt="Image of Success"
            src={'/success.png'}
            width={1968}
            height={1172}
            className="w-[27rem]"
          />
        </div>
      </section>
    </main>
  )
}
