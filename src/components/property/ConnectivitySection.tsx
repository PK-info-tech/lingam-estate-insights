"use client";

import { useTranslation } from "react-i18next";
import { MapPin, Clock, Route, Train } from "lucide-react";
import { motion } from "framer-motion";
import type { Property } from "@/data/properties";

interface ConnectivitySectionProps {
  property: Property;
}

const cities = [
  { key: "chennai", name: { en: "Chennai", ta: "சென்னை" }, color: "bg-primary/20" },
  { key: "bengaluru", name: { en: "Bengaluru", ta: "பெங்களூரு" }, color: "bg-secondary" },
  { key: "salem", name: { en: "Salem", ta: "சேலம்" }, color: "bg-muted" },
] as const;

export const ConnectivitySection = ({ property }: ConnectivitySectionProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ta";

  return (
    <div className="space-y-8">
      <p className="text-foreground/70 max-w-prose">
        {t("property.connectivityIntro")}
      </p>

      {/* City Distances */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cities.map((city, index) => {
          const connectivity = property.connectivity[city.key as keyof typeof property.connectivity];
          if (!connectivity || typeof connectivity === "string") return null;

          return (
            <motion.div
              key={city.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-border"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-3 h-3 rounded-full ${city.color}`} />
                <h3 className="font-display text-lg">
                  {city.name[currentLang]}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground/80">
                    {connectivity.distance}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground/80">
                    {t("property.travelTime", { time: connectivity.time })}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Infrastructure Details */}
      <div className="pt-6 border-t border-border">
        <h3 className="font-display text-xl mb-4">{t("property.infrastructure")}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {property.connectivity.nearestHighway && (
            <div className="flex items-start gap-3 p-4 bg-muted/30">
              <Route className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {t("property.nearestHighway")}
                </p>
                <p className="text-foreground/80">
                  {property.connectivity.nearestHighway}
                </p>
              </div>
            </div>
          )}

          {property.connectivity.nearestRailway && (
            <div className="flex items-start gap-3 p-4 bg-muted/30">
              <Train className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {t("property.nearestRailway")}
                </p>
                <p className="text-foreground/80">
                  {property.connectivity.nearestRailway}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
