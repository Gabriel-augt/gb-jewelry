"use client";

import { Tag, CheckCheck, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, removeCoupon } from "@/store/couponSlice";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

export default function CouponBox() {
  const dispatch = useDispatch();

  const { percentage, code } = useSelector((state: RootState) => state.coupon);

  const [inputValue, setInputValue] = useState("");
  const [TriedApply, setTriedApply] = useState(false);

  function handleApply() {
    setTriedApply(true);
    dispatch(applyCoupon(inputValue));
  }

  function handleRemove() {
    dispatch(removeCoupon());
    setTriedApply(false);
  }

  const ValidCoupon = Boolean(code && percentage > 0);
  const t = useTranslations('cart.promotionalCode');
  return (
    <div className="font-eb-garamond text-xl border border-gray-200 rounded-md px-6 w-80 h-max max-sm:px-3">
      <div className="flex flex-col pt-6 pb-3">
        <div className="flex items-center gap-2 pb-3">
          <Tag size={20} />
          <h4 className="font-bold text-base">{t('titlePromo')}</h4>
        </div>

        {!ValidCoupon && (
          <>
            <div className="flex flex-row gap-3 pb-2 max-sm:gap-2">
              <input
                placeholder={t('couponPlaceholder')}
                className="bg-gray-200 rounded-md outline-gray-400 font-semibold tracking-widest text-sm px-3 py-1 max-sm:w-full"
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setTriedApply(false);
                }}
              />

              <button
                disabled={!inputValue.trim()}
                onClick={handleApply}
                className={`px-3 text-sm border rounded-md border-gray-200 font-semibold ${
                  !inputValue.trim()
                    ? "text-gray-400"
                    : "text-black cursor-pointer active:scale-95 transition"
                }`}>
                {t('apply')}
              </button>
            </div>

            <p className="text-xs text-gray-500">
              GBJEWEL10, GBLUXE15, GBPREMIER20
            </p>
          </>
        )}

        {ValidCoupon && (
          <div className="flex items-center justify-between px-3 py-2">
            <div className="inline-flex gap-1 items-center">
              <CheckCheck size={16} />
              <p className="text-sm font-semibold">
                {code} ({percentage}% OFF)
              </p>
            </div>

            <button onClick={handleRemove} className="cursor-pointer">
              <X stroke="#99A1AF" size={20} />
            </button>
          </div>
        )}

        {TriedApply && !ValidCoupon && (
          <p className="text-sm text-red-600 mt-2 font-semibold">
            Cupom inválido.
          </p>
        )}
      </div>
    </div>
  );
}
