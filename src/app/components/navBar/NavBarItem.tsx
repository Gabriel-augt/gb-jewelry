import { ReactNode } from "react";

export default function NavBarItem ({children}: {children: ReactNode}) {
    return (
        <li className="hover:border-b hover:rounded-b-xs hover:border-b-zinc-300">
            <button>
                {children}
            </button>
        </li>
    )
}