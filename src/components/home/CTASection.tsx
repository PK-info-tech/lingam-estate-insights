"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import architectureImage from "@/assets/abstract-architecture.jpg";

const architectureSrc =
  typeof architectureImage === "string" ? architectureImage : (architectureImage as { src?: string }).src || "";

export const CTASection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-secondary text-foreground mb-8 text-balance">
              {t("cta.title")}
            </h2>
            <p className="body-base text-foreground/70 mb-12 max-w-md">
              {t("cta.subtitle")}
            </p>
            <Link href="/contact" className="btn-primary">
              {t("cta.button")}
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="aspect-portrait overflow-hidden">
              <img
                src={architectureSrc}
                alt="Abstract architectural detail"
                className="img-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
