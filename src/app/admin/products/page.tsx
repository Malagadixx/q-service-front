"use client";

import { useEffect, useState } from "react";
import { ProductCardAdmin } from "./_components/productCardAdmin";
import { ProductDialog } from "./_components/registerProductModal";
import { Product } from "@/type/product"; // importa o tipo

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7057/api/Produtos")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div className="flex w-full p-4 flex-col space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[41.18px] font-bold">Produtos</h1>
        <ProductDialog />
      </div>

      <div className="p-6 space-y-8 border shadow-md rounded-md">
        {products.map((product) => (
          <ProductCardAdmin
            key={product.id}
            name={product.nome}
            description={product.descricao}
            imageUrl={product.imagemUrl}
          />
        ))}
      </div>
    </div>
  );
}
