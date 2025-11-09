"use client";

import { useState } from "react";
import NecklaceCollection from "./NecklaceCollection";
import RingCollection from "./RingCollection";
import EarringCollection from "./EarringCollection";
import BraceletsCollection from "./BraceletCollection";
import ShopFlowerDesign from "./ShopFlowerDesign";
import CategoryButton from "./CategoryButton";

export default function ShopContent() {
  const [active, setActive] = useState("ring");

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-20">
      <ul className="inline-flex gap-12 text-2xl font-eb-garamond font-semibold max-sm:gap-2">
        <CategoryButton
          label="Anel"
          isActive={active === "ring"}
          onClick={() => setActive("ring")}
        />
        <CategoryButton
          label="Colar"
          isActive={active === "necklace"}
          onClick={() => setActive("necklace")}
        />
        <CategoryButton
          label="Brinco"
          isActive={active === "earring"}
          onClick={() => setActive("earring")}
        />
        <CategoryButton
          label="Pulseira"
          isActive={active === "bracelet"}
          onClick={() => setActive("bracelet")}
        />
      </ul>

      <ShopFlowerDesign />

      {active === "ring" && <RingCollection />}
      {active === "necklace" && <NecklaceCollection />}
      {active === "earring" && <EarringCollection />}
      {active === "bracelet" && <BraceletsCollection />}
    </div>
  );
}
