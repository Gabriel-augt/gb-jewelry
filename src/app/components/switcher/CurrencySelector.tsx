"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { setCurrency, Currency } from "@/store/currencySlice";
import { useLocale } from "next-intl";

const currencies: Currency[] = ["BRL", "USD", "EUR"];

export default function CurrencySwitcher() {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector((state: RootState) => state.currency.currency);
  const locale = useLocale();

  useEffect(() => {
    const map: Record<string, Currency> = {
      "pt-BR": "BRL",
      pt: "BRL",
      "en-US": "USD",
      en: "USD",
      "es-ES": "EUR",
      es: "EUR",
    };

    const expected = map[locale] ?? "BRL";

    if (currency !== expected) {
      dispatch(setCurrency(expected));
    }
  }, [locale]);

  const changeCurrencyHandler = (c: Currency) => {
    dispatch(setCurrency(c));
  };

  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">Moeda</p>
      <ul className="space-y-1 w-20">
        {currencies.map((c) => (
          <li
            key={c}
            onClick={() => changeCurrencyHandler(c)}
            className={`cursor-pointer hover:text-gray-300 transition-colors ${
              currency === c ? "text-yellow-400" : ""
            }`}
          >
            {c} {c === "BRL" ? "(R$)" : c === "USD" ? "($)" : "(€)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
