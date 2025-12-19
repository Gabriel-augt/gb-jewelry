import { NotepadText } from "lucide-react";
import OrderSummaryItem from "./OrderSummaryItem";
import { useCartTotals } from "@/hooks/useCartTotals";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import CheckoutButton from "./CheckoutButton";
import { useTranslations } from "next-intl";

export default function OrderSummary() {
  const { formatted } = useCartTotals();
  const { percentage } = useSelector((state: RootState) => state.coupon);
  const t = useTranslations('cart.orderSummary');
  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 pb-3 w-80 h-max space-y-4">
      <div className="flex flex-col gap-6 pt-6 pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2 pb-1">
          <NotepadText size={20} />
          <h4 className="font-bold text-base">{t('titleSummary')}</h4>
        </div>
        <OrderSummaryItem label="Subtotal" value={formatted.subtotal} />
        {percentage > 0 && (
          <OrderSummaryItem
            label={t('discount')}
            value={`- ${formatted.discount}`}
          />
        )}
        <OrderSummaryItem label={t('tax')} value={formatted.fee} />
        <OrderSummaryItem label={t('shipping')} value={formatted.shipping} />
      </div>
      <OrderSummaryItem label={t('total')} value={formatted.total} />
      <CheckoutButton />
    </div>
  );
}
