import Image from "next/image";

export default function HomeFlowerDesign() {
  return (
    <div className="absolute left-0 max-xl:w-80 max-lg:w-60 -z-10 max-sm:translate-y-[532px]
      min-sm:translate-y-[562px] min-lg:translate-y-[608px] min-xl:translate-y-[508px]">
      <Image
        src={"flower-design-1.svg"}
        alt="Flower design"
        width={410}
        height={345}
      />
    </div>
  );
}
