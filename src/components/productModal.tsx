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
import { useCart } from "../../context/cartContext";

type ProductModalProps = {
  produto: Product;
};

export function ProductModal({ produto }: ProductModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState("");

  const { addToCart } = useCart(); // <-- USA O CONTEXTO

  const handleAddToCart = () => {
    addToCart({
      id: produto.id,
      name: produto.name,
      description: produto.description,
      price: produto.price,
      image: produto.image,
      quantity: quantity,
      observation: observation,
    });
    setIsOpen(false);
    setQuantity(1);
    setObservation("");
  };

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Image
          className="rounded-md cursor-pointer"
          width={160}
          height={160}
          src={produto.image}
          alt={produto.name}
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{produto.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center space-y-4">
          <Image
            className="rounded-md"
            width={240}
            height={240}
            src={produto.image}
            alt={produto.name}
          />
          <p className="text-xs text-center">{produto.description}</p>
          <span className="text-[#00C85A] text-lg font-medium">
            R$ {produto.price.toFixed(2)}
          </span>

          <textarea
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Alguma observação?"
            className="w-full border rounded-md p-2 text-sm"
          />
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
  );
}
