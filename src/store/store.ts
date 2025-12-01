import { configureStore } from "@reduxjs/toolkit";
import selectedItemsSlice from "./selectedItemsSlice";
import localeReducer from "./localeSlice";
import currencyReducer from "./currencySlice";

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsSlice,
    locale: localeReducer,
    currency: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
