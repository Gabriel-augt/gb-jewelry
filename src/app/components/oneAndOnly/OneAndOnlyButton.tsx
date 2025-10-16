import { ArrowDownLeft } from "lucide-react";
import Link from "next/link";

export default function OneAndOnlyButton () {
    return (
        <Link href='#shop'>
            <button className="flex flex-row gap-2 justify-center items-center py-4 px-6 border
            border-zinc-300 rounded-bl-2xl rounded-r-2xl font-eb-garamond group cursor-pointer h-16">
            <ArrowDownLeft width={28} height={28} strokeWidth={1} />
            <span className="group-hover:border-b group-hover:border-b-zinc-500 text-xl h-7 rounded-b-xs">
                Explorar
            </span>
        </button>
        </Link>
    )
}