import Image from "next/image";
import { Button } from "@/components/ui/button";

interface QRCodeCardProps {
  table: number;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function QRCodeCard({ table, onEdit, onDelete }: QRCodeCardProps) {
  return (
    <div className="w-[241px] h-[295px] bg-[#EDEDED] rounded-[8px] p-2 flex flex-col items-center gap-2 shadow">
      <Image
        src="/qrCode.png"
        alt={`QR Code Mesa ${table}`}
        width={203}
        height={203}
        className="rounded bg-white"
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
