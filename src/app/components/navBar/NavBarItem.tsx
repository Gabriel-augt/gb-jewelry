import { ReactNode } from "react";

export default function NavBarItem ({children}: {children: ReactNode}) {
    return (
        <li className="min-md:hover:border-b min-md:hover:rounded-b-xs min-md:hover:border-b-zinc-300">
            <button>
                {children}
            </button>
        </li>
    )
}