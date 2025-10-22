import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ShopCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

export default function ShopCard({name, price, imageUrl}: ShopCardProps) {
  return (
    <div>
      <div className="relative w-64 h-96 rounded-bl-xl rounded-tr-4xl max-[395px]:w-48 min-[900px]:shadow-sm">
        <Image
          className="w-64 h-64 max-[395px]:w-48 max-[395px]:h-48"
          src={imageUrl}
          alt={name}
          width={360}
          height={360}
        />
        <div className="flex flex-row justify-around items-center py-5">
          <div>
            <h2 className="text-2xl font-semibold font-eb-garamond">{name}</h2>
            <span className="text-gray-600">{price}</span>
          </div>
          <div className="flex flex-col gap-3">
            <button className="cursor-pointer">
              <Heart
                className="hover:fill-red-400 hover:stroke-0 p-1 w-9 h-9 border border-gray-200 rounded-md"
                strokeWidth={1.5}
                stroke="#99a1af"
              />
            </button>
            <button className="cursor-pointer">
              <ShoppingCart
                className="hover:fill-[#99a1af] p-1 w-9 h-9 border border-gray-200 rounded-md"
                strokeWidth={1.5}
                stroke="#99a1af"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
