"use client";

import { useEffect, useState } from "react";
import { QRCodeCard } from "./_components/qrCodeCard";
import { QRCodeDialog } from "./_components/registerQrCodeModal";

interface Mesa {
  id: number;
  numeroDaMesa: string;
  qRcode: string;
}

export default function QrCode() {
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await fetch("https://localhost:7057/api/Mesas");
        const data = await response.json();
        setMesas(data);
      } catch (error) {
        console.error("Erro ao buscar mesas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMesas();
  }, []);

  return (
    <div className="flex w-full p-4 flex-col space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[41.18px] font-bold">QR Codes</h1>
        <QRCodeDialog />
      </div>

      {loading ? (
        <p>Carregando mesas...</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {mesas.length === 0 ? (
            <p>Nenhuma mesa cadastrada.</p>
          ) : (
            mesas.map((mesa) => (
              <QRCodeCard
                key={mesa.id}
                table={parseInt(mesa.numeroDaMesa)}
                imageBase64={mesa.qRcode}
                onEdit={() => console.log("Editar mesa", mesa.id)}
                onDelete={() => console.log("Excluir mesa", mesa.id)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
