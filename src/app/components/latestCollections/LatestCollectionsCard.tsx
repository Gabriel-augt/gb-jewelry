"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { addItem as addToCart } from "@/store/selectedItemsSlice";
import { usePrice } from "@/hooks/usePrice";
import FavoriteButton from "@/app/components/favorites/FavoriteButton";

interface PriceByCurrency {
  priceBRL: number;
  priceUSD: number;
  priceEUR: number;
}

interface CollectionsCardProps {
  id: number;
  name: string;
  price: PriceByCurrency;
  imageUrl: string;
}

export default function LatestCollectionsCard({
  id,
  name,
  price,
  imageUrl,
}: CollectionsCardProps) {
  const t = useTranslations("buttonLabels");
  const dispatch = useDispatch();
  const getPrice = usePrice();
  const formatted = getPrice.format(price);

  return (
    <div>
      <div className="relative w-64 rounded-3xl shadow-sm group transition-all duration-300 ease-out hover:scale-105">

        <FavoriteButton
          id={id}
          name={name}
          price={price}
          formatted={formatted}
          imageUrl={imageUrl}
        />

        <Image
          src={imageUrl}
          alt={name}
          width={360}
          height={360}
        />

        <div className="text-center pb-3">
          <h2 className="text-2xl font-semibold font-eb-garamond">
            {name}
          </h2>
          <span className="text-gray-600">{formatted}</span>
        </div>

        <div className="flex items-center justify-center rounded-b-3xl h-16 bg-black text-white w-64">
          <button className="flex items-center justify-center gap-3 w-full h-full cursor-pointer"
            onClick={() => dispatch(addToCart({id,name, price, formatted, imageUrl}))}>
            <ShoppingCart strokeWidth={1.5} stroke="#fff" />
            <span>{t("addToCart")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
