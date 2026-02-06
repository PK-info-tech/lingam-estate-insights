"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const InvestmentThesis = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "15+", labelKey: "Years Experience" },
    { value: "50K+", labelKey: "Acres Evaluated" },
    { value: "4", labelKey: "Key Districts" },
    { value: "100%", labelKey: "Title Verification" },
  ];

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Caption */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="caption text-muted-foreground mb-4">{t("thesis.caption")}</p>
            <div className="divider-luxury" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h2 className="heading-secondary text-foreground mb-8">
              {t("thesis.title")}
            </h2>

            <p className="text-foreground/70 body-base max-w-prose mb-12">
              {t("thesis.description")}
            </p>

            <div className="space-y-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-medium text-primary">{num}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">
                      {t(`thesis.point${num}.title`)}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {t(`thesis.point${num}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <p className="font-display text-3xl md:text-4xl text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.labelKey}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
