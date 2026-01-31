import { useTranslation } from "react-i18next";
import { MapPin, Maximize2, Calendar } from "lucide-react";
import type { Property } from "@/data/properties";

interface OverviewSectionProps {
  property: Property;
}

export const OverviewSection = ({ property }: OverviewSectionProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ta";

  const regionLabels: Record<string, { en: string; ta: string }> = {
    thiruvannamalai: { en: "Thiruvannamalai", ta: "திருவண்ணாமலை" },
    kallakurichi: { en: "Kallakurichi", ta: "கள்ளக்குறிச்சி" },
    villupuram: { en: "Villupuram", ta: "விழுப்புரம்" },
    sankarapuram: { en: "Sankarapuram", ta: "சங்கராபுரம்" },
  };

  const overview = property.overview[currentLang] || property.overview.en;
  const paragraphs = overview.split("\n\n").filter(Boolean);

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-border">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-muted">
            <MapPin className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              {t("property.region")}
            </p>
            <p className="font-display text-lg">
              {regionLabels[property.region]?.[currentLang] || property.region}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-muted">
            <Maximize2 className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              {t("property.area")}
            </p>
            <p className="font-display text-lg">
              {property.area.value} {property.area.unit}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-muted">
            <Calendar className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              {t("property.listed")}
            </p>
            <p className="font-display text-lg">
              {new Date(property.createdAt).toLocaleDateString(
                currentLang === "ta" ? "ta-IN" : "en-US",
                { year: "numeric", month: "long" }
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="prose-luxury max-w-prose">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-foreground/80 leading-relaxed mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
