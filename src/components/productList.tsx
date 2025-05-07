// components/ProductList.tsx

import { ProductCard } from "./productCard";

export default function ProductList() {
  return (
    <div className="p-8 mb-6">
      <h1 className="text-lg font-semibold mb-6">ITEMS</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
