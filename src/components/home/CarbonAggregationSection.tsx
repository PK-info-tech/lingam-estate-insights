"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import carbonImage from "@/assets/images/farms/paddy-fields.jpg";

const carbonSrc =
  typeof carbonImage === "string" ? carbonImage : (carbonImage as { src?: string }).src || "";

export const CarbonAggregationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border/60 bg-white/70">
              <img
                src={carbonSrc}
                alt="Land parcels suitable for long-term carbon projects"
                className="img-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="caption text-muted-foreground mb-4">
              Carbon Credit Aggregation
            </p>
            <div className="divider-luxury mb-8" />
            <h2 className="heading-secondary text-foreground mb-6">
              Built for registry-grade compliance and long-term auditability
            </h2>
            <p className="text-foreground/70 mb-8">
              We aggregate small land parcels into verifiable projects with explicit
              lifecycle controls, immutable audit trails, and evidence-backed MRV. No
              speculative claims. No greenwashing risk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/carbon" className="btn-outline">
                Explore Carbon Module
              </Link>
              <Link href="/contact" className="btn-primary">
                Request Briefing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
