import { CreditCard } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CheckoutButton() {
  const t = useTranslations('buttonLabels');
  return (
    <button className="relative flex items-center justify-center gap-1 bg-black p-2 w-full border-1 border-gray-200 rounded-md mt-6 mb-3
    text-base font-semibold text-white cursor-pointer overflow-hidden transition-all duration-600 ease-custom
    hover:text-black group hover:transition-all hover:duration-700 hover:bg-white">
      <CreditCard className="absolute fill-white z-10 transition-all duration-700 ease-custom -left-1/4 group-hover:left-4" />
      <span className="relative z-10 transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">
        {t('checkout')}
      </span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-md opacity-0
      transition-all duration-700 ease-custom group-hover:w-full group-hover:h-64 group-hover:opacity-100"></span>
      <CreditCard className="absolute z-10 transition-all duration-700 ease-custom right-4 group-hover:-right-1/4" />
    </button>
  );
}
