"use client";

import { useTranslation } from "react-i18next";
import { Home, Wheat, Factory, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Property, UseCase } from "@/data/properties";

interface UseCasesSectionProps {
  property: Property;
}

const useCaseConfig: Record<UseCase, { icon: typeof Home; colorClass: string }> = {
  residential: { icon: Home, colorClass: "bg-secondary" },
  agriculture: { icon: Wheat, colorClass: "bg-secondary" },
  industrial: { icon: Factory, colorClass: "bg-secondary" },
  mixed_use: { icon: Layers, colorClass: "bg-secondary" },
};

export const UseCasesSection = ({ property }: UseCasesSectionProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ta";

  const useCaseLabels: Record<UseCase, string> = {
    residential: t("property.useCaseTypes.residential"),
    agriculture: t("property.useCaseTypes.agriculture"),
    industrial: t("property.useCaseTypes.industrial"),
    mixed_use: t("property.useCaseTypes.mixedUse"),
  };

  return (
    <div className="space-y-6">
      <p className="text-foreground/70 max-w-prose">
        {t("property.useCasesIntro")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {property.useCases.map((useCase, index) => {
          const { icon: Icon, colorClass } = useCaseConfig[useCase];
          const details = property.useCaseDetails[useCase];

          return (
            <motion.div
              key={useCase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "w-12 h-12 flex items-center justify-center flex-shrink-0",
                    colorClass
                  )}
                >
                  <Icon className="w-6 h-6 text-foreground/70" />
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl mb-2">
                    {useCaseLabels[useCase]}
                  </h3>
                  {details && (
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {details[currentLang] || details.en}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
