import rings from "@/app/data/products/ring.json";
import necklaces from "@/app/data/products/necklace.json";
import earrings from "@/app/data/products/earring.json";
import bracelets from "@/app/data/products/bracelet.json";
import LatestCollectionsCard from "./LatestCollectionsCard";
import LatestCollectionsFlowerDesign from "./LatestCollectionsFlowerDesign";
import { useTranslations } from "next-intl";

export default function LatestCollectionsontent() {
  const firstRing = rings[0];
  const firstNecklace = necklaces[0];
  const firstEarring = earrings[0];
  const firsBracelet = bracelets[0];
  const t = useTranslations('bestsellers');
  return (
    <div className="flex flex-col items-center justify-center w-full h-max py-20 gap-20 overflow-x-hidden">
      <LatestCollectionsFlowerDesign /> 
      <div className="flex flex-col gap-4"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-anchor-placement="center-bottom">
        <h2 className="font-inter font-light text-lg">
          {t('latestCollection')}
        </h2>
        <h1 className="font-eb-garamond text-5xl w-max max-sm:text-3xl">
          {t('titleBestsellers')}
        </h1>
      </div>
      <section className="flex flex-row justify-center gap-16 mx-6 max-xl:w-[620px] max-xl:flex-wrap max-sm:w-auto"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-bottom">
        <LatestCollectionsCard id={firstRing.id} name={firstRing.name} price={firstRing.price} imageUrl={firstRing.image} />
        <LatestCollectionsCard id={firstNecklace.id} name={firstNecklace.name} price={firstNecklace.price} imageUrl={firstNecklace.image} />
        <LatestCollectionsCard id={firstEarring.id} name={firstEarring.name} price={firstEarring.price} imageUrl={firstEarring.image} />
        <LatestCollectionsCard id={firsBracelet.id} name={firsBracelet.name} price={firsBracelet.price} imageUrl={firsBracelet.image} />
      </section>
    </div>
  );
}
