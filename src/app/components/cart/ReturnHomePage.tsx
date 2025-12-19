import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ReturnHomePage() {
  const t = useTranslations('buttonLabels');
  return (
    <Link href={"/"}>
      <button className="flex flex-row items-center gap-2 font-semibold -translate-x-28
      p-2 mt-3 rounded-md cursor-pointer hover:bg-gray-100 max-sm:-translate-x-20">
        <ArrowLeft size={20} />
        {t('returnHomePage')}
      </button>
    </Link>
  );
}
