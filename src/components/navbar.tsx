import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full p-4 bg-[#D9D9D9]">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex gap-16 items-center">
          <p className="text-lg font-bold">Nome do Restaurante</p>
          <div className="hidden md:flex gap-10 font-medium">
            <Link href="/pedidos" className="hover:bg-red-400">
              Pedidos
            </Link>
            <Link href="/feedbacks" className="hover:bg-red-400">
              Feedbacks
            </Link>
            <Link href="/perfil" className="hover:bg-red-400">
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
