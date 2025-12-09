"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useMemo } from "react";
import { usePrice } from "@/hooks/usePrice";

export function useCartTotals() {
  const { format } = usePrice();

  const currency = useSelector((state: RootState) => state.currency.currency);
  const cartItems = useSelector((state: RootState) => state.selectedItems.selectedItems);

  const couponCode = useSelector((state: RootState) => state.coupon.code);
  const discountPercentage = useSelector((state: RootState) => state.coupon.percentage);

  const subtotal = useMemo(() => {
    if (!cartItems?.length) return 0;

    return cartItems.reduce((acc: number, item: any) => {
      const price =
        currency === "BRL"
          ? item.price.priceBRL
          : currency === "USD"
          ? item.price.priceUSD
          : item.price.priceEUR;

      return acc + price * item.quantity;
    }, 0);
  }, [cartItems, currency]);

  const fee = useMemo(() => {
    return currency === "BRL" ? 151 : currency === "USD" ? 28 : 24;
  }, [currency]);


  const shipping = useMemo(() => {
    return currency === "BRL" ? 269.68 : currency === "USD" ? 50 : 42.92;
  }, [currency]);

  const discountValue = useMemo(() => {
    return subtotal * (discountPercentage / 100);
  }, [subtotal, discountPercentage]);

  const total = subtotal + fee + shipping - discountValue;

  const formatted = {
    subtotal: format(subtotal),
    fee: format(fee),
    shipping: format(shipping),
    discount: format(discountValue),
    total: format(total),
  };

  return {
    subtotal,
    fee,
    shipping,
    discountValue,
    discountPercentage,
    couponCode,
    total,
    formatted,
  };
}
