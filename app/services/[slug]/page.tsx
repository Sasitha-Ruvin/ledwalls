import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  buildServiceDetailSchema,
  getServiceBySlug,
  getServiceSlugs,
} from "@/lib/data/services";
import { buildPageMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return buildPageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: service.href,
    keywords: service.seo.keywords,
    ogImage: service.img,
    ogImageAlt: service.seo.h1,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <JsonLd data={buildServiceDetailSchema(service)} />
      <ServiceDetailView service={service} />
    </main>
  );
}
