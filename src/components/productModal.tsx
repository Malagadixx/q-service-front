"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export function ProductModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartTotal, setCartTotal] = useState(0);

  const price = 35.9; // valor do produto fixo
  const handleAddToCart = () => {
    setCartTotal(price * quantity);
    setIsOpen(false); // fecha o modal
  };

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <Image
              className="rounded-md"
              width={160}
              height={160}
              src="/produto.png"
              alt="product"
            />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalhes do Produto</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col justify-center items-center space-y-4">
            <Image
              className="rounded-md"
              width={240}
              height={240}
              src="/produto.png"
              alt="product"
            />
            <h2 className="text-lg font-semibold">Pizza de calabresa</h2>
            <p className="text-xs text-center">
              Pizza com fatias de calabresa, molho de tomate, queijo e catupiry
            </p>
            <span className="text-[#00C85A] text-lg font-medium">
              R$ {price.toFixed(2)}
            </span>
          </div>

          <DialogFooter className="flex justify-between items-center gap-4 mt-4">
            <div className="flex items-center gap-2 border px-2 py-1 rounded-md">
              <Button
                variant="ghost"
                size="sm"
                className="text-xl"
                onClick={decrement}
              >
                −
              </Button>
              <span className="w-6 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-xl"
                onClick={increment}
              >
                +
              </Button>
            </div>

            <Button className="bg-black text-white" onClick={handleAddToCart}>
              Adicionar ao carrinho
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {cartTotal > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <Button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg">
            Finalizar pedido - R$ {cartTotal.toFixed(2)}
          </Button>
        </div>
      )}
    </>
  );
}
