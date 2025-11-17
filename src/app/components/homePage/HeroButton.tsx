import { ArrowDownLeft } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroButton () {
    const t = useTranslations('buttonLabels');
    return (
        <Link href='#shop'>
            <button className="flex flex-row gap-2 justify-center items-center py-4 px-6 border
            border-gray-900-300 font-eb-garamond translate-y-12 group cursor-pointer h-16">
            <ArrowDownLeft width={28} height={28} strokeWidth={1} />
            <span className="group-hover:border-b group-hover:border-b-zinc-400 text-xl h-7 rounded-b-xs">
                {t('explore')}
            </span>
        </button>
        </Link>
    )
}