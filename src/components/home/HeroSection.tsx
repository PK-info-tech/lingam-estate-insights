"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-landscape.jpg";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Tamil Nadu landscape at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="caption text-white/60 mb-6"
          >
            {t("hero.caption")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-display text-white mb-8 text-balance"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body-large text-white/80 mb-12 max-w-xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/properties"
              className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t("hero.searchLands")}
            </Link>
            <Link
              href="/contact"
              className="btn-luxury border border-white/30 text-white hover:bg-white/10"
            >
              {t("hero.cta")}
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </motion.div>
    </section>
  );
};
