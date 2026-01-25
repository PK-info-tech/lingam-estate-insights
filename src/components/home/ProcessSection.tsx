import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with understanding your investment thesis, timeline, and criteria for land acquisition.",
  },
  {
    number: "02",
    title: "Research & Identification",
    description:
      "Our team identifies parcels matching your requirements through proprietary networks and on-ground research.",
  },
  {
    number: "03",
    title: "Due Diligence",
    description:
      "Comprehensive title verification, legal audit, survey validation, and encumbrance analysis.",
  },
  {
    number: "04",
    title: "Negotiation & Execution",
    description:
      "We manage the entire acquisition process—from price negotiation to registration and handover.",
  },
];

export const ProcessSection = () => {
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
          <p className="caption text-white/40 mb-4">Process</p>
          <div className="w-16 h-px bg-primary/60 mb-8" />
          <h2 className="heading-secondary">
            End-to-end execution, <br />
            from search to title.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10" />
              )}

              <p className="font-display text-5xl text-white/10 mb-6">
                {step.number}
              </p>
              <h3 className="font-display text-xl text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
