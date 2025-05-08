"use client";

import { CheckoutModal } from "./checkoutModal";
import { ProductCard } from "./productCard";

export default function ProductList() {
  const produtos: Product[] = [
    {
      id: 1,
      name: "Pizza Calabresa",
      description: "Fatias de calabresa com queijo e molho.",
      price: 35.9,
      image: "/produto.png",
    },
    {
      id: 2,
      name: "Pizza Portuguesa",
      description: "Presunto, ovo, cebola, queijo e molho.",
      price: 39.9,
      image: "/produto.png",
    },
  ];

  return (
    <div className="p-8 mb-6">
      <h1 className="text-lg font-semibold mb-6">ITENS</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {produtos.map((prod) => (
          <ProductCard key={prod.id} produto={prod} />
        ))}
      </div>
      <CheckoutModal />
    </div>
  );
}
