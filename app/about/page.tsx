import { AboutClosingSection } from "@/components/about/AboutClosingSection";
import AboutHero from "@/components/about/AboutHero";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutTimelineSection from "@/components/about/AboutTimelineSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import TickerBar from "@/components/home/TickerBar";
import { JsonLd } from "@/components/shared/JsonLd";
import { AboutPageMetaData, buildAboutSchema } from "@/lib/data/about";
import { buildPageMetadata, SITE_OG_IMAGE, SITE_OG_IMAGE_ALT } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: AboutPageMetaData.title,
  description: AboutPageMetaData.description,
  path: "/about",
  keywords: AboutPageMetaData.keywords,
  ogImage: SITE_OG_IMAGE,
  ogImageAlt: SITE_OG_IMAGE_ALT,
});

export default function AboutPage(){
    return(
        <main>
            <JsonLd data={buildAboutSchema()}/>
            <AboutHero/>
            <TickerBar/>
            <AboutStorySection/>
            <AboutValuesSection/>
            <AboutTimelineSection/>
            <AboutClosingSection/>
        </main>
    );
}