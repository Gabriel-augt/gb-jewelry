import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ShopCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

export default function ShopCard({ name, price, imageUrl }: ShopCardProps) {
  const t = useTranslations('buttonLabels');
  return (
    <div>
      <div className="relative w-64 h-max rounded-b-3xl rounded-tr-4xl max-[395px]:w-56 min-[900px]:shadow-sm
      group transition-all duration-300 ease-out hover:scale-105">
        <button className="absolute cursor-pointer p-4 invisible group-hover:visible right-0 max-lg:visible max-lg:p-2">
          <Heart
            className="hover:fill-red-400 hover:stroke-0 p-2 w-10 h-10 border border-gray-200 rounded-full bg-black"
            strokeWidth={1.5}
            stroke="#fff"
          />
        </button>
        <Image
          className="w-64 h-64 max-[395px]:w-full max-[395px]:h-56"
          src={imageUrl}
          alt={name}
          width={360}
          height={360}
        />
        <div className="pb-3 text-center">
          <h2 className="text-2xl font-semibold font-eb-garamond">{name}</h2>
          <span className="text-gray-600">{price}</span>
        </div>
        <div className="flex items-center justify-center gap-3 font-inter rounded-b-3xl h-16 bg-black text-white cursor-pointer">
          <button>
            <ShoppingCart strokeWidth={1.5} stroke="#fff" />
          </button>
          <span>{t('addToCart')}</span>
        </div>
      </div>
    </div>
  );
}
