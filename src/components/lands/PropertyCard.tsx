import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const { t } = useTranslation();

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
          <img
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Verification Badge */}
          <div className="absolute top-4 right-4 flex gap-2">
            {property.verification.patta && (
              <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-foreground flex items-center gap-1.5">
                <Check className="w-3 h-3 text-primary" />
                {t("property.verified.patta")}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            <span>
              {t(`regions.${property.location.district.toLowerCase()}.name`)}, {property.location.taluk}
            </span>
          </div>

          {/* Title */}
          <h3 className="heading-tertiary text-foreground mb-3 group-hover:text-primary transition-colors">
            {property.title}
          </h3>

          {/* Size & Type */}
          <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
            <span>
              {property.size.acres} {t("property.acres")} ({property.size.cents} {t("property.cents")})
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="capitalize">{t(`search.types.${property.landType}`)}</span>
          </div>

          {/* Ideal For */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">{t("property.idealFor")}:</p>
            <div className="flex flex-wrap gap-2">
              {property.idealFor.slice(0, 2).map((use, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs"
                >
                  {use}
                </span>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-1">{t("property.price")}</p>
            <p className="text-lg font-medium text-foreground">{property.priceDisplay}</p>
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



