import { Shield, ShieldCheck, ShieldAlert } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import type { VerificationStatus } from "@/data/properties";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VerificationBadgeProps {
  status: VerificationStatus;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export const VerificationBadge = ({
  status,
  size = "md",
  showLabel = true,
  className,
}: VerificationBadgeProps) => {
  const { t } = useTranslation();

  const config = {
    not_verified: {
      icon: ShieldAlert,
      labelKey: "property.verification.notVerified",
      tooltipKey: "property.verification.notVerifiedTooltip",
      className: "text-muted-foreground bg-muted",
    },
    in_progress: {
      icon: Shield,
      labelKey: "property.verification.inProgress",
      tooltipKey: "property.verification.inProgressTooltip",
      className: "text-muted-foreground bg-secondary",
    },
    verified: {
      icon: ShieldCheck,
      labelKey: "property.verification.verified",
      tooltipKey: "property.verification.verifiedTooltip",
      className: "text-primary bg-primary/10",
    },
  };

  const { icon: Icon, labelKey, tooltipKey, className: statusClass } = config[status];

  const sizeClasses = {
    sm: "text-xs px-2 py-1 gap-1",
    md: "text-sm px-3 py-1.5 gap-1.5",
    lg: "text-base px-4 py-2 gap-2",
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "inline-flex items-center rounded-sm font-medium transition-colors",
              sizeClasses[size],
              statusClass,
              className
            )}
          >
            <Icon size={iconSizes[size]} />
            {showLabel && <span>{t(labelKey)}</span>}
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <p className="text-sm">{t(tooltipKey)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
