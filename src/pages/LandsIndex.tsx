import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { LandSearch } from "@/components/lands/LandSearch";
import { PropertyCard } from "@/components/lands/PropertyCard";
import { getPropertiesByFilters } from "@/data/properties";
import { useTranslation } from "react-i18next";

const LandsIndex = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  
  const filters = {
    location: searchParams.get("location") || undefined,
    landType: searchParams.get("type") || undefined,
    budgetMin: searchParams.get("budgetMin") || undefined,
    budgetMax: searchParams.get("budgetMax") || undefined,
    sizeMin: searchParams.get("sizeMin") || undefined,
    sizeMax: searchParams.get("sizeMax") || undefined,
  };

  const properties = getPropertiesByFilters(filters);

  return (
    <Layout>
      <SEO
        title={t("lands.title")}
        description={t("lands.description")}
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
              {t("lands.results", { count: properties.length })}
            </p>
          </div>

          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
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


