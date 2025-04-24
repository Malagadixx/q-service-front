// components/ProductCard.tsx
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

      {/* Imagem */}
      <div className="w-[120px] h-[120px] bg-white rounded" />
    </div>
  );
}
