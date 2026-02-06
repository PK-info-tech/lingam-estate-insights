import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { getPropertyBySlug } from "@/data/properties";
import {
  PropertyTabs,
  PropertyMap,
  PropertyCTA,
  VerificationBadge,
} from "@/components/property";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

const regionLabels: Record<string, { en: string; ta: string }> = {
  thiruvannamalai: { en: "Thiruvannamalai", ta: "திருவண்ணாமலை" },
  kallakurichi: { en: "Kallakurichi", ta: "கள்ளக்குறிச்சி" },
  villupuram: { en: "Villupuram", ta: "விழுப்புரம்" },
  sankarapuram: { en: "Sankarapuram", ta: "சங்கராபுரம்" },
};

const LandDetail = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ta";
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const property = slug ? getPropertyBySlug(slug) : null;

  if (!property) {
    return (
      <Layout>
        <SEO title="Property Not Found" description="The requested property could not be found." />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-secondary mb-4">{t("lands.notFound")}</h1>
            <Link to="/lands" className="text-primary hover:underline">
              {t("lands.viewAll")}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const title = property.title[currentLang] || property.title.en;
  const description = property.overview[currentLang] || property.overview.en;
  const heroImage = property.images[0];

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "Lands", url: "/lands" },
            { name: title, url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: title,
            description: description,
            url: absoluteUrl(pathname),
            image: heroImage ? absoluteUrl(heroImage.src) : undefined,
            datePosted: property.createdAt,
            dateModified: property.updatedAt,
            offers: {
              "@type": "Offer",
              availability:
                property.buyerProgress.stage === "sold"
                  ? "https://schema.org/SoldOut"
                  : "https://schema.org/InStock",
            },
            address: {
              "@type": "PostalAddress",
              addressRegion: property.region,
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: property.coordinates.lat,
              longitude: property.coordinates.lng,
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Land area",
                value: `${property.area.value} ${property.area.unit}`,
              },
            ],
          },
        ]}
      />

      {/* Header */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/lands"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("lands.back")}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-12">
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="aspect-[4/3] overflow-hidden rounded-lg bg-secondary"
              >
                {heroImage ? (
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt[currentLang] || heroImage.alt.en}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary" />
                )}
              </motion.div>

              {/* Title & Region */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{regionLabels[property.region]?.[currentLang] || property.region}</span>
                </div>
                <h1 className="heading-display text-foreground mb-4">{title}</h1>
                <p className="body-large text-foreground/70">
                  {property.tagline[currentLang] || property.tagline.en}
                </p>
              </motion.div>

              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <PropertyTabs property={property} />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-32 space-y-8"
              >
                <div className="bg-secondary/50 rounded-lg border border-border p-8">
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("property.verificationStatus")}
                  </p>
                  <VerificationBadge status={property.verification} size="sm" />
                  <div className="mt-6 text-sm text-foreground/70">
                    {t("property.area")}: {property.area.value} {property.area.unit}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding-sm border-t border-border">
        <div className="container-luxury">
          <PropertyMap property={property} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-luxury">
          <PropertyCTA propertyTitle={title} />
        </div>
      </section>
    </Layout>
  );
};

export default LandDetail;
