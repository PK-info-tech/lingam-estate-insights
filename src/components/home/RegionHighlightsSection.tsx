"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { RegionImageSlider } from "./RegionImageSlider";

export const RegionHighlightsSection = () => {
  const { i18n, t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="caption text-muted-foreground mb-4">
            {i18n.language === "ta" ? "பிராந்திய அழகு" : "Regional Beauty"}
          </p>
          <div className="divider-luxury mx-auto mb-8" />
          <h2 className="heading-secondary text-foreground max-w-2xl mx-auto">
            {i18n.language === "ta"
              ? "திருவண்ணாமலை வளையத்தின் அழகை கண்டறியுங்கள்"
              : "Discover the beauty of the Thiruvannamalai belt"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <RegionImageSlider language={i18n.language as "en" | "ta"} />
        </motion.div>

        {/* Image Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
        >
          {[
            { en: "Temples", ta: "கோயில்கள்" },
            { en: "Farms", ta: "பண்ணைகள்" },
            { en: "Girivalam", ta: "கிரிவலம்" },
            { en: "Factories", ta: "தொழிற்சாலைகள்" },
            { en: "Streets", ta: "தெருக்கள்" },
          ].map((category, index) => (
            <div
              key={category.en}
              className="text-center py-4 px-2 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors duration-300"
            >
              <span className="text-sm font-medium text-foreground">
                {i18n.language === "ta" ? category.ta : category.en}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
