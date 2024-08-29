import { useState, createContext, ReactNode } from 'react'

export interface UserDataProps {
  cep: string
  street: string | null
  number: string | null
  complement?: string | null
  neighborhood: string | null
  city: string | null
  uf: string | null
  methodPayment: string | null
}

interface FormContextProps {
  formOrder: UserDataProps
  handleFormOrder: (order: UserDataProps) => void
}

export const FormContext = createContext({} as FormContextProps)

interface FormContextProviderProps {
  children: ReactNode
}

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formOrder, setFormOrder] = useState({} as UserDataProps)

  const handleFormOrder = (order: UserDataProps) => {
    setFormOrder(order)
  }

  return (
    <FormContext.Provider value={{ formOrder, handleFormOrder }}>
      {children}
    </FormContext.Provider>
  )
}
