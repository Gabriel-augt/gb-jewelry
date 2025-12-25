import Image from "next/image";
import ReturnHomePage from "./ReturnHomePage";
import { useTranslations } from "next-intl"

export default function EmptyCart() {
  const t = useTranslations('cart.emptyCart');
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen font-eb-garamond">
      <div className="relative">
        <Image
          className="object-cover"
          src="/empty-cart.svg"
          alt="s"
          width={360}
          height={360}
        />
      </div>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-semibold py-1">{t('tittleEmptyCart')}</h1>
        <p className="text-lg max-sm:text-sm">{t('emptyCartContent')}</p>
      </div>
      <ReturnHomePage />
    </div>
  );
}
