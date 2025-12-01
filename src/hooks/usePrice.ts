"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type PriceObject = {
  priceBRL: number;
  priceUSD: number;
  priceEUR: number;
};

export function usePrice() {
  const currency = useSelector((state: RootState) => state.currency.currency);

  function format(price: PriceObject) {
    const value =
      currency === "BRL"
        ? price.priceBRL
        : currency === "USD"
        ? price.priceUSD
        : price.priceEUR;

    const locale =
      currency === "BRL" ? "pt-BR" : currency === "USD" ? "en-US" : "es-ES";

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  }

  return { format, currency };
}
