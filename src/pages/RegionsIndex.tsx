import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import regionImage from "@/assets/region-thiruvannamalai.jpg";
import { useLocation } from "react-router-dom";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

const RegionsIndex = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  
  const regions = [
    {
      name: t("regions.thiruvannamalai.name"),
      slug: "thiruvannamalai",
    },
    {
      name: t("regions.kallakurichi.name"),
      slug: "kallakurichi",
    },
    {
      name: t("regions.villupuram.name"),
      slug: "villupuram",
    },
    {
      name: t("regions.sankarapuram.name"),
      slug: "sankarapuram",
    },
  ];
  return (
    <Layout>
      <SEO
        title="Regions"
        description="Explore strategic investment regions in Tamil Nadu: Thiruvannamalai, Kallakurichi, Villupuram, and Sankarapuram."
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "Regions", url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Regions",
            description:
              "Explore strategic investment regions in Tamil Nadu: Thiruvannamalai, Kallakurichi, Villupuram, and Sankarapuram.",
            url: absoluteUrl(pathname),
          },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="caption text-muted-foreground mb-4">{t("regions.caption")}</p>
            <div className="divider-luxury mb-8" />
            <h1 className="heading-primary text-foreground mb-8">
              {t("regions.pageTitle")}
            </h1>
            <p className="body-large text-foreground/70">
              {t("regions.pageSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-hero overflow-hidden"
          >
            <img
              src={regionImage}
              alt="Tamil Nadu countryside"
              className="img-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* Regions List */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-luxury">
          <div className="space-y-px">
            {regions.map((region, index) => (
              <motion.div
                key={region.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  to={`/regions/${region.slug}`}
                  className="block bg-background p-8 md:p-12 group hover:bg-accent transition-colors duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
                    <div className="md:col-span-4">
                      <h2 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {region.name}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-2">
                        {t(`regions.list.${region.slug}.tagline`)}
                      </p>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-foreground/60 leading-relaxed">
                        {t(`regions.list.${region.slug}.description`)}
                      </p>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegionsIndex;
