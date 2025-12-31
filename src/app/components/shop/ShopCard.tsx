"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/selectedItemsSlice";
import { usePrice } from "@/hooks/usePrice";
import FavoriteButton from "@/app/components/favorites/FavoriteButton";

interface PriceByCurrency {
  priceBRL: number;
  priceUSD: number;
  priceEUR: number;
}

interface ShopCardProps {
  id: number;
  name: string;
  price: PriceByCurrency;
  imageUrl: string;
}

export default function ShopCard({ id, name, price, imageUrl }: ShopCardProps) {
  const t = useTranslations("buttonLabels");
  const dispatch = useDispatch();
  const getPrice = usePrice();
  const formatted = getPrice.format(price);

  return (
    <div>
      <div className="relative w-64 h-max rounded-b-3xl rounded-tr-4xl max-[395px]:w-56 min-[900px]:shadow-sm
        group transition-all duration-300 ease-out hover:scale-105">
        <FavoriteButton
          id={id}
          name={name}
          price={price}
          formatted={formatted}
          imageUrl={imageUrl}
        />
        <Image
          className="w-64 h-64 max-[395px]:w-full max-[395px]:h-56"
          src={imageUrl}
          alt={name}
          width={360}
          height={360}
        />
        <div className="pb-3 text-center">
          <h2 className="text-2xl font-semibold font-eb-garamond">{name}</h2>
          <span className="text-gray-600">{formatted}</span>
        </div>
        <button className="flex items-center justify-center gap-3 font-inter rounded-b-3xl h-16 bg-black text-white cursor-pointer w-full"
        onClick={() => dispatch(addItem({ id, name, price, formatted, imageUrl}))}>
          <ShoppingCart strokeWidth={1.5} stroke="#fff" />
          <span>{t("addToCart")}</span>
        </button>
      </div>
    </div>
  );
}
