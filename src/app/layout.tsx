import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { CartProvider } from "../context/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Q-Service",
  description: "Plataforma de autoatendimento para restaurantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="min-h-screen">
      <body
        className={`${inter.className} antialiased bg-white max-w-screen-2xl mx-auto`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
