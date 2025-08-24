import { MessageSquareMore, User } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full p-4 bg-[#D9D9D9]">
      <div className="flex items-center justify-between">
        <div className="flex gap-16 items-center">
          <p className="text-lg font-bold">Nome do Restaurante</p>
          <div className="flex gap-10 font-medium">
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
      </div>
    </nav>
  );
}
