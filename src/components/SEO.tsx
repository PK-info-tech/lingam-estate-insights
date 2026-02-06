"use client";

import Head from "next/head";
import type { StaticImageData } from "next/image";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string | StaticImageData;
  preloadImage?: string | StaticImageData;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  image = "/og-image.jpg",
  preloadImage,
  structuredData,
}: SEOProps) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl =
    canonical
      ? absoluteUrl(canonical)
      : typeof window !== "undefined"
        ? absoluteUrl(window.location.pathname)
        : undefined;
  const imageUrl = absoluteUrl(typeof image === "string" ? image : image?.src || "");
  const resolvePreloadUrl = (src: unknown) => {
    const value = typeof src === "string" ? src : (src as StaticImageData | undefined)?.src;
    if (!value) return undefined;
    if (value.startsWith("http://") || value.startsWith("https://")) return value;
    if (typeof window !== "undefined") {
      return `${window.location.origin}${value.startsWith("/") ? value : `/${value}`}`;
    }
    return absoluteUrl(value);
  };
  const preloadImageUrl = resolvePreloadUrl(preloadImage);
  const structuredDataItems = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {preloadImageUrl && <link rel="preload" as="image" href={preloadImageUrl} />}

      {/* Structured Data */}
      {structuredDataItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Head>
  );
};
