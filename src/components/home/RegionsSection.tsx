import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

const regionKeys = ["thiruvannamalai", "kallakurichi", "villupuram", "sankarapuram"];

export const RegionsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="caption text-muted-foreground mb-4">{t("regions.caption")}</p>
          <div className="divider-luxury mb-8" />
          <h2 className="heading-secondary text-foreground">
            {t("regions.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {regionKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link
                to={`/regions/${key}`}
                className="block bg-background p-10 md:p-12 h-full group transition-colors duration-300 hover:bg-accent"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {t(`regions.${key}.name`)}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-foreground/60 leading-relaxed">
                  {t(`regions.${key}.description`)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
