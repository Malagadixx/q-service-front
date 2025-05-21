import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="w-full">
        <Image
          src="/image.png"
          alt="hero"
          width={1482}
          height={160}
          className="w-full"
        />
      </div>
      <div className="relative bg-[#F2F2F2] flex w-full px-10 py-8 items-start">
        <div className="absolute -top-[116px] left-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={232}
            height={232}
            className="rounded-full"
          />
        </div>
        <div className="ml-[260px] flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Nome do Restaurante</h1>
          <span className="text-red-600 font-medium">Fechado até 18:30</span>
        </div>
        <div className="ml-auto">
          <button className="text-xs font-medium text-black px-4 py-2 rounded-md bg-[#C0C0C0] shadow-lg hover:bg-neutral-300">
            CADASTRAR PRODUTO
          </button>
        </div>
      </div>
      <div className="w-full flex gap-8 p-3 items-center justify-center">
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
        <Link href="#" /> ITENS
      </div>
    </div>
  );
}
