import React from 'react'
import Sidebar from './Sidebar'

export default function MobileNav({ open, setOpen, page, setPage }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="relative w-72 h-full" onClick={() => setOpen(false)}>
        <Sidebar page={page} setPage={setPage} />
      </div>
    </div>
  )
}
