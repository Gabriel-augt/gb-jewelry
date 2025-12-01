"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/selectedItemsSlice"
import { usePrice } from "@/hooks/usePrice";

interface PriceByCurrency {
  priceBRL: number;
  priceUSD: number;
  priceEUR: number;
}

interface CollectionsCardProps {
  name: string;
  price: PriceByCurrency;
  imageUrl: string;
}

export default function LatestCollectionsCard({ name, price, imageUrl }: CollectionsCardProps) {
  const t = useTranslations('buttonLabels');
  const dispatch = useDispatch();
  const getPrice = usePrice();
  const formatted = getPrice.format(price);
  return (
    <div>
      <div className="relative w-64 rounded-3xl shadow-sm group transition-all duration-300 ease-out hover:scale-105">
        <button className="absolute cursor-pointer p-4 invisible group-hover:visible right-0 max-lg:visible max-lg:p-2">
          <Heart
            className="hover:fill-red-400 hover:stroke-0 p-2 w-10 h-10 border border-gray-200 rounded-full bg-black"
            strokeWidth={1.5}
            stroke="#fff"/>
        </button>
        <Image
          className=""
          src={imageUrl}
          alt={name}
          width={360}
          height={360}
        />
        <div className="text-center pb-3">
          <h2 className="text-2xl font-semibold font-eb-garamond">{name}</h2>
          <span className="text-gray-600">{formatted}</span>
        </div>
        <div
          className="flex items-center justify-center gap-3 font-inter
          rounded-b-3xl h-16 bg-black text-white cursor-pointer w-64">
          <button>
            <ShoppingCart strokeWidth={1.5} stroke="#fff" />
          </button>
          <span>{t('addToCart')}</span>
        </div>
        <div className="flex flex-col justify-around items-center"></div>
      </div>
    </div>
  );
}
