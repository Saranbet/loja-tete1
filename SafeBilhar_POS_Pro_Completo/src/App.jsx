import React, { useState } from 'react'
import { AppProvider, useApp } from './context/AppContext'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import POS from './pages/POS'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Sales from './pages/Sales'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

const titles = {
  dashboard: 'Dashboard',
  pos: 'Ponto de Venda',
  products: 'Produtos e Stock',
  customers: 'Clientes',
  sales: 'Vendas',
  reports: 'Relatórios',
  settings: 'Configurações'
}

function Shell() {
  const { user } = useApp()
  const [page, setPage] = useState('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)
  if (!user) return <Login />

  const pages = {
    dashboard: <Dashboard />,
    pos: <POS />,
    products: <Products />,
    customers: <Customers />,
    sales: <Sales />,
    reports: <Reports />,
    settings: <Settings />
  }

  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar page={page} setPage={setPage} />
      <MobileNav open={mobileOpen} setOpen={setMobileOpen} page={page} setPage={setPage} />
      <main className="flex-1 min-w-0">
        <Header title={titles[page]} setMobileOpen={setMobileOpen} />
        {pages[page]}
      </main>
    </div>
  )
}

export default function App() {
  return <AppProvider><Shell /></AppProvider>
}
