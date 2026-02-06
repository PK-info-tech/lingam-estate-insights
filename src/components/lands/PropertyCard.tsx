import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { VerificationBadge } from "@/components/property/VerificationBadge";
import type { Property } from "@/data/properties";

const regionLabels: Record<string, { en: string; ta: string }> = {
  thiruvannamalai: { en: "Thiruvannamalai", ta: "திருவண்ணாமலை" },
  kallakurichi: { en: "Kallakurichi", ta: "கள்ளக்குறிச்சி" },
  villupuram: { en: "Villupuram", ta: "விழுப்புரம்" },
  sankarapuram: { en: "Sankarapuram", ta: "சங்கராபுரம்" },
};

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language as "en" | "ta";
  const heroImage = property.images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/lands/${property.slug}`}
        className="block bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          {heroImage ? (
            <img
              src={heroImage.src}
              alt={heroImage.alt[currentLang] || heroImage.alt.en}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-muted-foreground" />
            </div>
          )}
          <div className="absolute top-4 right-4">
            <VerificationBadge status={property.verification} size="sm" showLabel={false} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Region */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            <span>
              {regionLabels[property.region]?.[currentLang] || property.region}
            </span>
          </div>

          {/* Title */}
          <h3 className="heading-tertiary text-foreground mb-3 group-hover:text-primary transition-colors">
            {property.title[currentLang] || property.title.en}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
            {property.tagline[currentLang] || property.tagline.en}
          </p>

          {/* Size & Verification */}
          <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
            <span>
              {property.area.value} {property.area.unit}
            </span>
            <span className="text-muted-foreground">·</span>
            <VerificationBadge status={property.verification} size="sm" />
          </div>

          {/* CTA */}
          <div className="mt-6">
            <span className="text-primary text-sm font-medium group-hover:underline">
              {t("property.viewDetails")} →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

