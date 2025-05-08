import { ProductModal } from "./productModal";

interface ProductCardProps {
  produto: Product;
}

export function ProductCard({ produto }: ProductCardProps) {
  return (
    <div className="bg-[#D9D9D9] w-[400px] h-[200px] rounded-[10px] shadow flex justify-between p-4">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-sm">{produto.name}</h2>
          <p className="text-xs text-gray-700">{produto.description}</p>
        </div>
        <span className="text-[#FF0000] text-sm font-medium">
          R$ {produto.price}
        </span>
      </div>

      <div className="flex items-center justify-center">
        <ProductModal produto={produto} />
      </div>
    </div>
  );
}
