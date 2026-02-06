"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

const RegionDetail = () => {
  const { t } = useTranslation();
  const params = useParams<{ slug: string }>();
  const pathname = usePathname();
  const slug = params?.slug as string | undefined;
  
  if (!slug || !["thiruvannamalai", "kallakurichi", "villupuram", "sankarapuram"].includes(slug)) {
    return (
      <Layout>
        <SEO title="Region Not Found" description="The requested region could not be found." />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-secondary mb-4">{t("regions.detail.notFound.title")}</h1>
            <Link href="/regions" className="text-primary hover:underline">
              {t("regions.detail.notFound.link")}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const region = {
    name: t(`regions.${slug}.name`),
    tagline: t(`regions.${slug}.tagline`),
    description: t(`regions.${slug}.fullDescription`),
    whyItMatters: t(`regions.${slug}.whyItMatters`),
    connectivity: t(`regions.${slug}.connectivity`, { returnObjects: true }) as string[],
    potential: t(`regions.${slug}.potential`, { returnObjects: true }) as string[],
    useCases: t(`regions.${slug}.useCases`, { returnObjects: true }) as string[],
  };

  return (
    <Layout>
      <SEO
        title={`${region.name} | Strategic Investment Region`}
        description={region.description.substring(0, 155)}
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "Regions", url: "/regions" },
            { name: region.name, url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: region.name,
            description: region.description,
            url: absoluteUrl(pathname),
          },
        ]}
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/regions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("regions.detail.back")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="caption text-primary mb-4">{region.tagline}</p>
            <h1 className="heading-display text-foreground mb-8">{region.name}</h1>
            <p className="body-large text-foreground/70">{region.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <h2 className="heading-tertiary text-foreground">{t("regions.detail.whyItMatters")}</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <p className="body-base text-foreground/70">{region.whyItMatters}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Connectivity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="heading-tertiary text-foreground mb-8">{t("regions.detail.connectivity")}</h3>
              <ul className="space-y-4">
                {region.connectivity.map((item, i) => (
                  <li key={i} className="text-foreground/60 text-sm leading-relaxed pl-4 border-l border-border">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Potential */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="heading-tertiary text-foreground mb-8">{t("regions.detail.potential")}</h3>
              <ul className="space-y-4">
                {region.potential.map((item, i) => (
                  <li key={i} className="text-foreground/60 text-sm leading-relaxed pl-4 border-l border-primary/30">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="heading-tertiary text-foreground mb-8">{t("regions.detail.useCases")}</h3>
              <ul className="space-y-4">
                {region.useCases.map((item, i) => (
                  <li key={i} className="text-foreground/60 text-sm leading-relaxed pl-4 border-l border-border">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-secondary text-white mb-8">
              {t("regions.detail.cta.title", { region: region.name })}
            </h2>
            <p className="body-base text-white/60 mb-12 max-w-lg mx-auto">
              {t("regions.detail.cta.subtitle")}
            </p>
            <Link href="/contact" className="btn-primary">
              {t("regions.detail.cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RegionDetail;
