"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

const NotFound = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "404", url: pathname },
          ]),
        ]}
      />
      <section className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container-luxury text-center"
        >
          <p className="caption text-muted-foreground mb-4">{t("notFound.code")}</p>
          <h1 className="heading-display text-foreground mb-8">
            {t("notFound.title")}
          </h1>
          <p className="body-large text-foreground/70 mb-12 max-w-md mx-auto">
            {t("notFound.description")}
          </p>
          <Link href="/" className="btn-primary">
            {t("notFound.button")}
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default NotFound;
