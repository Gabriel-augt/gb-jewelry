import Hero from "./Hero";
import { useTranslations } from "next-intl";

export default function HomePage () {
    const t = useTranslations('homePage.anchors');
    return (
        <div id={t('homeAnchor')}>
            <Hero />
        </div>
    )
}