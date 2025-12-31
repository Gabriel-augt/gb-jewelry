"use client";

import { useState } from "react";

import ShopFlowerDesign from "./ShopFlowerDesign";
import CategoryButton from "./CategoryButton";
import Collection from "./Collection";
import { useTranslations } from "next-intl";

export default function ShopContent() {
  const [active, setActive] = useState("ring");
  const t = useTranslations('homePage.navBar');

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-20">
      <ul className="inline-flex gap-12 text-2xl font-eb-garamond font-semibold max-sm:gap-2 max-sm:text-xl"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-anchor-placement="center-bottom">
        <CategoryButton
          label={t('ring')}
          isActive={active === "ring"}
          onClick={() => setActive("ring")}
        />
        <CategoryButton
          label={t('necklace')}
          isActive={active === "necklace"}
          onClick={() => setActive("necklace")}
        />
        <CategoryButton
          label={t('earring')}
          isActive={active === "earring"}
          onClick={() => setActive("earring")}
        />
        <CategoryButton
          label={t('bracelet')}
          isActive={active === "bracelet"}
          onClick={() => setActive("bracelet")}
        />
      </ul>

      <ShopFlowerDesign />

      {active === "ring" && <Collection category="ring" />}
      {active === "necklace" && <Collection category="necklace" />}
      {active === "earring" && <Collection category="earring" />}
      {active === "bracelet" && <Collection category="bracelet" />}
    </div>
  );
}
