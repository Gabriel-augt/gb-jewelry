import Image from "next/image";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <main className="inline-flex items-center justify-evenly h-screen w-full gap-16
    max-xl:flex-col max-xl:justify-center min-xl:gap-28 max-md:h-[860px]">
      <div className="flex flex-col text-black w-max px-6 max-md:w-full">
        <h1 className="text-7xl font-cormorant font-semibold uppercase text-shadow-md
        w-96 max-sm:text-5xl min-lg:text-8xl">
          Sinta o Glamour
        </h1>
        <span
          className="font-inter font-light text-sm text-shadow-sm pt-6
          max-sm:text-sm max-sm:w-80">
          Abrace o glamour e revele seu brilho interior com nossas criações exclusivas.
        </span>
        <HeroButton />
      </div>
      <div className="inline-flex gap-6 max-sm:gap-3">
        <div className="relative w-44 h-96 translate-y-20 min-md:w-60
        min-md:h-96 min-xl:w-[364px] min-xl:h-[600px] max-sm:h-80">
        <Image
          className="object-cover"
          src="/hero-2.jpg"
          alt="Earring"
          fill
        />
      </div>
      <div className="relative w-44 h-96 min-md:w-60 min-md:h-96
      min-xl:w-[364px] min-xl:h-[600px] max-sm:h-80">
        <Image
          className="object-cover"
          src="/hero-1.jpg"
          alt="Woman with jewelry"
          fill
        />
      </div>
      </div>
    </main>
  );
}
