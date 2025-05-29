import { OrderCard } from "@/components/orderCard";
import { Search } from "lucide-react";

export default function Admin() {
  return (
    <div className="flex w-full p-4 flex-col space-y-10 items-center justify-center">
      <div className="w-full h-[50px] bg-[#F5F5F5] rounded-[5px] flex items-center p-4 shadow-md shadow-[#00000040]">
        <Search className="h-4 w-4 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Procurar funcionalidade"
          className="bg-transparent outline-none text-sm text-gray-600 w-full placeholder:text-gray-400"
        />
      </div>
      <OrderCard
        table={1}
        items={[
          { name: "Pizza de Calabresa", quantity: 1, price: 60 },
          { name: "Pizza de Carne seca", quantity: 1, price: 58 },
          { name: "Coca-cola", quantity: 1, price: 7 },
        ]}
      />
    </div>
  );
}
