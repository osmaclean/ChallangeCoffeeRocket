'use client'

import { MapPin, ShoppingCart } from 'phosphor-react'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-base-50 w-full items-center flex justify-between px-40 py-8">
      <Image
        alt="Logo Coffee Icon"
        src={'/logo.png'}
        height={40}
        width={85}
        className="w-20"
      />
      <div className="flex items-center justify-center gap-3">
        <span className="flex items-center justify-center gap-3 text-secondary-100 p-2 bg-secondary-300 border-2 border-secondary-300 rounded-md">
          <MapPin weight="fill" size={20} className="text-secondary-200" />
          15 - ZS
        </span>

        <button
          type="button"
          className="p-2 flex items-center justify-center text-primary-100 bg-primary-300 border-2 border-primary-300 rounded-md"
        >
          <ShoppingCart size={24} weight="fill" />
        </button>
      </div>
    </header>
  )
}
