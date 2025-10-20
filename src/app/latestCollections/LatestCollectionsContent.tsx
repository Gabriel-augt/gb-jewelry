import Image from "next/image";
import rings from "@/app/data/products/ring.json";
import necklaces from "@/app/data/products/necklace.json";
import earrings from "@/app/data/products/earring.json";
import bracelets from "@/app/data/products/bracelet.json";
import LatestCollectionsCard from "./LatestCollectionsCard";

export default function LatestCollectionsontent() {
  const firstRing = rings[0];
  const firstNecklace = necklaces[0];
  const firstEarring = earrings[0];
  const firsBracelet = bracelets[0];
  return (
    <div className="flex flex-col items-center justify-center w-full h-max pt-6 pb-28 gap-20">
      <div className="absolute right-0 min-xl:-translate-y-64 min-[611px]:-translate-y-[520px] max-xl:w-80 max-lg:w-60 max-sm:-translate-y-[930px]">
        <Image src={"flower-design-2.svg"} alt="Flower design" width={410} height={345} />
      </div>
      <div className="absolute right-0  min-xl:-translate-y-72 min-[611px]:-translate-y-[520px] max-lg:w-60 max-sm:-translate-y-[940px]">
        <Image src={"particles-1.svg"} alt="Particles" width={410} height={345} />
      </div>
      <div className="flex flex-col gap-4 z-10">
        <h2 className="font-inter font-light text-lg">
          Última coleção
        </h2>
        <h1 className="font-eb-garamond text-5xl w-max max-sm:text-3xl">
          Mais vendidos da semana
        </h1>
      </div>
      <section className="flex flex-row justify-center gap-16 mx-6 max-xl:w-[620px] max-xl:flex-wrap max-sm:w-auto max-sm:gap-9">
        <LatestCollectionsCard name={firstRing.name} price={firstRing.price} imageUrl={firstRing.image} />
        <LatestCollectionsCard name={firstNecklace.name} price={firstNecklace.price} imageUrl={firstNecklace.image} />
        <LatestCollectionsCard name={firstEarring.name} price={firstEarring.price} imageUrl={firstEarring.image} />
        <LatestCollectionsCard name={firsBracelet.name} price={firsBracelet.price} imageUrl={firsBracelet.image} />
      </section>
    </div>
  );
}
