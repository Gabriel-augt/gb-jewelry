"use client";

import { useTranslations } from "next-intl";

export default function SubscribeEmail() {
  const t = useTranslations('contact');
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-80 bg-[#EAD9CE]">
        <h1 className="font-eb-garamond text-5xl max-sm:text-3xl">
            {t('emailList')}
        </h1>
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input className="border border-[#B07B54] w-70 h-11 p-2.5 outline-0 rounded-l
            max-[560px]:w-72 max-[415px]:w-60"
            type="email" name="" placeholder={t('emailPlaceholder')} />

            <button className="font-inter font-semibold rounded-r w-32 h-11 cursor-pointer
            bg-[#B07B54] max-[560px]:w-28">
                {t('emailButton')}
            </button>
        </form>
    </div>
  );
}