import React, { useState } from 'react'
import { Lock, Mail } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Login() {
  const { setUser } = useApp()
  const [email, setEmail] = useState('admin@safebilhar.com')
  const [password, setPassword] = useState('123456')

  const login = (e) => {
    e.preventDefault()
    setUser({ name: 'Administrador', email })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 grid place-items-center p-5">
      <form onSubmit={login} className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="w-20 h-20 rounded-3xl bg-blue-600 grid place-items-center text-4xl mx-auto mb-4">🎱</div>
        <h1 className="text-3xl font-extrabold text-center">Safe Bilhar POS</h1>
        <p className="text-slate-500 text-center mt-2 mb-8">Sistema profissional de vendas</p>

        <label className="text-sm font-bold text-slate-600">Email</label>
        <div className="input flex items-center gap-3 mt-2 mb-4">
          <Mail size={18} className="text-slate-400" />
          <input className="outline-none flex-1" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <label className="text-sm font-bold text-slate-600">Senha</label>
        <div className="input flex items-center gap-3 mt-2 mb-6">
          <Lock size={18} className="text-slate-400" />
          <input type="password" className="outline-none flex-1" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <button className="btn-primary w-full text-lg">Entrar no sistema</button>
        <p className="text-center text-xs text-slate-400 mt-5">Demo: admin@safebilhar.com / 123456</p>
      </form>
    </div>
  )
}
