import React from 'react'
import { BarChart3, Boxes, Settings, ShoppingCart, Users, LayoutDashboard, Receipt, LogOut } from 'lucide-react'
import { useApp } from '../context/AppContext'

const items = [
  ['dashboard', 'Dashboard', LayoutDashboard],
  ['pos', 'POS', ShoppingCart],
  ['products', 'Produtos', Boxes],
  ['customers', 'Clientes', Users],
  ['sales', 'Vendas', Receipt],
  ['reports', 'Relatórios', BarChart3],
  ['settings', 'Configurações', Settings],
]

export default function Sidebar({ page, setPage }) {
  const { setUser } = useApp()
  return (
    <aside className="w-72 bg-slate-950 text-white hidden lg:flex flex-col p-5">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 grid place-items-center text-2xl">🎱</div>
        <div>
          <h1 className="text-xl font-extrabold leading-none">Safe Bilhar</h1>
          <p className="text-slate-400 text-sm mt-1">POS Profissional</p>
        </div>
      </div>

      <nav className="space-y-2 flex-1">
        {items.map(([key, label, Icon]) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition ${
              page === key ? 'bg-blue-600 shadow-lg' : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <Icon size={20} />
            <span className="font-semibold">{label}</span>
          </button>
        ))}
      </nav>

      <button onClick={() => setUser(null)} className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-800 text-slate-300">
        <LogOut size={20} /> Sair
      </button>
    </aside>
  )
}
