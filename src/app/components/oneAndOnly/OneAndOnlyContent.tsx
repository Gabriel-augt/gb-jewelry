import Image from "next/image";
import OneAndOnlyButton from "./OneAndOnlyButton";

export default function OneAndOnlyContent() {
  return (
    <section
      className="flex flex-row items-center justify-center gap-56 w-full h-max pt-6 pb-28
        max-xl:flex-col-reverse max-xl:gap-12">
      <div className="absolute left-0 -translate-y-60 max-xl:-translate-y-[520px]
      max-xl:w-80 max-lg:w-60 max-sm:-translate-y-[410px]">
        <Image src={"flower-design-3.svg"} alt="Flower design" width={410} height={345}/>
      </div>
      <div className="absolute left-0 -translate-y-72 max-xl:-translate-y-[520px]
      max-lg:w-64 max-sm:-translate-y-[420px] max-sm:w-48">
        <Image src={"particles-2.svg"} alt="Particles" width={410} height={345}/>
      </div>
      <div className="relative max-xl:-translate-x-7 max-sm:-translate-x-16">
        <Image className="rounded-lg rounded-br-[120px] shadow-xl max-md:w-64 max-sm:w-56"
          src={"/one-only-1.png"} alt="Woman with earring" width={360} height={600}/>
        <Image
          className="absolute rounded-lg rounded-tl-[120px] translate-x-48 -translate-y-80
          max-md:w-72 max-md:h-40 min-md:h-60 max-md:-translate-y-52 max-md:translate-x-28"
          src={"/one-only-2.png"} alt="Earring and bracelet" width={400} height={300} />
      </div>
      <div className="flex flex-col gap-4 z-10 px-6">
        <h2 className="font-inter font-light text-lg">Primeiro & Único</h2>
        <h1 className="font-eb-garamond text-5xl max-sm:text-3xl min-sm:w-[420px]">
          Estilo verdadeiramente único
        </h1>
        <p className="font-inter font-light text-lg min-sm:w-64 max-sm:text-base">
          Descubra peças que refletem autenticidade e elegância. Cada joia é
          criada para destacar o seu estilo único. Sinta a diferença de usar
          algo feito para ser o primeiro e o único.
        </p>
        <OneAndOnlyButton />
      </div>
    </section>
  );
}
