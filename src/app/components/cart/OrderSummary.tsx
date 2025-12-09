import { NotepadText } from "lucide-react";
import OrderSummaryItem from "./OrderSummaryItem";
import { useCartTotals } from "@/hooks/useCartTotals";

export default function OrderSummary() {
  const { formatted } = useCartTotals();
  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 w-80 h-72 space-y-4">
      <div className="flex flex-col gap-6 pt-6 pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2 pb-1">
          <NotepadText size={20} />
          <h4 className="font-bold text-base">Resumo de Pedido</h4>
        </div>
        <OrderSummaryItem label="Subtotal" value={formatted.subtotal} />
        <OrderSummaryItem label="Taxa" value={formatted.fee} />
        <OrderSummaryItem label="Frete" value={formatted.shipping} />
      </div>
      <OrderSummaryItem label="Total" value={formatted.total} />
    </div>
  );
}
