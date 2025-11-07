import Image from "next/image";

export default function ShopFlowerDesign() {
  return (
    <div
      className="absolute right-0 max-xl:w-80 max-lg:w-60 -translate-y-80 max-lg:-translate-y-56 ">
      <Image
        src={"flower-design-4.svg"}
        alt="Flower design"
        width={410}
        height={345}
      />
    </div>
  );
}
