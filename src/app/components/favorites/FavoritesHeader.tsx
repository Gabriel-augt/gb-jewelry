import { ArrowLeft, ArrowRight, House, SquareStar } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import NavBarHandbag from "../navBar/NavBarHandbag";

export default function FavoritesHeader() {
  const t = useTranslations('favorites');
  return (
    <div className="flex items-center justify-around w-1/2 mb-8 max-md:w-96"
    data-aos="fade-dpwn"
    data-aos-duration="1300">
      <Link href="/">
        <div className="flex items-center justify-center cursor-pointer">
          <ArrowLeft />
          <House />
        </div>
      </Link>
      <h1 className="text-3xl font-semibold font-eb-garamond inline-flex items-center gap-2 max-sm:text-xl">
        <SquareStar />
        {t('yourFavorites')}
      </h1>
      <Link href="/cart">
        <div className="flex items-center justify-center cursor-pointer">
          <NavBarHandbag />
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
}
