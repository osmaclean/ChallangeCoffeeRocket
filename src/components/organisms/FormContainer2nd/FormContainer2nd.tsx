import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface SubmittingProps {
  isSubmitting: boolean
  register: UseFormRegister<FieldValues>
}

export default function FormContainer2nd({
  isSubmitting,
  register,
}: SubmittingProps) {
  return (
    <section className="p-10 flex w-full bg-base-200 rounded-md flex-col items-start justify-start gap-8">
      <div className="flex items-start w-full justify-start gap-2 py-2">
        <CurrencyDollar className="text-secondary-200" size={24} />
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-medium text-base text-base-800">Pagamento</h1>
          <h5 className="font-normal text-sm text-base-700">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </h5>
        </div>
      </div>
      <div className="flex w-full items-start justify-start gap-4">
        <label
          htmlFor="creditCard"
          className="flex flex-1 group hover:bg-base-500 duration-300 items-center justify-start gap-2 px-3 py-4 cursor-pointer rounded-md bg-base-400"
        >
          <CreditCard size={16} className="text-secondary-200" />
          <span className="uppercase group-hover:text-base-800 text-base-700 text-sm">
            cartão de crédito
          </span>
        </label>

        <label
          htmlFor="debitCard"
          className="flex flex-1 group hover:bg-base-500 duration-300 items-center justify-start gap-2 px-3 py-4 cursor-pointer rounded-md bg-base-400"
        >
          <Bank size={16} className="text-secondary-200" />
          <span className="uppercase group-hover:text-base-800 text-base-700 text-sm">
            cartão de débito
          </span>
        </label>

        <label
          htmlFor="cash"
          className="flex w-40 group hover:bg-base-500 duration-300 items-center justify-start gap-2 px-3 py-4 cursor-pointer rounded-md bg-base-400"
        >
          <Money size={16} className="text-secondary-200" />
          <span className="uppercase group-hover:text-base-800 text-base-700 text-sm">
            dinheiro
          </span>
        </label>
      </div>
    </section>
  )
}
