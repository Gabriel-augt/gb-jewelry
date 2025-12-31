import { useSelector } from "react-redux";
import Link from "next/link";
import { Handbag } from "lucide-react";

export default function NavBarHandbag() {
  const itemsLength = useSelector((state: any) => state.selectedItems.selectedItems);
  return (
    <Link href="/cart">
      <button className="flex items-center justify-center cursor-pointer">
        <span className="absolute translate-y-1 text-xs font-inter font-bold">
          {itemsLength.length}
        </span>
        <Handbag />
      </button>
    </Link>
  );
}
