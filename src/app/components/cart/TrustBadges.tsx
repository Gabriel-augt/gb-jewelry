import { Shield, Truck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TrustBadges() {
  const t = useTranslations('cart.trustBadges');
  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 w-80 h-max">
      <div className="flex flex-col gap-4 py-6">
        <div className="flex items-center gap-2">
          <Truck color="#717182" size={20} />
          <div className="flex flex-col">
            <span className="font-bold text-sm">{t('freeShipping')}</span>
            <p className="text-xs text-gray-500">{t('freeShippingContent')}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield color="#717182" size={20} />
          <div className="flex flex-col">
            <span className="font-bold text-sm">{t('safePackaging')}</span>
            <p className="text-xs text-gray-500">
              {t('safePackagingContent')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
