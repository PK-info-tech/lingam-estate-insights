export const SITE_URL = "https://lingamestate.com";
export const SITE_NAME = "Lingam Estate";
export const SITE_TAGLINE = "Verified land. Zero stress. End-to-end handled.";
export const SITE_LOGO_PATH = "/og-image.jpg";

export const absoluteUrl = (path: string) => {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const buildBreadcrumbList = (
  items: { name: string; url: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

export const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl(SITE_LOGO_PATH),
  description: SITE_TAGLINE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: ["Tamil Nadu", "India"],
});

export const buildWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
});
