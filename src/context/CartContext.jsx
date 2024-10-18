'use client';
import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => setCart((prev) => [...prev, item]);
  const removeItem = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
