"use client";

import {
  House,
  Menu,
  Search,
  Pizza,
  ShoppingBasket,
  ShoppingBag,
  Shapes,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Sidebar() {
  return (
    <aside className="w-[382px] bg-[#F2F2F2] flex flex-col shadow-md shadow-[#00000040] space-y-2 hover:cursor-pointer">
      <div className="flex ml-3.5 mt-4 text-neutral-500 items-center gap-3">
        <span>
          <Menu width={20} />
        </span>
        <h1 className="text-2xl">Balcão</h1>
      </div>
      <div className="flex h-[67px] rounded-br-md rounded-bl-md bg-[#E6E6E6] items-center justify-center shadow-md">
        <div className="w-[323px] h-[40px] bg-[#F5F5F5] rounded-[20px] flex items-center p-4">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Procurar funcionalidade"
            className="bg-transparent outline-none text-sm text-gray-600 w-full placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[#0000008C] ml-4">
        <Link
          href="/admin"
          className="flex items-center gap-2 mt-4 w-auto space-x-2 py-2 pb-2 hover:bg-[#E6E6E6]"
        >
          <span>
            <House width={20} />
          </span>
          <h1 className="">Início</h1>
        </Link>
        <Accordion type="single" collapsible className="flex items-start">
          <AccordionItem value="products">
            <AccordionTrigger className="flex items-center">
              <ShoppingBasket width={20} />
              Produtos
            </AccordionTrigger>
            <AccordionContent className="ml-10 space-y-2 flex-row">
              <Link
                href="/admin/products"
                className="text-sm hover:text-primary flex items-center gap-2 hover:bg-[#E6E6E6] py-2 pb-2"
              >
                <Pizza width={20} />
                Produtos
              </Link>
              <Link
                href="/admin/servicos"
                className="text-sm hover:text-primary flex items-center gap-2 hover:bg-[#E6E6E6] py-2 pb-2"
              >
                <ShoppingBag width={20} />
                Serviços
              </Link>
              <Link
                href="/admin/categorias"
                className="text-sm hover:text-primary flex items-center gap-2 hover:bg-[#E6E6E6] py-2 pb-2"
              >
                <Shapes width={20} />
                Categorias
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}
