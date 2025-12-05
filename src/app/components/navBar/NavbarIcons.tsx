"use client";

import Link from "next/link";
import { Handbag, Heart } from "lucide-react";
import { useSelector } from "react-redux";

export default function NavBarIcons() {
  const itemsLength = useSelector((state: any) => state.selectedItems.selectedItems);
  return (
    <div className="inline-flex gap-7">
      <Link href="/fav">
        <Heart />
      </Link>
      <Link href="/cart">
        <div className="flex items-center justify-center">
          <span className="absolute translate-y-1 text-xs font-inter font-bold">
            {itemsLength.length}
          </span>
          <Handbag />
        </div>
      </Link>
    </div>
  );
}
