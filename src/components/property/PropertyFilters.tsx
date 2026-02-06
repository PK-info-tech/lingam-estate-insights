"use client";

import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Region, UseCase, VerificationStatus } from "@/data/properties";

interface PropertyFiltersProps {
  selectedRegion?: Region;
  selectedUseCase?: UseCase;
  selectedVerification?: VerificationStatus;
  onRegionChange: (region?: Region) => void;
  onUseCaseChange: (useCase?: UseCase) => void;
  onVerificationChange: (verification?: VerificationStatus) => void;
  onReset: () => void;
  className?: string;
}

const regions: { value: Region; labelKey: string }[] = [
  { value: "thiruvannamalai", labelKey: "regions.thiruvannamalai.name" },
  { value: "kallakurichi", labelKey: "regions.kallakurichi.name" },
  { value: "villupuram", labelKey: "regions.villupuram.name" },
  { value: "sankarapuram", labelKey: "regions.sankarapuram.name" },
];

const useCases: { value: UseCase; labelKey: string }[] = [
  { value: "residential", labelKey: "property.useCaseTypes.residential" },
  { value: "agriculture", labelKey: "property.useCaseTypes.agriculture" },
  { value: "industrial", labelKey: "property.useCaseTypes.industrial" },
  { value: "mixed_use", labelKey: "property.useCaseTypes.mixedUse" },
];

const verificationStatuses: { value: VerificationStatus; labelKey: string }[] = [
  { value: "verified", labelKey: "property.verification.verified" },
  { value: "in_progress", labelKey: "property.verification.inProgress" },
  { value: "not_verified", labelKey: "property.verification.notVerified" },
];

export const PropertyFilters = ({
  selectedRegion,
  selectedUseCase,
  selectedVerification,
  onRegionChange,
  onUseCaseChange,
  onVerificationChange,
  onReset,
  className,
}: PropertyFiltersProps) => {
  const { t } = useTranslation();

  const hasActiveFilters = selectedRegion || selectedUseCase || selectedVerification;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Region Filter */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
          {t("properties.filterByRegion")}
        </label>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region.value}
              onClick={() =>
                onRegionChange(selectedRegion === region.value ? undefined : region.value)
              }
              className={cn(
                "px-4 py-2 text-sm border transition-colors",
                selectedRegion === region.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-foreground/30"
              )}
            >
              {t(region.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Use Case Filter */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
          {t("properties.filterByUseCase")}
        </label>
        <div className="flex flex-wrap gap-2">
          {useCases.map((useCase) => (
            <button
              key={useCase.value}
              onClick={() =>
                onUseCaseChange(selectedUseCase === useCase.value ? undefined : useCase.value)
              }
              className={cn(
                "px-4 py-2 text-sm border transition-colors",
                selectedUseCase === useCase.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-foreground/30"
              )}
            >
              {t(useCase.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Verification Filter */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
          {t("properties.filterByStatus")}
        </label>
        <div className="flex flex-wrap gap-2">
          {verificationStatuses.map((status) => (
            <button
              key={status.value}
              onClick={() =>
                onVerificationChange(
                  selectedVerification === status.value ? undefined : status.value
                )
              }
              className={cn(
                "px-4 py-2 text-sm border transition-colors",
                selectedVerification === status.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-foreground/30"
              )}
            >
              {t(status.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      {hasActiveFilters && (
        <button
          onClick={onReset}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
          {t("properties.resetFilters")}
        </button>
      )}
    </div>
  );
};
