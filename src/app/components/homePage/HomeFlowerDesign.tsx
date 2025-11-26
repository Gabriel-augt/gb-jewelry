import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomeFlowerDesign() {
  const t = useTranslations();
  return (
    <div className="absolute left-0 max-xl:w-80 max-lg:w-60 -z-10 max-sm:translate-y-[532px]
      min-sm:translate-y-[562px] min-lg:translate-y-[608px] min-xl:translate-y-[508px]">
      <Image
        src={"flower-design-1.svg"}
        alt={t('altFlowerDesign')}
        width={410}
        height={345}
      />
    </div>
  );
}
