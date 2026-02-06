import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

const About = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  
  const values = [
    {
      title: t("about.values.longTerm.title"),
      description: t("about.values.longTerm.description"),
    },
    {
      title: t("about.values.expertise.title"),
      description: t("about.values.expertise.description"),
    },
    {
      title: t("about.values.diligence.title"),
      description: t("about.values.diligence.description"),
    },
    {
      title: t("about.values.aligned.title"),
      description: t("about.values.aligned.description"),
    },
  ];
  return (
    <Layout>
      <SEO
        title="About"
        description="Lingam Estate provides strategic land advisory for industrial and infrastructure investments in Tamil Nadu's emerging growth corridors."
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "About", url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About",
            description:
              "Lingam Estate provides strategic land advisory for industrial and infrastructure investments in Tamil Nadu's emerging growth corridors.",
            url: absoluteUrl(pathname),
          },
        ]}
      />

      {/* Header */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="caption text-muted-foreground mb-4">{t("about.caption")}</p>
            <div className="divider-luxury mb-8" />
            <h1 className="heading-primary text-foreground mb-8">
              {t("about.pageTitle")}
            </h1>
            <p className="body-large text-foreground/70">
              {t("about.pageDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="heading-tertiary text-foreground">{t("about.philosophy.title")}</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8 space-y-6 text-foreground/70"
            >
              <p>{t("about.philosophy.p1")}</p>
              <p>{t("about.philosophy.p2")}</p>
              <p>{t("about.philosophy.p3")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="heading-secondary text-foreground">{t("about.values.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <h3 className="font-display text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
              {t("about.cta.title")}
            </h2>
            <p className="body-base text-white/60 mb-12 max-w-lg mx-auto">
              {t("about.cta.subtitle")}
            </p>
            <Link to="/contact" className="btn-primary">
              {t("about.cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
