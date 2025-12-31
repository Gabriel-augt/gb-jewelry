import Link from "next/link";
import { ChevronDown, Gem } from "lucide-react";
import NavBarItem from "./NavBarItem";
import DropdownItem from "./DropdownItem";
import { useTranslations } from "next-intl";
import NavBarIcons from "./NavbarIcons";

export default function NavBar() {
  const t = useTranslations('homePage');
  return (
    <nav className="fixed font-cormorant flex justify-center items-center w-full z-10 text-black invisible md:visible"
    data-aos="fade-down"
    data-aos-duration="1500">
      <div className="flex flex-row justify-around items-center w-full py-3 backdrop-blur-3xl">
        <div className="inline-flex justify-center items-center gap-2">
          <Gem strokeWidth={1} size={42}
          data-aos="flip-right"
          data-aos-delay="1600" />
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
            </div>
          </NavBarItem>

          <NavBarItem>
            <Link href={`#${t('anchors.contactAnchor')}`}>{t('navBar.contact')}</Link>
          </NavBarItem>
        </ul>

        <NavBarIcons />
      </div>
    </nav>
  );
}
