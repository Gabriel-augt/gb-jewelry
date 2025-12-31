"use client";

import { useTranslations } from "next-intl";

export default function SubscribeEmail() {
  const t = useTranslations('contact');
  return (
    <div className="flex flex-col items-center justify-center gap-6 border-[#B07B54]">
        <h1 className="font-eb-garamond text-4xl max-sm:text-2xl">
            {t('emailList')}
        </h1>
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input className="border border-[#B07B54] w-70 h-11 p-2.5 outline-0 rounded-l max-lg:w-56 max-sm:w-48"
            type="email" name="" placeholder={t('emailPlaceholder')} />
            <button className="font-inter font-semibold rounded-r w-32 h-11 pb-0.5
            cursor-pointer bg-[#B07B54] text-white max-lg:w-24 max-lg:pb-px max-sm:w-20">
                {t('emailButton')}
            </button>
        </form>
    </div>
  );
}