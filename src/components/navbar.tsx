import { MessageSquareMore, ShoppingBasket, User } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full p-4 bg-[#D9D9D9]">
      <div className="flex items-center justify-between">
        <div className="flex gap-16 items-center">
          <p className="text-lg font-bold">Nome do Restaurante</p>
          <div className="flex gap-10 font-medium">
            <Link href="/pedidos" className="flex items-center gap-2">
              <ShoppingBasket width={20} height={20} />
              Pedidos
            </Link>
            <Link href="/feedbacks" className="flex items-center gap-2">
              <MessageSquareMore width={20} height={20} />
              Feedbacks
            </Link>
            <Link href="/perfil" className="flex items-center gap-2">
              <User width={20} height={20} />
              Perfil
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Link
            href="/signup"
            className="text-sm font-medium text-[#E92E2E] hover:underline"
          >
            Criar conta
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-white bg-[#E92E2E] px-4 py-2 rounded-lg hover:bg-red-400 transition"
          >
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}
