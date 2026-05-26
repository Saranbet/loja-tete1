import React from 'react'
import { Bell, Menu, Search } from 'lucide-react'

export default function Header({ title, setMobileOpen }) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-4 flex items-center gap-4 sticky top-0 z-20">
      <button className="lg:hidden btn-soft p-3" onClick={() => setMobileOpen(true)}><Menu /></button>
      <div>
        <h2 className="text-2xl font-extrabold">{title}</h2>
        <p className="text-slate-500 text-sm">Gestão de vendas, stock e relatórios</p>
      </div>
      <div className="ml-auto hidden md:flex items-center bg-slate-100 rounded-2xl px-4 py-3 w-80">
        <Search size={18} className="text-slate-400" />
        <input className="bg-transparent outline-none px-3 w-full" placeholder="Pesquisar..." />
      </div>
      <button className="relative btn-soft p-3"><Bell /><span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 grid place-items-center">3</span></button>
    </header>
  )
}
