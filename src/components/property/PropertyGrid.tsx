import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { PropertyCard } from "./PropertyCard";
import type { Property } from "@/data/properties";

interface PropertyGridProps {
  properties: Property[];
  onReset?: () => void;
}

export const PropertyGrid = ({ properties, onReset }: PropertyGridProps) => {
  const { t } = useTranslation();

  if (properties.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center"
      >
        <SearchX className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-foreground/70 mb-4">{t("properties.noResults")}</p>
        {onReset && (
          <button
            onClick={onReset}
            className="text-primary hover:underline"
          >
            {t("properties.resetFilters")}
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} property={property} index={index} />
      ))}
    </div>
  );
};
