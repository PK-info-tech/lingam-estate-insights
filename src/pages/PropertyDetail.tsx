import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import {
  PropertyGallery,
  PropertyTabs,
  PropertyMap,
  PropertyCTA,
  VerificationBadge,
  BuyerProgressIndicator,
} from "@/components/property";
import { getPropertyBySlug } from "@/data/properties";

const regionLabels: Record<string, { en: string; ta: string }> = {
  thiruvannamalai: { en: "Thiruvannamalai", ta: "திருவண்ணாமலை" },
  kallakurichi: { en: "Kallakurichi", ta: "கள்ளக்குறிச்சி" },
  villupuram: { en: "Villupuram", ta: "விழுப்புரம்" },
  sankarapuram: { en: "Sankarapuram", ta: "சங்கராபுரம்" },
};

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ta";

  const property = slug ? getPropertyBySlug(slug) : undefined;

  if (!property) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-secondary mb-4">{t("property.notFound")}</h1>
            <Link to="/properties" className="text-primary hover:underline">
              {t("property.backToCollection")}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const title = property.title[currentLang] || property.title.en;
  const overview = property.overview[currentLang] || property.overview.en;
  const description = overview.substring(0, 155) + "...";

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: description,
    category: "Land",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: property.buyerProgress.stage === "sold" 
        ? "https://schema.org/SoldOut" 
        : "https://schema.org/InStock",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.coordinates.lat,
      longitude: property.coordinates.lng,
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${title} | Lingam Estate`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | Lingam Estate`} />
        <meta property="og:description" content={description} />
        {property.images[0] && (
          <meta property="og:image" content={property.images[0].src} />
        )}
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://lingamestate.com/properties/${property.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Back Navigation */}
      <div className="pt-28 md:pt-32">
        <div className="container-luxury">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("property.backToCollection")}
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <section className="pt-6 pb-8">
        <div className="container-luxury">
          <PropertyGallery images={property.images} />
        </div>
      </section>

      {/* Header */}
      <section className="pb-8 border-b border-border">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
          >
            <div className="flex-1">
              {/* Region */}
              <span className="caption text-primary mb-2 block">
                {regionLabels[property.region]?.[currentLang] || property.region}
              </span>

              {/* Title */}
              <h1 className="heading-secondary text-balance mb-3">
                {title}
              </h1>

              {/* Tagline */}
              <p className="body-large text-foreground/70">
                {property.tagline[currentLang] || property.tagline.en}
              </p>
            </div>

            {/* Verification Badge */}
            <div className="flex-shrink-0">
              <VerificationBadge status={property.verification} size="lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Buyer Progress */}
      <section className="py-6">
        <div className="container-luxury">
          <BuyerProgressIndicator progress={property.buyerProgress} />
        </div>
      </section>

      {/* Tabs Content */}
      <section className="section-padding-sm border-t border-border">
        <div className="container-luxury">
          <PropertyTabs property={property} />
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

export default PropertyDetail;
