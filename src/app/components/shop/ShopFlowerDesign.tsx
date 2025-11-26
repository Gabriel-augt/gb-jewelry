import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ShopFlowerDesign() {
  const t = useTranslations();
  return (
    <div
      className="absolute -z-10 right-0 max-xl:w-80 max-lg:w-60 -translate-y-96">
      <Image
        src={"flower-design-4.svg"}
        alt={t('altFlowerDesign')}
        width={410}
        height={345}
      />
    </div>
  );
}
