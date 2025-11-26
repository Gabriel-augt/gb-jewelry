import Image from "next/image";
import { useTranslations } from "next-intl";

export default function LatestCollectionsFlowerDesign() {
  const t = useTranslations();
  return (
    <div className="absolute right-0 min-xl:-translate-y-64 min-sm:-translate-y-[560px]
    max-xl:w-80 max-lg:w-60 max-sm:-translate-y-[1002px] -z-10">
      <Image
        src={"flower-design-2.svg"}
        alt={t('altFlowerDesign')}
        width={410}
        height={345}
      />
    </div>
  );
}
