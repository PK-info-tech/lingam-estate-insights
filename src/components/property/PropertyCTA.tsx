"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, Phone } from "lucide-react";

interface PropertyCTAProps {
  propertyTitle: string;
  className?: string;
}

export const PropertyCTA = ({ propertyTitle, className }: PropertyCTAProps) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="p-8 bg-muted/30 border border-border">
        <h3 className="font-display text-2xl mb-3">
          {t("property.ctaTitle")}
        </h3>
        <p className="text-foreground/70 mb-6 max-w-md">
          {t("property.ctaDescription")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/contact?property=${encodeURIComponent(propertyTitle)}`}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            {t("property.cta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+918825962425"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            {t("property.callNow")}
          </a>
        </div>
      </div>
    </div>
  );
};
