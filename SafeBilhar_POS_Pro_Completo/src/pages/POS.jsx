import React, { useState } from 'react'
import { Minus, Plus, Printer, Search, Trash2 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { mt } from '../utils/money'

export default function POS() {
  const { products, cart, addToCart, updateQty, clearCart, finishSale } = useApp()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const [payment, setPayment] = useState('Dinheiro')
  const categories = ['Todos', ...new Set(products.map(p => p.category))]
  const shown = products.filter(p => (category === 'Todos' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()))
  const total = cart.reduce((s, item) => s + item.price * item.qty, 0)

  const sell = () => {
    const sale = finishSale(payment)
    if (sale) setTimeout(() => window.print(), 300)
  }

  return (
    <div className="p-4 lg:p-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
      <section className="xl:col-span-2 space-y-5">
        <div className="card p-4 flex flex-col md:flex-row gap-3">
          <div className="input flex items-center gap-2">
            <Search size={18} className="text-slate-400" />
            <input className="outline-none flex-1" placeholder="Pesquisar produto ou código..." value={query} onChange={e => setQuery(e.target.value)} />
          </div>
          <select className="input md:w-56" value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
          {shown.map(product => (
            <button key={product.id} onClick={() => addToCart(product)} className="card p-4 text-left hover:scale-[1.02] transition">
              <div className="h-28 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center text-5xl mb-3">{product.image}</div>
              <h3 className="font-extrabold">{product.name}</h3>
              <p className="text-sm text-slate-500">{product.code} · Stock {product.stock}</p>
              <p className="text-blue-600 font-extrabold text-lg mt-2">{mt(product.price)}</p>
            </button>
          ))}
        </div>
      </section>

      <aside className="card p-5 h-fit sticky top-24">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-extrabold">Carrinho</h3>
          <button onClick={clearCart} className="text-red-500"><Trash2 size={20} /></button>
        </div>

        <div className="space-y-3 max-h-[430px] overflow-auto pr-1">
          {cart.length === 0 && <p className="text-slate-500 text-center py-10">Nenhum produto adicionado</p>}
          {cart.map(item => (
            <div key={item.id} className="p-3 rounded-2xl bg-slate-50">
              <div className="flex justify-between gap-3">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-slate-500">{mt(item.price)}</p>
                </div>
                <p className="font-extrabold">{mt(item.price * item.qty)}</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <button className="btn-soft p-2" onClick={() => updateQty(item.id, item.qty - 1)}><Minus size={16} /></button>
                <span className="font-bold">{item.qty}</span>
                <button className="btn-soft p-2" onClick={() => updateQty(item.id, item.qty + 1)}><Plus size={16} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t mt-5 pt-5 space-y-3">
          <select className="input" value={payment} onChange={e => setPayment(e.target.value)}>
            <option>Dinheiro</option>
            <option>M-Pesa</option>
            <option>E-Mola</option>
            <option>Cartão</option>
          </select>
          <div className="flex justify-between text-2xl font-extrabold">
            <span>Total</span><span>{mt(total)}</span>
          </div>
          <button onClick={sell} className="btn-primary w-full flex items-center justify-center gap-2 text-lg"><Printer size={20} /> Finalizar e imprimir</button>
        </div>
      </aside>
    </div>
  )
}
