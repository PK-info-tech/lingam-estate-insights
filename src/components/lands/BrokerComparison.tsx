import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Info, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  feature: string;
  lingam: boolean | string;
  localBroker: boolean | string;
  onlinePortals: boolean | string;
}

export const BrokerComparison = ({ variant = "full" }: { variant?: "full" | "compact" }) => {
  const { t } = useTranslation();
  const isCompact = variant === "compact";

  const comparisonData: ComparisonRow[] = [
    {
      feature: t("comparison.features.verifiedSeller"),
      lingam: true,
      localBroker: false,
      onlinePortals: false,
    },
    {
      feature: t("comparison.features.legalDiligence"),
      lingam: true,
      localBroker: false,
      onlinePortals: false,
    },
    {
      feature: t("comparison.features.hniNri"),
      lingam: true,
      localBroker: false,
      onlinePortals: false,
    },
    {
      feature: t("comparison.features.transparentPricing"),
      lingam: true,
      localBroker: false,
      onlinePortals: false,
    },
    {
      feature: t("comparison.features.endToEnd"),
      lingam: true,
      localBroker: false,
      onlinePortals: false,
    },
    {
      feature: t("comparison.features.postSale"),
      lingam: true,
      localBroker: false,
      onlinePortals: false,
    },
  ];

  const renderValue = (value: boolean | string, isLingam = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
            <CheckCircle2 className="relative w-6 h-6 text-primary" strokeWidth={2.5} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <XCircle className="w-5 h-5 text-muted-foreground/30" strokeWidth={1.5} />
        </div>
      );
    }
    return <span className="text-foreground/70 text-sm">{value}</span>;
  };

  if (isCompact) {
    return (
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-secondary text-foreground mb-4 text-center">
              {t("comparison.title")}
            </h2>
            <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
              {t("comparison.subtitle")}
            </p>

            <div className="bg-white rounded-lg border border-border/60 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-gradient-to-b from-secondary/50 to-transparent">
                      <th className="text-left p-6 font-medium text-foreground/80 tracking-wide">
                        {t("comparison.feature")}
                      </th>
                      <th className="text-center p-6 font-medium text-primary relative">
                        <div className="flex items-center justify-center gap-2">
                          <ShieldCheck className="w-4 h-4" />
                          <span className="font-display">{t("comparison.lingam")}</span>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary" />
                      </th>
                      <th className="text-center p-6 font-medium text-foreground/50">
                        {t("comparison.localBroker")}
                      </th>
                      <th className="text-center p-6 font-medium text-foreground/50">
                        {t("comparison.onlinePortals")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.slice(0, 4).map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-border/30 hover:bg-secondary/20 transition-all duration-200"
                      >
                        <td className="p-6 text-foreground/80 font-medium">{row.feature}</td>
                        <td className="p-6 text-center bg-primary/5">{renderValue(row.lingam, true)}</td>
                        <td className="p-6 text-center">{renderValue(row.localBroker)}</td>
                        <td className="p-6 text-center">{renderValue(row.onlinePortals)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-border/60 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border/60 bg-gradient-to-b from-secondary/30 to-transparent flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-primary" />
        <h3 className="heading-tertiary text-foreground">{t("comparison.title")}</h3>
        <Info className="w-4 h-4 text-muted-foreground ml-auto" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-gradient-to-b from-secondary/50 to-transparent">
              <th className="text-left p-6 font-medium text-foreground/80 tracking-wide min-w-[200px]">
                {t("comparison.feature")}
              </th>
              <th className="text-center p-6 font-medium text-primary relative min-w-[140px]">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-display">{t("comparison.lingam")}</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary" />
              </th>
              <th className="text-center p-6 font-medium text-foreground/50 min-w-[120px]">
                {t("comparison.localBroker")}
              </th>
              <th className="text-center p-6 font-medium text-foreground/50 min-w-[120px]">
                {t("comparison.onlinePortals")}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr
                key={index}
                className={cn(
                  "border-b border-border/30 hover:bg-secondary/20 transition-all duration-200",
                  index === comparisonData.length - 1 && "border-b-0"
                )}
              >
                <td className="p-6 text-foreground/80 font-medium">{row.feature}</td>
                <td className="p-6 text-center bg-primary/5">{renderValue(row.lingam, true)}</td>
                <td className="p-6 text-center">{renderValue(row.localBroker)}</td>
                <td className="p-6 text-center">{renderValue(row.onlinePortals)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


