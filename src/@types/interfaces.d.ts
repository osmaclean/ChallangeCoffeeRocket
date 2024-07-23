import { IconProps } from 'phosphor-react'

export interface BenefitsHeroProps {
  bgColor: 'cart' | 'bag' | 'clock' | 'coffee'
  content: string
  icon: HTMLElement<IconProps>
}
