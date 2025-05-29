import { Facebook, X, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 text-sm">
      <div className="w-full flex flex-col md:flex-row gap-16 p-8 text-lg">
        <div className="space-y-1">
          <h4 className="font-semibold">Nome da Empresa</h4>
          <p className="font-semibold">(**)**********</p>
          <p className="text-gray-500 text-xs">CNPJ</p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold">Descubra</h4>
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer">
            Sobre nós
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Social</h4>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-black" />
            <X className="w-5 h-5 cursor-pointer hover:text-black" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      <div className="w-full flex border-t border-gray-200 mt-6">
        <div className="w-full flex p-8 gap-4 text-neutral-400 justify-between">
          <div className="flex gap-4">
            <Image
              width={73}
              height={73}
              src="/qservice.png"
              alt="qservice"
              className="rounded-full}"
            />
            <p className="flex flex-col gap-4">
              © Copyright 2025 - Q-Service - Todos os direitos reservados
              Q-Service com Cardápios de Restaurantes Online S.A.{" "}
              <span>CPNJ</span>
            </p>
          </div>
          <div className="flex text-black font-medium gap-4 text-sm">
            <a href="#">Termos e condições de uso</a>
            <a href="#">Código de conduta</a>
            <a href="#">Privacidade</a>
            <a href="#">Dicas de segurança</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
