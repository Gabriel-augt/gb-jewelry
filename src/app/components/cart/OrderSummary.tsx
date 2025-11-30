import { NotepadText } from "lucide-react";

export default function OrderSummary() {
  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 w-80 h-72">
      <div className="flex flex-col gap-6 pt-6 pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2 pb-1">
          <NotepadText size={20} />
          <h4 className="font-bold text-base">Resumo de Pedido</h4>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-base">Subtotal</span>
          <span>$11.32</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-base">Taxa</span>
          <span>$15.00</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-base">Frete</span>
          <span>$20</span>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <span className="font-bold text-base">Total</span>
        <span>$320</span>
      </div>
    </div>
  );
}
