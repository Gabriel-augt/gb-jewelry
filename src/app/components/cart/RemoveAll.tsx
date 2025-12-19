import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { resetItem } from "@/store/selectedItemsSlice";
import { useTranslations } from "next-intl";

export default function RemoveAll() {
  const dispatch = useDispatch();
  const t = useTranslations('buttonLabels');
  return (
    <button className="flex flex-row gap-1 cursor-pointer items-center
    h-max p-2 rounded-md hover:bg-gray-100"
    onClick={() => dispatch(resetItem())}>
      <Trash size={20} />
      {t('removeAll')}
    </button>
  );
}
