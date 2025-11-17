import AboutContent from "./AboutContent"
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('homePage.anchors');
    return (
        <div id={t('aboutAnchor')}>
            <AboutContent />
        </div>
    )
}