import { MapPinLine } from 'phosphor-react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface SubmittingProps {
  isSubmitting: boolean
  register: UseFormRegister<FieldValues>
}

export default function FormContainer1st({
  isSubmitting,
  register,
}: SubmittingProps) {
  return (
    <section className="p-10 flex w-full bg-base-200 rounded-md flex-col items-start justify-start gap-8">
      <div className="flex items-start w-full justify-start gap-2 py-2">
        <MapPinLine className="text-primary-100" size={24} />
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-medium text-base text-base-800">
            Endereço de entrega
          </h1>
          <h5 className="font-normal text-sm text-base-700">
            Informe o endereço onde deseja receber seu pedido
          </h5>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-4">
        <label
          htmlFor="cep"
          className="flex w-52 flex-col items-start justify-center gap-2"
        >
          <input
            type="text"
            className={`w-full text-base-900 disabled:cursor-not-allowed disabled:opacity-80 placeholder:text-base-600 border px-3 py-2 rounded-sm bg-base-300 border-base-400`}
            placeholder="CEP"
            required
            disabled={isSubmitting}
            {...register('cep')}
          />
        </label>

        <label
          htmlFor="street"
          className="flex w-full flex-col items-start justify-center gap-2"
        >
          <input
            type="text"
            className={`w-full text-base-900 disabled:cursor-not-allowed disabled:opacity-80 placeholder:text-base-600 border px-3 py-2 rounded-sm bg-base-300 border-base-400`}
            placeholder="Rua"
            required
            disabled={isSubmitting}
            {...register('street')}
          />
        </label>

        <div className="flex w-full gap-3 items-center justify-center">
          <label
            htmlFor="number"
            className="flex w-52 flex-col items-start justify-center gap-2"
          >
            <input
              type="text"
              className={`w-full text-base-900 disabled:cursor-not-allowed disabled:opacity-80 placeholder:text-base-600 border px-3 py-2 rounded-sm bg-base-300 border-base-400`}
              placeholder="Número"
              required
              disabled={isSubmitting}
              {...register('number')}
            />
          </label>

          <label
            htmlFor="complement"
            className="flex flex-1 w-full flex-col relative items-start justify-center gap-2"
          >
            <span className="text-base-600 italic absolute right-4 text-xs">
              Opcional
            </span>
            <input
              type="text"
              className={`w-full text-base-900 disabled:cursor-not-allowed disabled:opacity-80 placeholder:text-base-600 border pr-20 pl-3 py-2 rounded-sm bg-base-300 border-base-400`}
              placeholder="Complemento"
              required
              disabled={isSubmitting}
              {...register('complement')}
            />
          </label>
        </div>

        <div className="flex w-full gap-3 items-center justify-center">
          <label
            htmlFor="neighborhood"
            className="flex w-52 flex-col items-start justify-center gap-2"
          >
            <input
              type="text"
              className={`w-full text-base-900 disabled:cursor-not-allowed disabled:opacity-80 placeholder:text-base-600 border px-3 py-2 rounded-sm bg-base-300 border-base-400`}
              placeholder="Bairro"
              required
              disabled={isSubmitting}
              {...register('neighborhood')}
            />
          </label>

          <label
            htmlFor="city"
            className="flex w-64 flex-col items-start justify-center gap-2"
          >
            <input
              type="text"
              className={`w-full text-base-900 disabled:cursor-not-allowed disabled:opacity-80 placeholder:text-base-600 border px-3 py-2 rounded-sm bg-base-300 border-base-400`}
              placeholder="Cidade"
              required
              disabled={isSubmitting}
              {...register('city')}
            />
          </label>

          <label
            htmlFor="uf"
            className="flex flex-1 flex-col items-start justify-center gap-2"
          >
            <input
              type="text"
              className={`w-full text-base-900 disabled:cursor-not-allowed disabled:opacity-80 placeholder:text-base-600 border px-3 py-2 rounded-sm bg-base-300 border-base-400`}
              placeholder="UF"
              required
              disabled={isSubmitting}
              {...register('uf')}
            />
          </label>
        </div>
      </div>
    </section>
  )
}
