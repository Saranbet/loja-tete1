import React, { createContext, useContext, useMemo, useState } from 'react'
import { demoProducts, demoCustomers } from '../data/demoData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState(demoProducts)
  const [customers, setCustomers] = useState(demoCustomers)
  const [sales, setSales] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(item => item.id === product.id)
      if (found) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) return setCart(prev => prev.filter(item => item.id !== id))
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item))
  }

  const clearCart = () => setCart([])

  const finishSale = (paymentMethod = 'Dinheiro', customer = 'Cliente Balcão') => {
    if (!cart.length) return null
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    const sale = {
      id: Date.now(),
      date: new Date().toLocaleString('pt-MZ'),
      items: cart,
      total,
      paymentMethod,
      customer
    }
    setSales(prev => [sale, ...prev])
    setProducts(prev => prev.map(p => {
      const sold = cart.find(c => c.id === p.id)
      return sold ? { ...p, stock: Math.max(0, p.stock - sold.qty) } : p
    }))
    setCart([])
    return sale
  }

  const value = useMemo(() => ({
    user, setUser, products, setProducts, customers, setCustomers, sales,
    cart, addToCart, updateQty, clearCart, finishSale
  }), [user, products, customers, sales, cart])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
