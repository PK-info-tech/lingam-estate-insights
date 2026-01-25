import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import industrialImage from "@/assets/industrial-potential.jpg";

const capabilities = [
  {
    title: "Industrial Parks",
    description: "Large-format land for manufacturing and processing units.",
  },
  {
    title: "Agri-Processing",
    description: "Sites near agricultural belts for food processing and cold storage.",
  },
  {
    title: "Logistics & Warehousing",
    description: "Highway-adjacent land for distribution and fulfillment centers.",
  },
  {
    title: "Renewable Energy",
    description: "Open land suitable for solar and wind energy installations.",
  },
  {
    title: "Data Centers",
    description: "Locations with power and connectivity infrastructure potential.",
  },
  {
    title: "Integrated Townships",
    description: "Master-planned developments near emerging industrial corridors.",
  },
];

export const CapabilitiesSection = () => {
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
                src={industrialImage}
                alt="Industrial development potential"
                className="img-cover"
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
            <p className="caption text-muted-foreground mb-4">Capabilities</p>
            <div className="divider-luxury mb-8" />
            <h2 className="heading-secondary text-foreground mb-12">
              What can be built here
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <h4 className="font-display text-lg text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
