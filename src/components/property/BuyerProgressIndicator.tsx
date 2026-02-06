"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Users, CircleDot, CheckCircle2, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { BuyerProgress, BuyerProgressStage } from "@/data/properties";

interface BuyerProgressIndicatorProps {
  progress: BuyerProgress;
  className?: string;
}

const stages: BuyerProgressStage[] = ["listed", "interest", "token", "sold"];

export const BuyerProgressIndicator = ({
  progress,
  className,
}: BuyerProgressIndicatorProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentIndex = stages.indexOf(progress.stage);

  const getStageIcon = (stage: BuyerProgressStage, index: number) => {
    const isCompleted = index < currentIndex;
    const isCurrent = index === currentIndex;

    if (isCompleted) {
      return <CheckCircle2 className="w-4 h-4 text-stone" />;
    }
    if (isCurrent) {
      return <CircleDot className="w-4 h-4 text-foreground" />;
    }
    return <XCircle className="w-4 h-4 text-muted-foreground/40" />;
  };

  const getStageLabel = (stage: BuyerProgressStage) => {
    const labels: Record<BuyerProgressStage, string> = {
      listed: t("property.progressStages.listed"),
      interest: progress.interestedBuyers
        ? t("property.progressStages.interestCount", { count: progress.interestedBuyers })
        : t("property.progressStages.interest"),
      token: t("property.progressStages.token"),
      sold: t("property.progressStages.sold"),
    };
    return labels[stage];
  };

  return (
    <div className={cn("border border-border rounded-sm", className)}>
      {/* Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">
            {t("property.progress")}
          </span>
          <span className="text-xs text-muted-foreground">
            — {getStageLabel(progress.stage)}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2">
              {/* Progress Bar */}
              <div className="relative">
                {/* Background Track */}
                <div className="absolute top-2 left-2 right-2 h-0.5 bg-border" />
                
                {/* Progress Fill */}
                <div
                  className="absolute top-2 left-2 h-0.5 bg-stone transition-all duration-500"
                  style={{
                    width: `${(currentIndex / (stages.length - 1)) * 100}%`,
                  }}
                />

                {/* Stage Markers */}
                <div className="relative flex justify-between">
                  {stages.map((stage, index) => {
                    const isCompleted = index < currentIndex;
                    const isCurrent = index === currentIndex;

                    return (
                      <div
                        key={stage}
                        className="flex flex-col items-center"
                      >
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full flex items-center justify-center bg-background z-10",
                            isCompleted && "bg-muted",
                            isCurrent && "ring-2 ring-foreground/20"
                          )}
                        >
                          {getStageIcon(stage, index)}
                        </div>
                        <span
                          className={cn(
                            "text-xs mt-2 text-center max-w-16",
                            isCurrent ? "text-foreground font-medium" : "text-muted-foreground"
                          )}
                        >
                          {getStageLabel(stage)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground mt-4 italic">
                {t("property.progressDisclaimer")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
