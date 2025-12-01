"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "@/store/localeSlice";
import { RootState } from "@/store/store";

export function useLocaleSync() {
  const currentLocale = useLocale();
  const reduxLocale = useSelector((state: RootState) => state.locale.locale);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentLocale !== reduxLocale) {
      dispatch(setLocale(currentLocale));
    }
  }, [currentLocale, reduxLocale, dispatch]);
}
