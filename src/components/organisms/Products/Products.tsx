import { ProductProps } from '@/@types/interfaces'
import CoffeeCardHome from '@/components/molecules/CoffeeCardHome/CoffeeCardHome'
import React from 'react'

const CoffeeProductsCards: ProductProps[] = [
  {
    id: 1,
    imgPath: '/coffee/coffee1.png',
    label: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: 2,
    imgPath: '/coffee/coffee2.png',
    label: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    id: 3,
    imgPath: '/coffee/coffee3.png',
    label: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  {
    id: 4,
    imgPath: '/coffee/coffee4.png',
    label: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  {
    id: 5,
    imgPath: '/coffee/coffee5.png',
    label: ['Tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  {
    id: 6,
    imgPath: '/coffee/coffee6.png',
    label: ['Tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    id: 7,
    imgPath: '/coffee/coffee7.png',
    label: ['Tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    id: 8,
    imgPath: '/coffee/coffee8.png',
    label: ['Tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    id: 9,
    imgPath: '/coffee/coffee9.png',
    label: ['Tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  {
    id: 10,
    imgPath: '/coffee/coffee10.png',
    label: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    id: 11,
    imgPath: '/coffee/coffee11.png',
    label: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    id: 12,
    imgPath: '/coffee/coffee12.png',
    label: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  {
    id: 13,
    imgPath: '/coffee/coffee13.png',
    label: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    id: 14,
    imgPath: '/coffee/coffee14.png',
    label: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]

export default function Products() {
  return (
    <section className="bg-base-50 w-full items-start flex flex-col justify-center px-40 py-8 gap-14">
      <h1 className="font-bold font-baloo text-base-800 text-3xl">
        Nossos cafés
      </h1>

      <div className="flex items-center justify-start gap-x-14 gap-y-10 flex-wrap">
        {CoffeeProductsCards.map((item) => (
          <CoffeeCardHome key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
