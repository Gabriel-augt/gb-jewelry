import Image from "next/image";
import HeroButton from "./HeroButton";

export default function Hero() {
    return (
        <main>
            <section className="flex justify-evenly items-center w-full h-screen bg-white">
                <div className="flex flex-col justify-center items-center text-black">
                    <div className="relative w-[500px] h-[500px]">
                    <Image src={"/flower-design-1.svg"} alt={"Flower Design"} fill/>
                    </div>
                    <div className="absolute text-center font-inter text-lg w-[500px]">
                        <span>Vestibulum aliquam porta eros</span>
                        <h1 className="font-cormorant font-medium text-6xl">
                        Joias únicas, pedras preciosas raras e peças requintadas!
                        </h1>
                        <p className="font-eb-garamond font-light mt-8 text-left">
                            Aqui, oferecemos diversos tipos de joias, incluindo colares, pulseiras, brincos e anéis. De designs clássicos a estilos modernos, temos algo para todos os gostos.
                        </p>
                        <HeroButton />
                    </div>
                </div>
                <div className="relative border border-zinc-200 w-[456px] h-[656px] rounded-t-full">
                    <Image className="p-8 rounded-t-full" src={"/model-hero.jpg"} alt={"Model"} fill/>
                    <Image className="translate-y-64 -translate-x-12" src={"/star.svg"} alt={"Model"} width={80} height={80}/>
                </div>
            </section>
        </main>
    )
}