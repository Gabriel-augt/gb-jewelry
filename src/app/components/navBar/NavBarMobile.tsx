"use client";

import { useState } from "react";
import Link from "next/link";
import { Gem, Menu, X, ChevronDown, Heart, Handbag } from "lucide-react";
import NavBarItem from "./NavBarItem";
import { useTranslations } from "next-intl";

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = useTranslations('homePage');

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-3xl min-md:invisible font-cormorant">
      <div className="flex items-center justify-between px-6 py-3">

        <button className="min-md:hidden text-gray-700"onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link href="/" className="text-xl font-semibold text-gray-800">
          <div className="inline-flex justify-center items-center gap-1">
            <Gem strokeWidth={1} size={32} />

            <span className="font-eb-garamond text-base leading-4">
              GB <br /> Jewelry
            </span>
          </div>
        </Link>

        <div className="inline-flex gap-6">
          <Heart />
          <Handbag />
        </div>
      </div>

      <div className={`min-md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out 
        ${ menuOpen ? "h-max opacity-100" : "max-h-0 opacity-0"}`}>

        <ul className="flex flex-col space-y-6 px-6 py-3 text-gray-700 font-medium text-2xl">
          <NavBarItem>
            <Link href={`#${t('anchors.homeAnchor')}`} onClick={() => setMenuOpen(false)}>
              {t('navBar.home')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href={`#${t('anchors.aboutAnchor')}`} onClick={() => setMenuOpen(false)}>
              {t('navBar.about')}
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link href={`#${t('anchors.contactAnchor')}`} onClick={() => setMenuOpen(false)}>
              {t('navBar.contact')}
            </Link>
          </NavBarItem>

          <li>
            <button className="flex items-center justify-between w-full"
              onClick={() => setDropdownOpen(!dropdownOpen)}>
              {t('navBar.shop')}
              <ChevronDown size={18} className={`transition-transform duration-300 
              ${ dropdownOpen ? "rotate-180" : "" }`} />
            </button>

            <ul className={`pl-4 mt-2 flex flex-col space-y-6 transition-all duration-300 ease-in-out
            ${ dropdownOpen ? "h-max opacity-100" : "max-h-0 opacity-0" }`}>
              <NavBarItem>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  {t('navBar.ring')}
                </Link>
              </NavBarItem>
              <NavBarItem>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  {t('navBar.necklace')}
                </Link>
              </NavBarItem>
              <NavBarItem>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  {t('navBar.earring')}
                </Link>
              </NavBarItem>
              <NavBarItem>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  {t('navBar.bracelet')}
                </Link>
              </NavBarItem>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
