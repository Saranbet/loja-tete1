import React from 'react'

export default function Settings() {
  return (
    <div className="p-4 lg:p-8 max-w-3xl">
      <div className="card p-6 space-y-5">
        <h3 className="text-xl font-extrabold">Configurações da loja</h3>
        <div><label className="font-bold">Nome da loja</label><input className="input mt-2" defaultValue="Safe Bilhar" /></div>
        <div><label className="font-bold">WhatsApp</label><input className="input mt-2" defaultValue="875563554" /></div>
        <div><label className="font-bold">Moeda</label><input className="input mt-2" defaultValue="MT" /></div>
        <button className="btn-primary">Guardar configurações</button>
      </div>
    </div>
  )
}
