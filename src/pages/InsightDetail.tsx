"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";
import { getInsightBySlug } from "@/data/insights";

const InsightDetail = () => {
  const { t } = useTranslation();
  const params = useParams<{ slug: string }>();
  const pathname = usePathname();
  const slug = params?.slug as string | undefined;
  const article = slug ? getInsightBySlug(slug) : null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!article) {
    return (
      <Layout>
        <SEO title="Article Not Found" description="The requested article could not be found." />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-secondary mb-4">{t("insights.detail.notFound.title")}</h1>
            <Link href="/insights" className="text-primary hover:underline">
              {t("insights.detail.notFound.link")}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.excerpt}
        type="article"
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "Insights", url: "/insights" },
            { name: article.title, url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            dateModified: article.date,
            mainEntityOfPage: absoluteUrl(pathname),
            author: {
              "@type": "Organization",
              name: SITE_NAME,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/og-image.jpg"),
              },
            },
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
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("insights.detail.back")}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="caption text-primary">{article.category}</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">{article.readTime}</span>
            </div>

            <h1 className="heading-primary text-foreground mb-8 text-balance">
              {article.title}
            </h1>

            <time className="text-muted-foreground">
              {formatDate(article.date)}
            </time>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding-sm bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose-luxury"
          >
            {article.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index}>{paragraph.replace("## ", "")}</h2>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </motion.div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-tertiary text-foreground mb-6">
              {t("insights.detail.continue.title")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/insights" className="btn-outline">
                {t("insights.detail.continue.more")}
              </Link>
              <Link href="/contact" className="btn-primary">
                {t("insights.detail.continue.contact")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightDetail;
