"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import rings from "@/app/data/products/ring.json";
import ShopCard from "./ShopCard";

export default function RingsCarousel() {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const totalItems = rings.length;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setVisible(1);
      } else {
        setVisible(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = totalItems - visible;

  function prev() {
    setIndex((s) => Math.max(0, s - 1));
  }

  function next() {
    setIndex((s) => Math.min(maxIndex, s + 1));
  }

  const stepPercent = 100 / visible;
  const translate = `translateX(-${index * stepPercent}%)`;

  return (
    <div className="relative flex flex-row items-center w-full mx-auto min-[900px]:max-w-4xl">
      <button
        onClick={prev}
        disabled={index === 0}
        aria-label="Anterior"
        className="p-2 h-10 rounded-full shadow-md disabled:opacity-40 max-[900px]:translate-x-48
        max-md:translate-x-32 max-sm:translate-x-12 max-[395px]:-translate-y-12 z-10">
        <ChevronLeft />
      </button>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: translate }}>
          {rings.map((ring) => (
            <div
              key={ring.id}
              className="flex-shrink-0 px-2 w-full min-[900px]:w-1/3"
              aria-hidden={false}>
              <div className="flex items-center justify-center flex-col h-max">
                <ShopCard
                  name={ring.name}
                  price={ring.price}
                  imageUrl={ring.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={next}
        disabled={index === maxIndex}
        aria-label="Próximo"
        className="p-2 h-10 rounded-full shadow-md disabled:opacity-40 max-[900px]:-translate-x-48
        max-md:-translate-x-32 max-sm:-translate-x-12 max-[395px]:-translate-y-12 z-10">
        <ChevronRight />
      </button>
    </div>
  );
}
