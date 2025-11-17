import Link from "next/link";
import { ChevronDown, Gem, Handbag, Heart } from "lucide-react";
import NavBarItem from "./NavBarItem";
import DropdownItem from "./DropdownItem";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const t = useTranslations('homePage');
  return (
    <nav className="fixed font-cormorant flex justify-center items-center w-full z-10 text-black invisible md:visible">
      <div className="flex flex-row justify-around items-center w-full py-3 backdrop-blur-3xl">
        <div className="inline-flex justify-center items-center gap-2">
          <Gem strokeWidth={1} size={42} />

          <span className="font-eb-garamond text-2xl w-20 leading-5">
            GB Jewelry
          </span>
        </div>

        <ul className="inline-flex gap-6 text-xl font-bold tracking-wide">

          <NavBarItem>
            <Link href={`#${t('anchors.homeAnchor')}`}>{t('navBar.home')}</Link>
          </NavBarItem>

          <NavBarItem>
            <Link href={`#${t('anchors.aboutAnchor')}`}>{t('navBar.about')}</Link>
          </NavBarItem>

          <NavBarItem>
            <div className="relative inline-flex items-center gap-0.5 group">

              <Link href={`#${t('anchors.shopAnchor')}`}>{t('navBar.shop')}</Link>

              <ChevronDown className="group-hover:rotate-180 transition" width={16} height={16} strokeWidth={1} />
              <div className="absolute top-6 left-0 mt-2 w-40 bg-white border border-gray-200 rounded-tr-xl
              rounded-b-xl opacity-0 scale-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100
              group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out">

                <Link href="#">
                <DropdownItem>
                  {t('navBar.ring')}
                </DropdownItem>
                </Link>

                <Link href="#">
                <DropdownItem>
                  {t('navBar.necklace')}
                </DropdownItem>
                </Link>

                <Link href="#">
                <DropdownItem>
                  {t('navBar.earring')}
                </DropdownItem>
                </Link>

                <Link href="#">
                <DropdownItem>
                  {t('navBar.bracelet')}
                </DropdownItem>
                </Link>

              </div>
            </div>
          </NavBarItem>

          <NavBarItem>
            <Link href={`#${t('anchors.contactAnchor')}`}>{t('navBar.contact')}</Link>
          </NavBarItem>
        </ul>

        <div className="inline-flex gap-7">
          <Heart />
          <Handbag />
        </div>
      </div>
    </nav>
  );
}
