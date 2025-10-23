import BraceletsCarousel from "./BraceletCarousel";

export default function BraceletsCollection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-max pt-6 gap-12">
        <div className="flex flex-col gap-4 z-10">
          <h1 className="font-cormorant font-bold text-4xl w-max">
            Coleção de Pulseiras
          </h1>
        </div>
        <BraceletsCarousel />
      </div>
    </div>
  );
}
