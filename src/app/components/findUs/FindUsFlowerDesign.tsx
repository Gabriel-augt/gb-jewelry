import Image from "next/image";

export default function FindUsFlowerDesign() {
  return (
    <div className="absolute left-0 max-xl:w-80 max-lg:w-60 -z-10 max-sm:-translate-y-80
    min-sm:-translate-y-96">
      <Image
        src={"flower-design-1.svg"}
        alt="Flower design"
        width={410}
        height={345}
      />
    </div>
  );
}
