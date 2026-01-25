import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const stepKeys = ["step1", "step2", "step3", "step4"];

export const ProcessSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-charcoal text-white">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <p className="caption text-white/40 mb-4">{t("process.caption")}</p>
          <div className="w-16 h-px bg-primary/60 mb-8" />
          <h2 className="heading-secondary">
            {t("process.title")}
          </h2>
          <p className="text-white/60 mt-4">
            {t("process.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stepKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < stepKeys.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10" />
              )}

              <p className="font-display text-5xl text-white/10 mb-6">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-xl text-white mb-4">
                {t(`process.${key}.title`)}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {t(`process.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
