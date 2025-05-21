// components/OrderConfirmedModal.tsx

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type OrderConfirmedModalProps = {
  isOpen: boolean;
  onClose: () => void;
  estimatedTime: number;
};

export function OrderConfirmedModal({
  isOpen,
  onClose,
  estimatedTime,
}: OrderConfirmedModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="text-center">
        <DialogHeader>
          <DialogTitle>Tempo de espera</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4">
          <Image src="/clock.png" alt="clock" width={188} height={188} />

          <h2 className="text-lg font-semibold">
            Seu pedido em breve está na mesa!
          </h2>

          <p className="text-sm text-gray-600">Tempo de espera estimado:</p>

          <p className="text-2xl text-[#00000080] font-semibold">
            {estimatedTime} minutos
          </p>

          <Button className="bg-red-600 text-white px-6 mb-4" onClick={onClose}>
            Entendi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
