import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const InvestmentThesis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <p className="caption text-muted-foreground mb-4">Investment Thesis</p>
            <div className="divider-luxury" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h2 className="heading-secondary text-foreground mb-8 text-balance">
              The Thiruvannamalai belt represents one of the most compelling
              infrastructure investment opportunities in South India.
            </h2>

            <div className="space-y-6 text-foreground/70 body-base max-w-prose">
              <p>
                As Chennai's urban sprawl reaches its limits, industrial and
                logistics demand is shifting to the western corridors. The
                convergence of new highways, railway connectivity, and
                government industrial policy has created a rare window for
                strategic land acquisition.
              </p>
              <p>
                We work with investors, institutions, and family offices to
                identify parcels with long-term appreciation potential—land
                positioned for industrial use, agri-processing, warehousing, or
                infrastructure development.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50K+", label: "Acres Evaluated" },
                { value: "4", label: "Key Districts" },
                { value: "100%", label: "Title Verification" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <p className="font-display text-3xl md:text-4xl text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
