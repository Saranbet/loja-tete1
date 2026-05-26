import React from 'react'
import { useApp } from '../context/AppContext'
import { mt } from '../utils/money'

export default function Reports() {
  const { products, sales } = useApp()
  const total = sales.reduce((s, v) => s + v.total, 0)
  const stockValue = products.reduce((s, p) => s + p.price * p.stock, 0)
  return (
    <div className="p-4 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="card p-6"><p className="text-slate-500">Total vendido</p><h3 className="text-3xl font-extrabold mt-2">{mt(total)}</h3></div>
      <div className="card p-6"><p className="text-slate-500">Valor em stock</p><h3 className="text-3xl font-extrabold mt-2">{mt(stockValue)}</h3></div>
      <div className="card p-6"><p className="text-slate-500">Produtos cadastrados</p><h3 className="text-3xl font-extrabold mt-2">{products.length}</h3></div>
    </div>
  )
}
