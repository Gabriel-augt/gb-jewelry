"use client";

import NavBarHandbag from "./NavBarHandbag";
import NavbarHeart from "./NavbarHeart";

export default function NavBarIcons() {
  return (
    <div className="inline-flex gap-7">
      <NavbarHeart />
      <NavBarHandbag />
    </div>
  );
}
