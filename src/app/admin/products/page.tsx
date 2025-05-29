import { ProductCard } from "./_components/productCard";
import { ProductDialog } from "./_components/registerProductModal";

export default function Products() {
  return (
    <div className="flex w-full p-4 flex-col space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[41.18px] font-bold">Produtos</h1>
        <ProductDialog />
      </div>
      <div className="p-6 space-y-8 border shadow-md rounded-md">
        <ProductCard
          name="Capricciosa"
          description="molho de tomate, rodelas de tomate caqui, mussarela especial, alho refogado, pesto de manjericão e parmesão."
          imageUrl="/pizza1.png"
        />
        <ProductCard
          name="Frango catupiry"
          description="molho de tomate, frango desfiado e catupiry."
          imageUrl="/pizza3.png"
        />
        <ProductCard
          name="Carne Seca"
          description="mussarela, carne seca, cebola, catupiry, tomate em cubinhos e parmesão."
          imageUrl="/pizza4.png"
        />
      </div>
    </div>
  );
}
