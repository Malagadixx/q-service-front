"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../../context/cartContext";

export function CheckoutModal() {
  const { items, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {items.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <Button
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            Finalizar pedido - R$ {total.toFixed(2)}
          </Button>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Finalização do pedido</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 p-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b pb-2"
              >
                <div>
                  <p className="font-bold text-xl">
                    {item.quantity}x {item.name}
                  </p>
                  {item.observation && (
                    <p className="text-xs text-gray-600">
                      Observação: {item.observation}
                    </p>
                  )}
                  <p className="text-green-600 font-medium text-lg">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded"
                />
              </div>
            ))}
          </div>

          <div className="w-full flex justify-between items-center mt-4 p-4">
            <div className="flex gap-2">
              <strong className="text-lg">TOTAL:</strong>
              <span className="text-green-600 text-lg font-semibold">
                R$ {total.toFixed(2)}
              </span>
            </div>
            <div>
              <Button className="w-full bg-black text-white">
                Finalizar pedido
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
