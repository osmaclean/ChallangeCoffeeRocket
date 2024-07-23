import { IconProps } from 'phosphor-react'

export interface BenefitsHeroProps {
  bgColor: 'cart' | 'bag' | 'clock' | 'coffee'
  content: string
  icon: HTMLElement<IconProps>
}

export interface CoffeeProductsCardsProps {
  id: number
  imgPath: string
  label: string[]
  name: string
  description: string
  price: string
}

export interface ComponentCoffeeCardHomeProps {
  item: CoffeeProductsCardsProps
}
