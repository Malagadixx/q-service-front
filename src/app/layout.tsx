import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "../context/cartContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Q-Service",
  description: "Plataforma de autoatendimento para restaurantes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased bg-white`}>
        <CartProvider>
          {children}
          <Toaster richColors position="bottom-center" />
        </CartProvider>
      </body>
    </html>
  );
}
