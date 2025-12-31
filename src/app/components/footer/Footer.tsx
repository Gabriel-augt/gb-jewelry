import { Gem } from "lucide-react";
import FooterSocialNetworks from "./FooterSocialNetworks";
import Link from "next/link";
import Image from "next/image";
import SubscribeEmail from "../subscribeEmail/SubscribeEmail";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-around gap-8 w-full h-max py-20 px-6
    bg-zinc-800 text-[#B07B54] max-lg:flex-col max-md:h-max max-md:py-16 max-md:gap-16 overflow-x-hidden">
        <div className="inline-flex justify-center items-center gap-2"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom">
          <Gem size={42} strokeWidth={1} />
          <span className="font-eb-garamond text-2xl w-20 leading-5">
            GB Jewelry
          </span>
        </div>
        <div className="flex flex-col items-center gap-16"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom">
          <SubscribeEmail />
          <FooterSocialNetworks />
        </div>
        <Link href={"https://linktr.ee/gabriel_augt"} target="_blank">
        <div className="relative w-48"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom">
          <Image src={"/gb.png"} alt={"Logo"} width={256} height={256}/>
        </div>
        </Link>
    </footer>
  );
}
