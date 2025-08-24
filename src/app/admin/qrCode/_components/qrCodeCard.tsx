import { Button } from "@/components/ui/button";

interface QRCodeCardProps {
  table: number;
  imageBase64: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function QRCodeCard({
  table,
  imageBase64,
  onEdit,
  onDelete,
}: QRCodeCardProps) {
  return (
    <div className="w-[241px] h-[295px] bg-[#EDEDED] rounded-[8px] p-2 flex flex-col items-center gap-2 shadow">
      <img
        src={`data:image/png;base64,${imageBase64}`}
        alt={`QR Code Mesa ${table}`}
        className="w-[203px] h-[203px] rounded bg-white object-contain"
      />

      <p className="text-[20.44px] font-bold">Mesa {table}</p>

      <div className="flex gap-4 text-[11.98px] font-normal">
        <Button
          variant="outline"
          className="h-6 text-xs bg-white"
          onClick={onEdit}
        >
          Editar
        </Button>
        <Button
          variant="destructive"
          className="h-6 px-4 py-2 text-xs bg-[#FF2D2D]"
          onClick={onDelete}
        >
          Excluir
        </Button>
      </div>
    </div>
  );
}
