"use client";

import { useEffect, useState } from "react";
import { ProductCardAdmin } from "./_components/productCardAdmin";
import { ProductDialog } from "./_components/registerProductModal";
import { Product } from "@/type/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://localhost:7057/api/Produtos");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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

      {loading ? (
        <div className="w-full py-4 pb-4 bg-neutral-100 border rounded text-center">
          <p className="text-xl font-semibold">Carregando QRCodes...</p>
        </div>
      ) : (
        products.map((product) => (
          <ProductCardAdmin
            key={product.id}
            name={product.nome}
            description={product.descricao}
            imagem={product.imagem}
          />
        ))
      )}
    </div>
  );
}
