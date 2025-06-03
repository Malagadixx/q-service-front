import { Product } from "@/type/product";
import { ProductModal } from "./productModal";

interface Props {
  produto: Product;
}

export function ProductCard({ produto }: Props) {
  return (
    <div className="bg-[#D9D9D9] w-full h-auto rounded-[10px] shadow flex justify-between p-4">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-sm">{produto.nome}</h2>
          <p className="text-xs text-gray-700">{produto.descricao}</p>
        </div>
        <span className="text-[#FF0000] text-sm font-medium">
          R$ {produto.preco}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <ProductModal produto={produto} />
      </div>
    </div>
  );
}
