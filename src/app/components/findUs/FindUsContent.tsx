import Image from "next/image";
import FindUsFlowerDesign from "./FindUsFlowerDesign";

export default function FindUsContent () {
    return (
        <section className="flex flex-row items-center justify-center gap-56 w-full
        h-max py-20 max-xl:flex-col-reverse max-xl:gap-12">
              <FindUsFlowerDesign />
              <div className="relative -translate-x-14">
                <Image className="rounded-lg rounded-br-[120px] shadow-xl max-md:w-64 max-sm:w-52"
                  src={"/find-us-1.png"} alt="Woman with earring" width={360} height={600}/>
                <Image
                  className="absolute rounded-lg rounded-tl-[120px] translate-x-48 -translate-y-80
                  max-md:w-72 max-md:h-40 min-md:h-60 max-md:-translate-y-48 max-md:translate-x-28"
                  src={"/find-us-2.png"} alt="Earring and bracelet" width={400} height={300} />
              </div>
              <div className="flex flex-col gap-4 z-10 px-6">
                <h2 className="font-inter font-light text-lg">Entre em contanto</h2>
                <h1 className="font-eb-garamond text-5xl max-sm:text-3xl min-sm:w-[420px]">
                  Encontre-nos aqui
                </h1>
                <div className="flex flex-col font-inter font-light text-lg min-sm:w-64 max-sm:text-base">
                    <span>
                        3266 Lorem Street Spokane, WA 10013 Mon – Sat: 9am – 7pm
                    </span>
                    <span>
                        info@dotcreativemarket.com
                        Dotcreativemarket.com
                    </span>
                </div>
                
              </div>
            </section>
    )
}