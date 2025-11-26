import Image from "next/image";
import { useTranslations } from "next-intl";

export default function OneOnlyFlowerDesign() {
  const t = useTranslations();
  return (
    <div className="absolute left-0 -translate-y-[416px] min-sm:-translate-y-[526px] min-md:-translate-y-[608px]
    max-xl:w-80 max-lg:w-60 max-[395px]:-translate-y-[422px] min-lg:-translate-y-[616px] min-xl:-translate-y-[316px] -z-10">
      <Image
        src={"flower-design-3.svg"}
        alt={t('altFlowerDesign')}
        width={410}
        height={345}
      />
    </div>
  );
}
