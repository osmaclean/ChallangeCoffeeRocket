import { IconProps } from 'phosphor-react'

export interface BenefitsHeroProps {
  bgColor: 'cart' | 'bag' | 'clock' | 'coffee'
  content: string
  icon: HTMLElement<IconProps>
}

export interface ProductProps {
  id: number
  imgPath: string
  label: string[]
  name: string
  description: string
  price: number
}

export interface ComponentCoffeeCardHomeProps {
  item: ProductProps
}

export interface Product {
  id: number
  name: string
  img_path: string
  price: number
  qty: number
}

export interface ComponentCoffeeCardCheckoutProps {
  item: Product
}
