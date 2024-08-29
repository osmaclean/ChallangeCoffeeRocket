'use client'

import { baloo_2 } from '@/app/layout'
import { useForm } from 'react-hook-form'
import { useCallback, useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { FormContext, UserDataProps } from '@/context/FormContext'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, Zoom } from 'react-toastify'
import FormContainer1st from '../FormContainer1st/FormContainer1st'
import FormContainer2nd from '../FormContainer2nd/FormContainer2nd'
import CoffeeCard from '@/components/molecules/CoffeeCard/CoffeeCard'
import * as z from 'zod'

const newPurchaseFormSchema = z.object({
  cep: z.string().min(8, 'CEP deve ter no mínimo 8 caracteres'),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string().length(2, 'UF deve ter 2 caracteres'),
  methodPayment: z
    .string()
    .min(1, 'Você precisa escolher um método de pagamento'),
})

export type NewPurchaseFormInputs = z.infer<typeof newPurchaseFormSchema>

export default function MainCheckout() {
  const { cartItems, deliveryCost, totalToPay, clearCart } =
    useContext(CartContext)
  const { handleFormOrder } = useContext(FormContext)
  const { push } = useRouter()

  const notify = useCallback((message: string, type: 'success' | 'error') => {
    toast[type](message, {
      position: 'bottom-right',
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      theme: 'light',
      transition: Zoom,
    })
  }, [])

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  )

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    register,
    reset,
    control,
  } = useForm<NewPurchaseFormInputs>({
    resolver: zodResolver(newPurchaseFormSchema),
  })

  const onSubmit = (data: NewPurchaseFormInputs) => {
    const formUsuario: UserDataProps = {
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      uf: data.uf,
      methodPayment: data.methodPayment,
    }

    handleFormOrder(formUsuario)
    reset()
    clearCart()
    notify('Pedido confirmado com sucesso!', 'success')
    setTimeout(() => push('/success'), 3000)
  }

  const onError = () => {
    const firstErrorKey = Object.keys(errors)[0] as keyof typeof errors
    const errorMessage = errors[firstErrorKey]?.message || 'Erro no formulário'

    notify(errorMessage, 'error')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="bg-base-50 w-full items-start flex justify-between px-20 py-6 gap-8"
    >
      <div className="w-[60%] flex flex-col justify-center items-start gap-4">
        <h1 className={`font-bold ${baloo_2.className}`}>
          Complete seu pedido
        </h1>
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <FormContainer1st isSubmitting={isSubmitting} register={register} />
          <FormContainer2nd control={control} />
        </div>
      </div>
      <div className="w-[40%] flex flex-col justify-center items-start gap-4">
        <h1 className={`font-bold ${baloo_2.className}`}>Cafés selecionados</h1>

        <section className="w-full flex flex-col items-center justify-center gap-6 bg-base-200 rounded-tl-md p-10 rounded-br-md rounded-tr-[48px] rounded-bl-[48px]">
          <div className="flex flex-col justify-center items-center w-full gap-3">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return <CoffeeCard item={item} key={item.id} />
              })
            ) : (
              <p className="flex justify-center text-sm text-base-600 p-6 font-medium uppercase">
                Sem itens no carrinho!
              </p>
            )}

            <div className="w-full flex item justify-between text-base-700">
              <h4 className="text-sm">Total de itens</h4>
              <h6 className="text-base">R$ {totalToPay.toFixed(2)}</h6>
            </div>

            <div className="w-full flex item justify-between text-base-700">
              <h4 className="text-sm">Entrega</h4>
              <h6 className="text-base">R$ {deliveryCost.toFixed(2)}</h6>
            </div>

            <div className="w-full flex item justify-between text-base-800 text-xl font-bold">
              <h4>Total</h4>
              <h6>R$ {totalPrice.toFixed(2)}</h6>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || cartItems.length === 0}
            className="uppercase disabled:cursor-not-allowed disabled:opacity-70 text-base-50 text-sm font-bold w-full py-3 bg-primary-200 rounded-md"
          >
            confirmar pedido
          </button>
        </section>
      </div>
    </form>
  )
}
