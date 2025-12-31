import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function NavbarHeart() {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  return (
    <Link href="/fav">
      <button className="flex items-center justify-center cursor-pointer">
        <span className="absolute translate-y-px text-xs font-inter font-bold">
          {favorites.length}
        </span>
        <Heart />
      </button>
    </Link>
  );
}
