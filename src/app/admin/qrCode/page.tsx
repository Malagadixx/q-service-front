import { QRCodeCard } from "./_components/qrCodeCard";
import { QRCodeDialog } from "./_components/registerQrCodeModal";

export default function QrCode() {
  return (
    <div className="flex w-full p-4 flex-col space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[41.18px] font-bold">QR Codes</h1>
        <QRCodeDialog />
      </div>
      <div className="flex flex-wrap justify-between">
        {[1, 2, 3, 4].map((num) => (
          <QRCodeCard key={num} table={num} />
        ))}
      </div>
    </div>
  );
}
