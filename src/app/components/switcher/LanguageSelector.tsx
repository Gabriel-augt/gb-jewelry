"use client";

import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import CurrencySelector from "./CurrencySelector";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const localeFromPath = pathname.split("/")[1];

  const languages = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) setOpen(!open);
  };

  const changeLanguage = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <div
      className="fixed right-0 top-12 z-50 flex items-center"
      onClick={handleToggle}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
      data-aos="fade-left"
      data-aos-delay="700">
      <button className={`flex items-center justify-center bg-gray-800 text-white
      p-2 rounded-l-full transition-all duration-300 hover:bg-gray-700
      ${open ? "-translate-x-1" : ""}`}>
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className={`overflow-hidden bg-gray-900 text-white rounded-l-lg transition-all duration-300
      ${open ? "w-28 opacity-100" : "w-0 opacity-0"}`}>
        <div className="px-4 py-3 space-y-3">
          <div>
            <p className="text-xs text-gray-300 mb-1">Idioma</p>
            <ul className="space-y-1">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`cursor-pointer hover:text-gray-300
                ${localeFromPath === lang.code ? "text-yellow-400" : ""}`}>
                  {lang.label}
                </li>
              ))}
            </ul>
          </div>
          <CurrencySelector />
        </div>
      </div>
    </div>
  );
}
