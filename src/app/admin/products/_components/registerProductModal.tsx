"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export function ProductDialog() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = () => {
    console.log("Produto:", productName);
    console.log("Preço:", price);
    console.log("Imagem:", image);
    console.log("Descrição:", description);

    const formData = new FormData()

    formData.append("nome", productName)
    formData.append("preco", price)
    formData.append("descricao", description)
    formData.append("categoriaId", "2") // Adicionar categoria no formulário
    
    if(image){
      formData.append("imagem", image)
    }

    fetch("https://localhost:7057/api/Produtos", {
      method: "POST",
      body: formData,
    }).catch((err) => {
      console.error('Erro na requisição:', err)
    })
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-neutral-300 text-sm rounded-lg h-[32px]">
          Cadastrar Produto
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[566px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Cadastrar Produto
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 mb-4">
          <label
            htmlFor="product-upload"
            className="w-40 h-40 bg-[#D9D9D9] rounded-lg flex items-center justify-center cursor-pointer"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Produto"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Plus className="w-8 h-8 text-black" />
            )}
          </label>
          <input
            type="file"
            id="product-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <div className="flex flex-col space-y-1 items-center justify-center">
            <label htmlFor="" className="font-semibold">
              Nome do produto
            </label>
            <input
              type="text"
              className="rounded-full w-[250px] text-center border text-sm placeholder:text-gray-400"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Descrição
            </label>
            <input
              type="text"
              className="rounded-full w-[250px] text-center border text-sm placeholder:text-gray-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="" className="font-semibold">
              Valor
            </label>
            <input
              type="number"
              className="rounded-full w-[250px] text-center border text-sm placeholder:text-gray-400"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <Button
            className="mt-4 bg-neutral-800 text-white w-[150px] h-[32px] text-sm"
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>
        </div>
        <DialogClose asChild></DialogClose>
      </DialogContent>
    </Dialog>
  );
}
