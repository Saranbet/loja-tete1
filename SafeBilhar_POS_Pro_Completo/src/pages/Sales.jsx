import React from 'react'
import { useApp } from '../context/AppContext'
import { mt } from '../utils/money'

export default function Sales() {
  const { sales } = useApp()
  return (
    <div className="p-4 lg:p-8">
      <div className="card p-6">
        <h3 className="text-xl font-extrabold mb-5">Histórico de vendas</h3>
        {sales.length === 0 ? <p className="text-slate-500">Ainda não há vendas. Faça uma venda no POS.</p> :
          <div className="space-y-3">{sales.map(s => (
            <div key={s.id} className="p-4 rounded-2xl bg-slate-50 flex justify-between">
              <div><p className="font-bold">Venda #{s.id}</p><p className="text-sm text-slate-500">{s.date} · {s.paymentMethod}</p></div>
              <p className="font-extrabold text-blue-600">{mt(s.total)}</p>
            </div>
          ))}</div>
        }
      </div>
    </div>
  )
}
