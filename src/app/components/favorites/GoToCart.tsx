import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function GoToCart() {
  const t = useTranslations('buttonLabels');
  return (
    <Link href="/cart">
      <button className="flex flex-row items-center gap-2 font-semibold translate-x-24 text-lg
      p-2 mt-3 rounded-md cursor-pointer hover:bg-gray-100 max-sm:translate-x-2 max-md:text-base">
        {t('goToCart')}
        <ArrowRight size={20} />
      </button>
    </Link>
  );
}
