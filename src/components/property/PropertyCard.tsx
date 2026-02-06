"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Maximize2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { VerificationBadge } from "./VerificationBadge";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const regionLabels: Record<string, { en: string; ta: string }> = {
  thiruvannamalai: { en: "Thiruvannamalai", ta: "திருவண்ணாமலை" },
  kallakurichi: { en: "Kallakurichi", ta: "கள்ளக்குறிச்சி" },
  villupuram: { en: "Villupuram", ta: "விழுப்புரம்" },
  sankarapuram: { en: "Sankarapuram", ta: "சங்கராபுரம்" },
};

export const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ta";

  const heroImage = property.images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link
        href={`/properties/${property.slug}`}
        className="group block"
      >
        {/* Image */}
        <div className="relative aspect-landscape overflow-hidden bg-muted mb-4">
          {heroImage ? (
            <img
              src={heroImage.src}
              alt={heroImage.alt[currentLang] || heroImage.alt.en}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-muted-foreground" />
            </div>
          )}

          {/* Verification Badge */}
          <div className="absolute top-3 right-3">
            <VerificationBadge
              status={property.verification}
              size="sm"
              showLabel={false}
            />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          {/* Region Badge */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-primary">
              {regionLabels[property.region]?.[currentLang] || property.region}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl group-hover:text-primary transition-colors">
            {property.title[currentLang] || property.title.en}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-foreground/60 line-clamp-2">
            {property.tagline[currentLang] || property.tagline.en}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Maximize2 className="w-4 h-4" />
              <span>{property.area.value} {property.area.unit}</span>
            </div>
            <VerificationBadge
              status={property.verification}
              size="sm"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
