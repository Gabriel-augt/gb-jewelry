import { ReactNode } from "react";

export default function DropdwonItem ({children}: {children: ReactNode}) {
    return (
        <span className="block rounded-xl px-4 py-2 text-gray-700 hover:bg-gray-100">
            {children}
        </span>
    )
}