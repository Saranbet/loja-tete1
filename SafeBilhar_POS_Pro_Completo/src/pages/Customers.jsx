import React from 'react'
import { useApp } from '../context/AppContext'
import { mt } from '../utils/money'

export default function Customers() {
  const { customers } = useApp()
  return (
    <div className="p-4 lg:p-8">
      <div className="card overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500"><tr><th className="p-4">Cliente</th><th>Telefone</th><th>Total comprado</th></tr></thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id} className="border-t"><td className="p-4 font-bold">{c.name}</td><td>{c.phone}</td><td className="font-bold">{mt(c.total)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
