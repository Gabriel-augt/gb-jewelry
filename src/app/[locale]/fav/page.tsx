"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { addItem as addToCart } from "@/store/selectedItemsSlice";
import { useTranslations } from "next-intl";
import { usePrice } from "@/hooks/usePrice";
import FavoriteButton from "@/app/components/favorites/FavoriteButton";
import EmptyFavorites from "@/app/components/favorites/EmptyFavorites";
import FavoritesHeader from "@/app/components/favorites/FavoritesHeader";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const dispatch = useDispatch();
  const t = useTranslations("buttonLabels");
  const getPrice = usePrice();

  if (favorites.length === 0) {
    return (
      <EmptyFavorites />
    );
  }

  return (
    <section className="w-screen flex flex-col items-center justify-center px-6 py-10 overflow-x-hidden">
      <FavoritesHeader />
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {favorites.map((item) => {
          const formatted = getPrice.format(item.price);
          return (
            <div key={item.id}
              className="relative flex flex-col rounded-3xl shadow-sm bg-white max-md:px-1.5">
              <div className="flex gap-8 items-center w-96 max-md:w-full max-md:gap-3">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={360}
                  height={360}
                  className="w-44 h-44"
                />
                <div className="py-4">
                  <h2 className="text-xl font-semibold font-eb-garamond">
                    {item.name}
                  </h2>
                  <span className="text-gray-600">{formatted}</span>
                  <div className="flex items-center pt-8">
                    <FavoriteButton
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      formatted={formatted}
                      imageUrl={item.imageUrl}
                    />
                    <button onClick={() => dispatch(addToCart({id: item.id, name: item.name, price: item.price, formatted,imageUrl: item.imageUrl}))}
                      className="flex items-center justify-center gap-2 w-10 h-10 bg-black text-white rounded-3xl cursor-pointer">
                      <ShoppingCart strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
