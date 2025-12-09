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

  const locale =
    currency === "BRL" ? "pt-BR" : currency === "USD" ? "en-US" : "es-ES";

  function format(price: number | PriceObject) {
    const value =
      typeof price === "number"
        ? price
        : currency === "BRL"
        ? price.priceBRL
        : currency === "USD"
        ? price.priceUSD
        : price.priceEUR;

    const currencyCode =
      currency === "BRL" ? "BRL" : currency === "USD" ? "USD" : "EUR";

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
    }).format(value);
  }

  function formatWithQuantity(price: PriceObject, quantity: number) {
    const unitValue =
      currency === "BRL"
        ? price.priceBRL
        : currency === "USD"
        ? price.priceUSD
        : price.priceEUR;

    const total = unitValue * quantity;

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(total);
  }

  function rawTotal(price: PriceObject, quantity: number) {
    const unitValue =
      currency === "BRL"
        ? price.priceBRL
        : currency === "USD"
        ? price.priceUSD
        : price.priceEUR;

    return unitValue * quantity;
  }

  return { format, formatWithQuantity, rawTotal, currency };
}
