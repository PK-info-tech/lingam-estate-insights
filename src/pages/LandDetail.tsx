import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Check, Calendar, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { BrokerComparison } from "@/components/lands/BrokerComparison";
import { getPropertyBySlug } from "@/data/properties";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LandDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
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

  return (
    <Layout>
      <SEO
        title={`${property.title} | Lingam Estate`}
        description={`${property.title} - ${property.size.acres} acres in ${property.location.district}`}
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
            {/* Left Column - Details */}
            <div className="lg:col-span-7 space-y-12">
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="aspect-[4/3] overflow-hidden rounded-lg bg-secondary"
              >
                <img
                  src={property.images[0] || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Title & Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {t(`regions.${property.location.district.toLowerCase()}.name`)}, {property.location.taluk}
                  </span>
                </div>
                <h1 className="heading-display text-foreground mb-4">{property.title}</h1>
                <div className="flex items-center gap-4 text-foreground/60">
                  <span>
                    {property.size.acres} {t("property.acres")} ({property.size.cents} {t("property.cents")})
                  </span>
                  <span>·</span>
                  <span className="capitalize">{t(`search.types.${property.landType}`)}</span>
                </div>
              </motion.div>

              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="details">{t("property.tabs.details")}</TabsTrigger>
                    <TabsTrigger value="legal">{t("property.tabs.legal")}</TabsTrigger>
                    <TabsTrigger value="location">{t("property.tabs.location")}</TabsTrigger>
                    <TabsTrigger value="thesis">{t("property.tabs.thesis")}</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-6">
                    <div>
                      <h3 className="heading-tertiary text-foreground mb-4">{t("property.overview")}</h3>
                      <ul className="space-y-3 text-foreground/70">
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>{t("property.accessRoad")}:</strong> {property.details.accessRoad}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>{t("property.water")}:</strong> {property.details.water}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>{t("property.electricity")}:</strong> {property.details.electricity}</span>
                        </li>
                        {property.details.distanceToTemple && (
                          <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>{t("property.distanceToTemple")}:</strong> {property.details.distanceToTemple} km</span>
                          </li>
                        )}
                        {property.details.distanceToHighway && (
                          <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>{t("property.distanceToHighway")}:</strong> {property.details.distanceToHighway} km</span>
                          </li>
                        )}
                        {property.details.distanceToTown && (
                          <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>{t("property.distanceToTown")}:</strong> {property.details.distanceToTown} km</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h3 className="heading-tertiary text-foreground mb-4">{t("property.idealFor")}</h3>
                      <div className="flex flex-wrap gap-3">
                        {property.idealFor.map((use, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-secondary text-foreground rounded-md text-sm"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="legal" className="space-y-6">
                    <div>
                      <h3 className="heading-tertiary text-foreground mb-4">{t("property.legal.title")}</h3>
                      <p className="text-foreground/70 mb-4">{property.legal.title}</p>
                      {property.legal.conversionStatus && (
                        <p className="text-foreground/70 mb-4">{property.legal.conversionStatus}</p>
                      )}
                      {property.verification.patta && (
                        <div className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
                          <Check className="w-4 h-4 text-primary" />
                          {t("property.verified.patta")}
                        </div>
                      )}
                      {property.verification.encumbrance === false && (
                        <div className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
                          <Check className="w-4 h-4 text-primary" />
                          {t("property.verified.noEncumbrance")}
                        </div>
                      )}
                      {property.verification.surveyed && (
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <Check className="w-4 h-4 text-primary" />
                          {t("property.verified.surveyed")}
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="location" className="space-y-6">
                    <div>
                      <h3 className="heading-tertiary text-foreground mb-4">{t("property.connectivity")}</h3>
                      <ul className="space-y-3 text-foreground/70">
                        {property.connectivity.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="thesis" className="space-y-6">
                    <div>
                      <h3 className="heading-tertiary text-foreground mb-4">{t("property.investmentThesis")}</h3>
                      <ul className="space-y-3 text-foreground/70">
                        {property.investmentThesis.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Right Column - Comparison & Action */}
            <div className="lg:col-span-5 space-y-8">
              {/* Comparison Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <BrokerComparison variant="full" />
              </motion.div>

              {/* Action Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-secondary/50 rounded-lg border border-border p-8 space-y-6"
              >
                <div>
                  <h3 className="heading-tertiary text-foreground mb-2">{t("property.price")}</h3>
                  <p className="text-2xl font-medium text-foreground mb-4">{property.priceDisplay}</p>
                </div>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    {t("property.cta.visit")}
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full btn-outline flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    {t("property.cta.documents")}
                  </Link>
                </div>

                {/* Trust Signals */}
                <div className="pt-6 border-t border-border space-y-3">
                  <p className="text-sm font-medium text-foreground mb-3">{t("property.trust.title")}</p>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      {t("property.trust.rera")}
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      {t("property.trust.legal")}
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      {t("property.trust.surveyor")}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    {t("property.trust.tagline")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandDetail;



