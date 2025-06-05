"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function QRCodeDialog() {
  const [tableNumber, setTableNumber] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async () => {
    if (!tableNumber || !image) {
      toast.error("Por favor, insira o número da mesa e selecione uma imagem.");
      return;
    }

    const toBase64 = (file: File): Promise<string> =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64 = (reader.result as string).split(",")[1];
          resolve(base64);
        };
        reader.onerror = reject;
      });

    try {
      const base64Image = await toBase64(image);

      const payload = {
        numeroDaMesa: tableNumber,
        qRcode: base64Image,
      };

      const response = await fetch("https://localhost:7057/api/Mesas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          "Erro ao cadastrar mesa: " + errorText || "Erro desconhecido"
        );
      }

      toast.success("Mesa cadastrada com sucesso!");
      setTableNumber("");
      setImage(null);
      setOpen(false);
      window.location.reload();
    } catch (error: any) {
      console.error("Erro ao cadastrar mesa:", error);
      toast.error("Erro ao cadastrar mesa. Veja o console.");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-neutral-300 text-sm rounded-lg h-[32px]">
          Cadastrar QR Code
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[566px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold ">
            Cadastrar QR Code
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 mb-4">
          <label
            htmlFor="qr-upload"
            className="w-40 h-40 bg-[#D9D9D9] rounded-lg flex items-center justify-center cursor-pointer self-center"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="QR Code"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Plus className="w-8 h-8 text-black" />
            )}
          </label>
          <div>
            <input
              type="file"
              id="qr-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <label className="text-base font-semibold">Número da Mesa</label>
            <input
              type="number"
              placeholder="Insira o número da mesa"
              className="rounded-full w-[250px] text-center bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400 border"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
            />
            <Button
              className="mt-4 bg-neutral-800 text-white w-[150px] h-[32px] text-sm"
              onClick={handleSubmit}
            >
              Cadastrar
            </Button>
          </div>
        </div>
        <DialogClose asChild></DialogClose>
      </DialogContent>
    </Dialog>
  );
}
