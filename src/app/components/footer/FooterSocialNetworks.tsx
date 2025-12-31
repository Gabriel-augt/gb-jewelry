import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function FooterSocialNetworks() {
  return (
    <ul className="inline-flex gap-4">
      <li>
        <Link href={"https://www.instagram.com"} target="_blank">
          <Instagram
            className="w-max h-max p-3 rounded-full cursor-pointer hover:bg-fuchsia-950"
            size={32}
            strokeWidth={1}
          />
        </Link>
      </li>
      <li>
        <Link href={"https://www.youtube.com"} target="_blank">
          <Youtube
            className="w-max h-max p-3 rounded-full cursor-pointer hover:bg-red-900"
            size={32}
            strokeWidth={1}
          />
        </Link>
      </li>
      <li>
        <Link href={"https://www.facebook.com"} target="_blank">
          <Facebook
            className="w-max h-max p-3 rounded-full cursor-pointer hover:bg-blue-900"
            size={32}
            strokeWidth={1}
          />
        </Link>
      </li>
    </ul>
  );
}
