import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface CollectionsCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

export default function LatestCollectionsCard({name, price, imageUrl}: CollectionsCardProps) {
  return (
    <div>
      <div className="relative w-64">
        <Image
          className="rounded-bl-xl rounded-tr-4xl shadow-sm"
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
