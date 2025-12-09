import { configureStore } from "@reduxjs/toolkit";
import selectedItemsSlice from "./selectedItemsSlice";
import localeReducer from "./localeSlice";
import currencyReducer from "./currencySlice";
import couponReducer from "./couponSlice";

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsSlice,
    locale: localeReducer,
    currency: currencyReducer,
    coupon: couponReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
