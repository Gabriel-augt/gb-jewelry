import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en-US", "es-ES"],
  defaultLocale: "pt-BR",
  localePrefix: {
    mode: "always",
    prefixes: {
      "pt-BR": "/pt",
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
});
