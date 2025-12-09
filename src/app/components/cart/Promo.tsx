"use client";

import { Tag } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon } from "@/store/couponSlice";
import { RootState } from "@/store/store";
import { useCartTotals } from "@/hooks/useCartTotals";

export default function CouponBox() {
  const dispatch = useDispatch();

  const { formatted } = useCartTotals();

  const percentage = useSelector((state: RootState) => state.coupon.percentage);
  const code = useSelector((state: RootState) => state.coupon.code);

  const [inputValue, setInputValue] = useState("");
  const [isApplied, setIsApplied] = useState(false);

  function handleApply() {
    dispatch(applyCoupon(inputValue));
    setIsApplied(true);
  }

  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 w-80 h-max">
      <div className="flex flex-col pt-6 pb-3">
        <div className="flex items-center gap-2 pb-6">
          <Tag size={20} />
          <h4 className="font-bold text-base">Código Promocional</h4>
        </div>

        <div className="flex flex-row gap-3 pb-2">
          <input
            placeholder="Insira o código promocional"
            className="bg-gray-200 rounded-md outline-gray-400 font-semibold tracking-widest text-sm px-3 py-1"
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setIsApplied(false);
            }}
          />

          <button
            disabled={!inputValue.trim()}
            onClick={handleApply}
            className={`px-3 text-sm border rounded-md border-gray-200 font-semibold ${
              !inputValue.trim()
                ? "text-gray-400"
                : "text-black cursor-pointer active:scale-95 transition"
            }`}
          >
            Aplicar
          </button>
        </div>

        <p className="text-xs text-gray-500">
          GBJEWEL10, GBLUXE15, GBPREMIER20
        </p>

        {isApplied && percentage > 0 && (
          <p className="text-sm text-green-500 mt-2 font-semibold">
            Cupom <span className="font-bold">{code}</span> aplicado:
            {percentage}% OFF <br /> (–{formatted.discount})
          </p>
        )}

        {isApplied && percentage === 0 && (
          <p className="text-sm text-red-500 mt-2 font-semibold">
            Cupom inválido.
          </p>
        )}
      </div>
    </div>
  );
}
