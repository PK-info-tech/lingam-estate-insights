import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { LandSearch } from "@/components/lands/LandSearch";
import { PropertyCard } from "@/components/lands/PropertyCard";
import { getFilteredProperties, properties } from "@/data/properties";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

const LandsIndex = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  
  // For now, return all properties. Filtering can be enhanced later
  // const filters = {
  //   region: searchParams.get("location") as Region | undefined,
  //   useCase: searchParams.get("type") as UseCase | undefined,
  //   verification: searchParams.get("verification") as VerificationStatus | undefined,
  // };

  const filteredProperties = getFilteredProperties({});
  // Use all properties for now until filtering is properly implemented
  const propertiesList = filteredProperties.length > 0 ? filteredProperties : properties;

  return (
    <Layout>
      <SEO
        title={t("lands.title")}
        description={t("lands.description")}
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: t("lands.title"), url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: t("lands.title"),
            description: t("lands.description"),
            url: absoluteUrl(pathname),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: properties.map((property, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`/lands/${property.slug}`),
              })),
            },
          },
        ]}
      />

      {/* Hero with Search */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="caption text-muted-foreground mb-4">{t("lands.caption")}</p>
            <h1 className="heading-primary text-foreground mb-8">
              {t("lands.title")}
            </h1>
            <p className="body-large text-foreground/70">
              {t("lands.subtitle")}
            </p>
          </motion.div>

          <LandSearch variant="page" />
        </div>
      </section>

      {/* Results */}
      <section className="section-padding-sm bg-background border-t border-border">
        <div className="container-luxury">
          <div className="mb-8">
            <p className="text-foreground/60">
              {t("lands.results", { count: propertiesList.length })}
            </p>
          </div>

          {propertiesList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propertiesList.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-foreground/60 mb-4">{t("lands.noResults")}</p>
              <p className="text-sm text-muted-foreground">{t("lands.noResultsSubtitle")}</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default LandsIndex;

