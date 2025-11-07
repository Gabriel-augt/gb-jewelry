import Carousel from "./Carousel";

export default function NecklaceCollection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-max pt-6 gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="font-cormorant font-bold text-4xl w-max">
            Coleção de Colares
          </h1>
        </div>
        <Carousel category="necklace" />
      </div>
    </div>
  );
}
