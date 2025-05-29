import { Armchair, CreditCard, QrCode } from "lucide-react";
import Link from "next/link";

export default function AdminNav() {
  return (
    <>
      <nav className="w-full h-[56px] bg-[#F2F2F2] space-x-2 flex shadow-sm shadow-[#00000040]">
        <div className="flex items-center gap-8">
          <div className="flex ml-3.5 items-center text-[#666666]">
            <Link href="/admin/mesas" className="flex items-center flex-col">
              <Armchair width={25} height={25} />
              Mesas
            </Link>
          </div>
          <div className="flexml-4 items-center text-[#666666]">
            <Link href="/admin/mesas" className="flex items-center flex-col">
              <CreditCard width={25} height={25} />
              Comandas
            </Link>
          </div>
          <div className="flexml-4 items-center text-[#666666]">
            <Link href="/admin/qrCode" className="flex items-center flex-col">
              <QrCode width={25} height={25} />
              QR Codes
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
