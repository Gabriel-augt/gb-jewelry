import Image from "next/image";
import AboutButton from "./AboutButton";

export default function AboutContent () {
    return (
        <section className="flex flex-row items-center justify-center gap-12 w-full h-max pt-6 pb-28
        max-xl:flex-col">
            <div className="flex flex-col gap-4 px-6">
                <h2 className="font-inter font-light text-lg">
                    Sobre nós
                </h2>
                <h1 className="font-eb-garamond text-5xl max-sm:text-3xl min-sm:w-96">
                    Nós fazemos mágica brilhante acontecer
                </h1>
                <p className="font-inter font-light text-lg max-sm:text-base min-sm:w-64">
                    Em nossa joalheria, buscamos oferecer mais do que apenas peças requintadas.
                    Com paixão pelo artesanato e um olhar para a elegância, convidamos você a explorar nossas
                    coleções.
                </p>
                <AboutButton />
            </div>
            <div className="relative max-[500px]:translate-x-11">
                <Image className="rounded-lg rounded-br-[120px] shadow-xl
                max-md:w-64 max-sm:w-56" src={"/about-1.png"}
                alt="Woman with necklace" width={360} height={600}/>

                <Image className="absolute rounded-lg rounded-tl-[120px] -translate-x-36 -translate-y-72 
                max-md:w-72 max-md:h-40 min-md:h-60 max-md:-translate-y-48 max-md:-translate-x-24"
                src={"/about-2.png"} alt="earring" width={400} height={300}/>
            </div>
        </section>
    )
}