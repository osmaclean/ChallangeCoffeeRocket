'use client'

import { baloo_2 } from '@/app/layout'
import { useForm } from 'react-hook-form'
import { Fragment, useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'
import { Minus, Plus, Trash } from 'phosphor-react'
import FormContainer1st from '../FormContainer1st/FormContainer1st'
import FormContainer2nd from '../FormContainer2nd/FormContainer2nd'
import Image from 'next/image'

export default function MainCheckout() {
  const { cartItems } = useContext(CartContext)
  const [count, setCount] = useState<number>(0)

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm()

  const handleIncrement = () => setCount((prevCount) => prevCount + 1)

  const handleDecrement = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1)
  }

  const onSubmit = () => {
    console.log('Enviou!')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-base-50 w-full items-start flex justify-between px-20 py-6 gap-8"
    >
      <div className="w-[60%] flex flex-col justify-center items-start gap-4">
        <h1 className={`font-bold ${baloo_2.className}`}>
          Complete seu pedido
        </h1>
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <FormContainer1st isSubmitting={isSubmitting} register={register} />
          <FormContainer2nd isSubmitting={isSubmitting} register={register} />
        </div>
      </div>
      <div className="w-[40%] flex flex-col justify-center items-start gap-4">
        <h1 className={`font-bold ${baloo_2.className}`}>Cafés selecionados</h1>

        <section className="w-full flex flex-col items-center justify-center gap-6 bg-base-200 rounded-tl-md p-10 rounded-br-md rounded-tr-[48px] rounded-bl-[48px]">
          {cartItems.map((item) => (
            <Fragment key={item.name}>
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
                        <button
                          type="button"
                          className="border border-transparent"
                        >
                          <Minus
                            size={14}
                            onClick={handleDecrement}
                            className="text-secondary-200 duration-300 hover:text-secondary-100"
                          />
                        </button>
                        <span className="text-base font-normal text-base-900">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          className="border border-transparent"
                        >
                          <Plus
                            size={14}
                            onClick={handleIncrement}
                            className="text-secondary-200 duration-300 hover:text-secondary-100"
                          />
                        </button>
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="text-xs uppercase hover:bg-base-500 bg-base-400 p-2 duration-300 hover:text-base-800 border border-transparent rounded-md w-full flex items-center text-base-700 justify-center gap-2"
                        >
                          <Trash
                            size={16}
                            onClick={handleDecrement}
                            className="text-secondary-200"
                          />
                          remover
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 flex-1 items-center justify-center">
                  <span className="h-full text-end w-full -mt-2 font-bold text-base-800">
                    R$ {item.price}
                  </span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-base-400"></div>
            </Fragment>
          ))}

          <div className="flex flex-col justify-center items-center w-full gap-3">
            <div className="w-full flex item justify-between text-base-700">
              <h4 className="text-sm">Total de itens</h4>
              <h6 className="text-base">R$ 29,70</h6>
            </div>

            <div className="w-full flex item justify-between text-base-700">
              <h4 className="text-sm">Entrega</h4>
              <h6 className="text-base">R$ 3,50</h6>
            </div>

            <div className="w-full flex item justify-between text-base-800 text-xl font-bold">
              <h4>Total</h4>
              <h6>R$ 33,20</h6>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="uppercase disabled:cursor-not-allowed disabled:opacity-70 text-base-50 text-sm font-bold w-full py-3 bg-primary-200 rounded-md"
          >
            confirmar pedido
          </button>
        </section>
      </div>
    </form>
  )
}
