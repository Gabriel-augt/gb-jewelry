import Carousel from "./Carousel";
import { useTranslations } from "next-intl";

type CollectionSectionProps = {
  category: "ring" | "necklace" | "earring" | "bracelet";
};

const categoryTitleKey: Record<CollectionSectionProps["category"], string> = {
  ring: "ringCollection",
  necklace: "necklaceCollection",
  earring: "earringCollection",
  bracelet: "braceletCollection",
};

export default function CollectionSection({ category }: CollectionSectionProps) {
  const t = useTranslations("shop");
  return (
    <div className="flex flex-col items-center justify-center w-full h-max pt-6 gap-12"
    data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-anchor-placement="center-bottom">
      <div className="flex flex-col gap-4">
        <h1 className="font-cormorant font-bold text-4xl w-max">
          {t(categoryTitleKey[category])}
        </h1>
      </div>

      <Carousel category={category} />
    </div>
  );
}
