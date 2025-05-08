"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  observation?: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  return context;
}
