"use client";

import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, removeOne } from "@/store/selectedItemsSlice";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

import OrderSummary from "@/app/components/cart/OrderSummary";
import Promo from "@/app/components/cart/Promo";
import TrustBadges from "@/app/components/cart/TrustBadges";
import { usePrice } from "@/hooks/usePrice";
import Instructions from "@/app/components/cart/Instructions";
import ReturnHomePage from "@/app/components/cart/ReturnHomePage";
import CounterRemove from "@/app/components/cart/CounterRemove";

export default function CartPage() {
  const cartItems = useSelector((state: any) => state.selectedItems.selectedItems);
  const dispatch = useDispatch();
  const { formatWithQuantity } = usePrice();
  return (
    <div className="flex flex-row w-screen min-h-screen justify-center gap-6
    max-lg:flex-col max-lg:items-center max-lg:gap-0">
      <div className="flex flex-col items-center">
        <ReturnHomePage />
        <CounterRemove />
        <div className="flex flex-col min-md:md:flex-row min-md:items-start min-md:justify-center
        gap-8 border border-gray-200 rounded-md overflow-y-auto h-96 mb-6 max-sm:w-80">
          <div className="flex flex-col font-eb-garamond text-xl h-max max-sm:text-sm">
            <div className="flex flex-col divide-y divide-gray-200 rounded-xl px-8">
              {cartItems.map((item: any) => (
                <div key={item.id}
                className="flex flex-row justify-center gap-16 py-6">
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      className="w-28 h-28 shadow-md rounded-2xl"
                      src={item.imageUrl}
                      alt={item.name}
                      width={360}
                      height={360}
                    />
                    <span className="font-semibold tracking-wide w-36 text-center text-lg max-sm:text-base">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex flex-col items-end justify-around gap-3">
                    <button className="cursor-pointer"
                    onClick={() => dispatch(deleteItem(item.id))}>
                      <X color="#99A1AF" />
                    </button>
                    <div className="flex items-center flex-row gap-3">
                      <Minus onClick={() => dispatch(removeOne(item.id))}
                      className="cursor-pointer"
                      />
                      <span>{item.quantity}</span>
                      <Plus onClick={() => dispatch(addItem(item))}
                      className="cursor-pointer"
                      />
                    </div>
                    {formatWithQuantity(item.price, item.quantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Instructions />
      </div>
      <div className="flex flex-col gap-6 min-lg:pt-32 max-lg:pb-12">
        <Promo />
        <OrderSummary />
        <TrustBadges />
      </div>
    </div>
  );
}
