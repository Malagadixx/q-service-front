interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderCardProps {
  table: number;
  items: OrderItem[];
}

export function OrderCard({ table, items }: OrderCardProps) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-[877px] h-auto rounded-[8px] bg-[#F9F9F9] shadow p-4 text-sm">
      <div className="flex border-b pb-2 font-semibold justify-between text-black text-[18.42px]">
        <div>Mesa</div>
        <div>Itens</div>
        <div>Valor</div>
      </div>
      <div className="flex pt-2">
        <div className="w-1/4 flex justify-start items-center pl-4 font-semibold text-[18.42px] text-black">
          {table}
        </div>
        <div className="w-2/4">
          {items.map((item, i) => (
            <div
              key={i}
              className="py-1 border-b border-dotted border-black/30 text-lg"
            >
              <span className="font-bold">
                {item.quantity} {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="w-1/4 pr-2 text-lg">
          {items.map((item, i) => (
            <div
              key={i}
              className="py-1 border-b border-dotted border-black/30 text-right text-green-600"
            >
              R$ {item.price.toFixed(2)}
            </div>
          ))}

          <div className="text-right text-green-600 font-medium mt-2">
            R$ {total.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
