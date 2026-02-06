"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import industrialImage from "@/assets/industrial-potential.jpg";

const industrialSrc =
  typeof industrialImage === "string" ? industrialImage : (industrialImage as { src?: string }).src || "";

const capabilityKeys = ["industrial", "logistics", "agri", "renewable", "residential", "mixed"];

export const CapabilitiesSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-landscape overflow-hidden">
              <img
                src={industrialSrc}
                alt="Industrial development potential"
                className="img-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="caption text-muted-foreground mb-4">{t("capabilities.caption")}</p>
            <div className="divider-luxury mb-8" />
            <h2 className="heading-secondary text-foreground mb-6">
              {t("capabilities.title")}
            </h2>
            <p className="text-foreground/60 mb-12">
              {t("capabilities.subtitle")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {capabilityKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 py-3 border-b border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">
                    {t(`capabilities.items.${key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
