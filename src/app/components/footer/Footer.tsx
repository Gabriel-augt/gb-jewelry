import { Gem } from "lucide-react";
import FooterSocialNetworks from "./FooterSocialNetworks";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-around gap-8 w-full h-80
    bg-zinc-800 text-[#B07B54] max-md:flex-col max-md:h-max max-md:py-16 max-md:gap-16">
        <div className="inline-flex justify-center items-center gap-2">
          <Gem size={42} strokeWidth={1} />

          <span className="font-eb-garamond text-2xl w-20 leading-5">
            GB Jewelry
          </span>
        </div>
        <FooterSocialNetworks />
        <Link href={"https://linktr.ee/gabriel_augt"} target="_blank">
        <div className="relative w-48">
          <Image src={"/gb.png"} alt={"Logo"} width={256} height={256}/>
        </div>
        </Link>
    </footer>
  );
}
