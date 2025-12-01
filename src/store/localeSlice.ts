import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppLocale = "pt-BR" | "en-US" | "es-ES";

interface LocaleState {
  locale: AppLocale;
}

const initialState: LocaleState = {
  locale: "pt-BR",
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = normalizeLocale(action.payload);
    },
  },
});

export const { setLocale } = localeSlice.actions;
export default localeSlice.reducer;

function normalizeLocale(locale: string): AppLocale {
  const map: Record<string, AppLocale> = {
    pt: "pt-BR",
    "pt-BR": "pt-BR",

    en: "en-US",
    "en-US": "en-US",

    es: "es-ES",
    "es-ES": "es-ES",
  };

  return map[locale] ?? "en-US";
}
