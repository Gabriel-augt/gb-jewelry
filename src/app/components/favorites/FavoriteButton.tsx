"use client";

import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addItem as toggleFavorite } from "@/store/favoritesSlice";

interface PriceByCurrency {
  priceBRL: number;
  priceUSD: number;
  priceEUR: number;
}

interface FavoriteButtonProps {
  id: number;
  name: string;
  price: PriceByCurrency;
  formatted: string;
  imageUrl: string;
}

export default function FavoriteButton({id, name, price, formatted, imageUrl}: FavoriteButtonProps) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.items.some((item) => item.id === id)
  );

  return (
    <button
      onClick={() => dispatch(toggleFavorite({id, name, price, formatted, imageUrl }))}
      className="absolute z-10 cursor-pointer p-4 invisible group-hover:visible right-0 max-lg:visible max-lg:p-2">
      <Heart className={`p-2 w-10 h-10 rounded-full border bg-black transition
      ${isFavorite ? "fill-red-500 stroke-red-500 visible"
        : "stroke-white border-gray-200 hover:fill-red-500 hover:stroke-red-500"}`}
        strokeWidth={1.5}
      />
    </button>
  );
}
