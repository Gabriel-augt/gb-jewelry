import ShopContent from "./ShopContent";
import { useTranslations } from "next-intl";

export default function Shop () {
    const t = useTranslations('homePage.anchors');
    return (
        <div id={t('shopAnchor')}>
            <ShopContent />
        </div>
    )
}