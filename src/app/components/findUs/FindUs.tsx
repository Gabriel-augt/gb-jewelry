import FindUsContent from "./FindUsContent";
import { useTranslations } from "next-intl";

export default function FindUs () {
    const t = useTranslations('homePage.anchors');
    return (
        <div id={t('contactAnchor')}>
            <FindUsContent />
        </div>
    )
}