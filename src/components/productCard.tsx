import { ProductModal } from "./productModal";

export function ProductCard() {
  return (
    <div className="bg-[#D9D9D9] w-[400px] h-[200px] rounded-[10px] shadow flex justify-between p-4">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-sm">Nome produto</h2>
          <p className="text-xs text-gray-700">descrição</p>
        </div>
        <span className="text-[#FF0000] text-sm font-medium">R$ 00.00</span>
      </div>

      <div className="flex items-center justify-center w-[160px] h-[160px] mt-1 rounded-md bg-white">
        <ProductModal />
      </div>
    </div>
  );
}
