"use client";

import { ReactNode } from "react";
import { useLocaleSync } from "@/hooks/useSyncLocale";

export default function LocaleProvider({ children }: { children: ReactNode }) {
  useLocaleSync();
  return children;
}
