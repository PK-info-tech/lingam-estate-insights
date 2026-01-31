import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PropertyFilters, PropertyGrid } from "@/components/property";
import { properties, getFilteredProperties } from "@/data/properties";
import type { Region, UseCase, VerificationStatus } from "@/data/properties";

const PropertiesIndex = () => {
  const { t } = useTranslation();

  const [selectedRegion, setSelectedRegion] = useState<Region | undefined>();
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | undefined>();
  const [selectedVerification, setSelectedVerification] = useState<VerificationStatus | undefined>();

  const filteredProperties = useMemo(() => {
    return getFilteredProperties({
      region: selectedRegion,
      useCase: selectedUseCase,
      verification: selectedVerification,
    });
  }, [selectedRegion, selectedUseCase, selectedVerification]);

  const handleReset = () => {
    setSelectedRegion(undefined);
    setSelectedUseCase(undefined);
    setSelectedVerification(undefined);
  };

  return (
    <Layout>
      <SEO
        title={`${t("properties.title")} | Lingam Estate`}
        description={t("properties.subtitle")}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="caption text-primary mb-4 block">
              {t("properties.caption")}
            </span>
            <h1 className="heading-primary text-balance mb-6">
              {t("properties.title")}
            </h1>
            <p className="body-large text-foreground/70">
              {t("properties.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 border-b border-border">
        <div className="container-luxury">
          <PropertyFilters
            selectedRegion={selectedRegion}
            selectedUseCase={selectedUseCase}
            selectedVerification={selectedVerification}
            onRegionChange={setSelectedRegion}
            onUseCaseChange={setSelectedUseCase}
            onVerificationChange={setSelectedVerification}
            onReset={handleReset}
          />
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-8">
            {t("properties.showingCount", { count: filteredProperties.length, total: properties.length })}
          </p>

          <PropertyGrid properties={filteredProperties} onReset={handleReset} />
        </div>
      </section>
    </Layout>
  );
};

export default PropertiesIndex;
