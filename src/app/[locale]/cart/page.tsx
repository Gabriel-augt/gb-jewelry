"use client";

import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, removeOne, resetItem} from "@/store/selectedItemsSlice";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash, X } from "lucide-react";
import Link from "next/link";
import OrderSummary from "@/app/components/cart/OrderSummary";
import Promo from "@/app/components/cart/Promo";
import TrustBadges from "@/app/components/cart/TrustBadges";
import { usePrice } from "@/hooks/usePrice";

export default function CartPage() {
  const cartItems = useSelector((state: any) => state.selectedItems.selectedItems);
  const dispatch = useDispatch();
  const { formatWithQuantity } = usePrice();
  return (
    <div className="flex flex-row w-screen min-h-screen justify-center gap-6
    max-lg:flex-col max-lg:items-center max-lg:gap-0">
      <div className=" flex flex-col">
          <Link href={"/"}>
            <button className="flex flex-row items-center gap-1 font-semibold -translate-x-2 p-2 my-3
            rounded-md cursor-pointer hover:bg-gray-100 max-sm:ml-2">
              <ArrowLeft size={20} />
              Voltar para o inicio
            </button>
          </Link>
          <div className="flex flex-row items-center font-bold text-base justify-between max-sm:justify-around
          max-sm:text-sm max-sm:gap-2">
            <h4 className="flex items-center gap-2 border-none py-5">
              <ShoppingBag size={20} />
              Shopping Cart - {cartItems.length} items
            </h4>
            <button className="flex flex-row gap-1 cursor-pointer items-center h-max p-2 rounded-md hover:bg-gray-100"
              onClick={() => dispatch(resetItem())}>
              <Trash size={20} />
              Remover tudo
            </button>
          </div>
        <div className="flex flex-col min-md:md:flex-row min-md:items-start min-md:justify-center
        gap-8 border border-gray-200 rounded-md overflow-y-auto h-[500px] mb-8 max-sm:w-80">
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
                    <button
                      className="cursor-pointer"
                      onClick={() => dispatch(deleteItem(item.id))}>
                      <X color="#99A1AF" />
                    </button>
                    <div className="flex items-center flex-row gap-3">
                      <Minus
                        onClick={() => dispatch(removeOne(item.id))}
                        className="cursor-pointer"
                      />
                      <span>{item.quantity}</span>
                      <Plus
                        onClick={() => dispatch(addItem(item))}
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
      </div>
      <div className="flex flex-col gap-6 min-lg:pt-32 max-lg:pb-12">
        <Promo />
        <OrderSummary />
        <TrustBadges />
      </div>
    </div>
  );
}
