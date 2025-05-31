"use client";

import { useCart } from "@/context/cartContext";
import { CheckoutModal } from "./checkoutModal";
import { ProductCard } from "./productCard";
import { useEffect, useState } from 'react'

type ProductListProps = {
  orderFinished?: boolean;
};

export default function ProductList({
  orderFinished = false,
}: ProductListProps) {
  const { total } = useCart();
  const [produtos, setProdcuts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://localhost:7057/api/Produtos')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProdcuts(data)
      })
      .catch((err) => {
        console.error('Erro na requisição:', err)
      })
  }, [])

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 py-8 mb-6">
      <h1 className="text-lg font-semibold mb-6">ITENS</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {produtos.map((prod) => (
          <ProductCard key={prod.id} produto={prod} />
        ))}
      </div>
      {!orderFinished && total > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <CheckoutModal />
        </div>
      )}
    </div>
  );
}
