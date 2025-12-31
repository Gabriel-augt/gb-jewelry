import Image from "next/image";
import { useTranslations } from "next-intl";
import GoToCart from "./GoToCart";
import ReturnHomePageEmpty from "../cart/ReturnHomePageEmpty";

export default function EmptyFavorites() {
  const t = useTranslations('favorites.emptyFavorites');
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen font-eb-garamond overflow-x-hidden"
    data-aos="zoom-out"
    data-aos-duration="1300">
      <div className="relative">
        <Image
          className="object-cover"
          src="/empty-favorites.svg"
          alt=""
          width={360}
          height={360}
        />
      </div>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-semibold py-1">{t('tittleEmptyFavorites')}</h1>
        <p className="text-lg max-sm:text-sm">{t('emptyFavoritesContent')}</p>
      </div>
      <div className="flex">
        <ReturnHomePageEmpty />
        <GoToCart />
      </div>
    </div>
  );
}
