import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Instructions() {
  const t = useTranslations('cart.specialInstructions');
  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 mb-6 w-[500px] h-max max-sm:w-80">
      <div className="flex flex-col gap-4 py-6">
        <div className="flex items-center gap-2">
          <MessageSquare size={20} />
          <h4 className="font-bold text-base">{t('titleInstructions')}</h4>
        </div>
        <p className="text-sm text-gray-500">
          {t('optionalNote')}
        </p>
        <textarea
          placeholder={t('textAreaPlaceholder')}
          className="px-2 py-2 h-28 border border-gray-200 rounded-md outline-gray-400 resize-none text-xs min-sm:text-base"
        />
        <p className="text-sm text-gray-500 max-sm:text-xs">
          {t('examplesMessages.pt1')} "{t('examplesMessages.pt2')}", "{t('examplesMessages.pt3')}"
        </p>
      </div>
    </div>
  );
}
