import Image from "next/image";
import rings from "@/app/data/products/ring.json";
import necklaces from "@/app/data/products/necklace.json";
import earrings from "@/app/data/products/earring.json";
import bracelets from "@/app/data/products/bracelet.json";
import LatestCollectionsCard from "./LatestCollectionsCard";
import { useTranslations } from "next-intl";

export default function LatestCollectionsontent() {
  const firstRing = rings[0];
  const firstNecklace = necklaces[0];
  const firstEarring = earrings[0];
  const firsBracelet = bracelets[0];
  const t = useTranslations('bestsellers');
  return (
    <div className="flex flex-col items-center justify-center w-full h-max py-20 gap-20">
      <div className="absolute right-0 min-xl:-translate-y-64 min-sm:-translate-y-[560px] max-xl:w-80 max-lg:w-60 max-sm:-translate-y-[942px]">
        <Image src={"flower-design-2.svg"} alt="Flower design" width={410} height={345} />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-inter font-light text-lg">
          {t('latestCollection')}
        </h2>
        <h1 className="font-eb-garamond text-5xl w-max max-sm:text-3xl">
          {t('titleBestsellers')}
        </h1>
      </div>
      <section className="flex flex-row justify-center gap-16 mx-6 max-xl:w-[620px] max-xl:flex-wrap max-sm:w-auto">
        <LatestCollectionsCard name={firstRing.name} price={firstRing.price} imageUrl={firstRing.image} />
        <LatestCollectionsCard name={firstNecklace.name} price={firstNecklace.price} imageUrl={firstNecklace.image} />
        <LatestCollectionsCard name={firstEarring.name} price={firstEarring.price} imageUrl={firstEarring.image} />
        <LatestCollectionsCard name={firsBracelet.name} price={firsBracelet.price} imageUrl={firsBracelet.image} />
      </section>
    </div>
  );
}
