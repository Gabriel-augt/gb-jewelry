import { NotepadText, Tag } from "lucide-react";

export default function Promo() {
  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 w-80 h-max">
      <div className="flex flex-col pt-6 pb-3">
        <div className="flex items-center gap-2 pb-6">
          <Tag size={20} />
          <h4 className="font-bold text-base">Código Promocional</h4>
        </div>
        <div className="flex flex-row gap-3 pb-2">
          <input
            placeholder="Insira o código promocional"
            className="bg-gray-200 rounded-md outline-gray-400 font-semibold tracking-widest text-sm px-3 py-1"
            type="text"
          />
          <button disabled className="px-3 text-sm border border-gray-200 rounded-md text-gray-400">Aplicar</button>
        </div>
        <p className="text-xs text-gray-500">GBJEWEL10, GBLUXE15, GBPREMIER20</p>
      </div>
    </div>
  );
}
