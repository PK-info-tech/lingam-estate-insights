import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { useLocation } from "react-router-dom";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

interface InsightArticle {
  slug: string;
  date: string;
  readTime: string;
}

const InsightsIndex = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  
  const articles: InsightArticle[] = [
    {
      slug: "chennai-bengaluru-corridor-impact",
      date: "2025-01-15",
      readTime: "8 min read",
    },
    {
      slug: "agricultural-land-conversion-guide",
      date: "2024-12-20",
      readTime: "12 min read",
    },
    {
      slug: "logistics-warehousing-opportunity",
      date: "2024-11-28",
      readTime: "10 min read",
    },
    {
      slug: "title-verification-essentials",
      date: "2024-10-15",
      readTime: "15 min read",
    },
  ];
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <SEO
        title="Insights"
        description="Strategic perspectives on land investment, infrastructure development, and market dynamics in Tamil Nadu's emerging growth corridors."
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "Insights", url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Insights",
            description:
              "Strategic perspectives on land investment, infrastructure development, and market dynamics in Tamil Nadu's emerging growth corridors.",
            url: absoluteUrl(pathname),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: articles.map((article, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`/insights/${article.slug}`),
              })),
            },
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
            <p className="caption text-muted-foreground mb-4">{t("insights.caption")}</p>
            <div className="divider-luxury mb-8" />
            <h1 className="heading-primary text-foreground mb-8">
              {t("insights.pageTitle")}
            </h1>
            <p className="body-large text-foreground/70">
              {t("insights.pageSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding-sm bg-background border-t border-border">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto space-y-16">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/insights/${article.slug}`}
                  className="block group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="caption text-primary">{t(`insights.articles.${article.slug}.category`)}</span>
                    <span className="text-muted-foreground text-sm">·</span>
                    <span className="text-muted-foreground text-sm">{article.readTime}</span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                    {t(`insights.articles.${article.slug}.title`)}
                  </h2>

                  <p className="text-foreground/60 leading-relaxed mb-4">
                    {t(`insights.articles.${article.slug}.excerpt`)}
                  </p>

                  <time className="text-sm text-muted-foreground">
                    {formatDate(article.date)}
                  </time>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsIndex;
