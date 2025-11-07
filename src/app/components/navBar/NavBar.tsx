import Link from "next/link";
import { ChevronDown, Gem, Handbag, Heart } from "lucide-react";
import NavBarItem from "./NavBarItem";
import DropdownItem from "./DropdownItem";

export default function NavBar() {
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
            <Link href="#home">Inicio</Link>
          </NavBarItem>

          <NavBarItem>
            <Link href="#about">Sobre</Link>
          </NavBarItem>

          <NavBarItem>
            <div className="relative inline-flex items-center gap-0.5 group">
              <Link href="#shop">Loja</Link>
              <ChevronDown className="group-hover:rotate-180 transition" width={16} height={16} strokeWidth={1} />
              <div className="absolute top-6 left-0 mt-2 w-40 bg-white border border-gray-200 rounded-tr-xl
              rounded-b-xl opacity-0 scale-95 translate-y-2 invisible group-hover:opacity-100 group-hover:scale-100
              group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out">

                <Link href="#">
                <DropdownItem>
                  Anel
                </DropdownItem>
                </Link>

                <Link href="#">
                <DropdownItem>
                  Colar
                </DropdownItem>
                </Link>

                <Link href="#">
                <DropdownItem>
                  Brinco
                </DropdownItem>
                </Link>

                <Link href="#">
                <DropdownItem>
                  Pulseira
                </DropdownItem>
                </Link>

              </div>
            </div>
          </NavBarItem>

          <NavBarItem>
            <Link href="#contact">Contato</Link>
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
