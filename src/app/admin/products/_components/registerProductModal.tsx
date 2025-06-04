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
import { useState, useEffect } from "react";

export function ProductDialog() {
  const [categories, setCategories] = useState<{ id: number; nome: string }[]>(
    []
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  useEffect(() => {
    fetch("https://localhost:7057/api/Categorias")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Erro ao buscar categorias:", err));
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = async () => {
    try {
      console.log("Produto:", productName);
      console.log("Preço:", price);
      console.log("Imagem:", image);
      console.log("Descrição:", description);

      const formData = new FormData();

      formData.append("nome", productName);
      formData.append("preco", price);
      formData.append("descricao", description);
      formData.append("categoriaId", selectedCategoryId);

      if (image) {
        formData.append("imagem", image);
      }

      const response = await fetch("https://localhost:7057/api/Produtos", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar produto.");
      }

      alert("Produto cadastrado com sucesso!");
      setProductName("");
      setPrice("");
      setDescription("");
      setImage(null);
      setSelectedCategoryId("");
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Erro ao cadastrar o produto. Tente novamente.");
    }
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
          <label htmlFor="" className="font-semibold">
            Categoria
          </label>
          <select
            className="rounded-full w-[250px] text-center border text-sm text-gray-600"
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>

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
