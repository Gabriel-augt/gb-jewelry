import { Shield, Truck } from "lucide-react";

export default function TrustBadges() {
  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 w-80 h-max">
      <div className="flex flex-col gap-4 py-6">
        <div className="flex items-center gap-2">
          <Truck color="#717182" size={20} />
          <div className="flex flex-col">
            <span className="font-bold text-sm">Frete grátis</span>
            <p className="text-xs text-gray-500">Em duas ou mais encomendas</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield color="#717182" size={20} />
          <div className="flex flex-col">
            <span className="font-bold text-sm">Embalagem segura</span>
            <p className="text-xs text-gray-500">
              Obra de arte embalada com segurança e segurada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
