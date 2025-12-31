import { ShoppingBag, Trash } from "lucide-react";
import { useSelector } from "react-redux";
import RemoveAll from "./RemoveAll";
import { useTranslations } from "next-intl";

export default function CounterRemove() {
  const cartItems = useSelector((state: any) => state.selectedItems.selectedItems);
  const t = useTranslations('cart');
  return (
    <div className="flex flex-row items-center font-bold text-base justify-between
    max-sm:justify-around gap-7 max-sm:text-sm max-sm:gap-2">
      <h1 className="flex items-center gap-2 border-none py-5">
        <ShoppingBag size={20} />
        {t('shoppingCart')} - {cartItems.length} {t('item')}
      </h1>
      <RemoveAll />
    </div>
  );
}
