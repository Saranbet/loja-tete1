import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { mt } from '../utils/money'

export default function Products() {
  const { products, setProducts } = useApp()
  const [name, setName] = useState('')
  const add = () => {
    if (!name.trim()) return
    setProducts([{ id: Date.now(), name, category: 'Novo', price: 0, cost: 0, stock: 0, code: 'NEW', image: '🆕' }, ...products])
    setName('')
  }
  return (
    <div className="p-4 lg:p-8 space-y-5">
      <div className="card p-5 flex flex-col md:flex-row gap-3">
        <input className="input" placeholder="Nome do novo produto" value={name} onChange={e => setName(e.target.value)} />
        <button className="btn-primary flex items-center gap-2 justify-center" onClick={add}><Plus size={18}/> Adicionar</button>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500">
            <tr><th className="p-4">Produto</th><th>Categoria</th><th>Preço</th><th>Stock</th><th>Código</th></tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-t">
                <td className="p-4 font-bold">{p.image} {p.name}</td>
                <td>{p.category}</td>
                <td className="font-bold text-blue-600">{mt(p.price)}</td>
                <td><span className={`badge ${p.stock <= 10 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>{p.stock}</span></td>
                <td>{p.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
