import React from 'react'

export default function MainCheckout() {
  return (
    <main className="bg-base-50 w-full items-center flex justify-between px-40 py-6 gap-8">
      <div className="w-[60%] flex flex-col justify-center items-start gap-4">
        <h1 className="font-bold font-baloo">Complete seu pedido</h1>
        <section className="w-full h-72 bg-base-200 rounded-lg"></section>
      </div>
      <section className="w-[40%] h-72 bg-base-200 rounded-lg"></section>
    </main>
  )
}
