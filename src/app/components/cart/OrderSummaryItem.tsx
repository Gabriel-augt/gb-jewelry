"use client";

type PriceRowProps = {
  label: string;
  value: string | number;
};

export default function OrderSummaryItem({ label, value }: PriceRowProps) {
  return (
    <div className="flex justify-between">
      <span className="font-bold text-base">{label}</span>
      <span>{value}</span>
    </div>
  );
}
