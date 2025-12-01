import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Currency = "BRL" | "USD" | "EUR";

type State = {
  currency: Currency;
};

const fromLocal = (key = "currency"): Currency | null => {
  try {
    const v = localStorage.getItem(key);
    if (!v) return null;
    if (v === "BRL" || v === "USD" || v === "EUR") return v;
    return null;
  } catch {
    return null;
  }
};

const DEFAULT: Currency = "BRL";

const initialState: State = {
  currency: (typeof window !== "undefined"
    ? fromLocal() ?? DEFAULT
    : DEFAULT) as Currency,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<Currency>) {
      state.currency = action.payload;
      try {
        localStorage.setItem("currency", action.payload);
      } catch {}
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
