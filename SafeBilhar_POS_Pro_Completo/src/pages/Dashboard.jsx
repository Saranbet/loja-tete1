import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Boxes, ShoppingCart, Users, Wallet } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { salesChart } from '../data/demoData'
import { mt } from '../utils/money'

function Stat({ label, value, icon: Icon, tone='blue' }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500 font-medium">{label}</p>
          <h3 className="text-3xl font-extrabold mt-2">{value}</h3>
        </div>
        <div className={`w-14 h-14 rounded-2xl grid place-items-center bg-${tone}-100 text-${tone}-600`}>
          <Icon size={26} />
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { products, customers, sales } = useApp()
  const todayTotal = sales.reduce((s, v) => s + v.total, 0) || 25450
  return (
    <div className="p-4 lg:p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <Stat label="Vendas Hoje" value={mt(todayTotal)} icon={Wallet} />
        <Stat label="Produtos" value={products.length} icon={Boxes} tone="green" />
        <Stat label="Clientes" value={customers.length} icon={Users} tone="purple" />
        <Stat label="Transações" value={sales.length || 12} icon={ShoppingCart} tone="orange" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="card p-6 xl:col-span-2">
          <h3 className="text-xl font-extrabold mb-4">Vendas da semana</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesChart}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip formatter={(v) => mt(v)} />
                <Bar dataKey="vendas" radius={[12,12,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-extrabold mb-4">Stock baixo</h3>
          <div className="space-y-3">
            {products.filter(p => p.stock <= 10).map(p => (
              <div key={p.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <div>
                  <p className="font-bold">{p.name}</p>
                  <p className="text-sm text-slate-500">{p.category}</p>
                </div>
                <span className="badge bg-red-100 text-red-600">{p.stock}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
