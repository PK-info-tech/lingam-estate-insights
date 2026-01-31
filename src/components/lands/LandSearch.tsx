import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SearchFilters {
  location: string;
  landType: string;
  budgetMin: string;
  budgetMax: string;
  sizeMin: string;
  sizeMax: string;
}

export const LandSearch = ({ variant = "hero" }: { variant?: "hero" | "page" }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    landType: "",
    budgetMin: "",
    budgetMax: "",
    sizeMin: "",
    sizeMax: "",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (filters.location) params.set("location", filters.location);
    if (filters.landType) params.set("type", filters.landType);
    if (filters.budgetMin) params.set("budgetMin", filters.budgetMin);
    if (filters.budgetMax) params.set("budgetMax", filters.budgetMax);
    if (filters.sizeMin) params.set("sizeMin", filters.sizeMin);
    if (filters.sizeMax) params.set("sizeMax", filters.sizeMax);
    navigate(`/lands?${params.toString()}`);
  };

  const isHero = variant === "hero";

  return (
    <motion.form
      onSubmit={handleSearch}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className={`w-full ${isHero ? "max-w-4xl" : "max-w-6xl"} mx-auto`}
    >
      <div className={`bg-white/95 backdrop-blur-sm ${isHero ? "p-8" : "p-12"} rounded-lg shadow-lg border border-border/50`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-2">
              {t("search.location")}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              >
                <option value="">{t("search.locationPlaceholder")}</option>
                <option value="thiruvannamalai">{t("regions.thiruvannamalai.name")}</option>
                <option value="kallakurichi">{t("regions.kallakurichi.name")}</option>
                <option value="villupuram">{t("regions.villupuram.name")}</option>
                <option value="sankarapuram">{t("regions.sankarapuram.name")}</option>
              </select>
            </div>
          </div>

          {/* Land Type */}
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-2">
              {t("search.landType")}
            </label>
            <select
              value={filters.landType}
              onChange={(e) => setFilters({ ...filters, landType: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
            >
              <option value="">{t("search.landTypePlaceholder")}</option>
              <option value="farm">{t("search.types.farm")}</option>
              <option value="investment">{t("search.types.investment")}</option>
              <option value="industrial">{t("search.types.industrial")}</option>
              <option value="temple">{t("search.types.temple")}</option>
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-2">
              {t("search.budget")}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder={t("search.budgetMin")}
                value={filters.budgetMin}
                onChange={(e) => setFilters({ ...filters, budgetMin: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              />
              <input
                type="number"
                placeholder={t("search.budgetMax")}
                value={filters.budgetMax}
                onChange={(e) => setFilters({ ...filters, budgetMax: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Size Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-2">
              {t("search.size")}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder={t("search.sizeMin")}
                value={filters.sizeMin}
                onChange={(e) => setFilters({ ...filters, sizeMin: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              />
              <input
                type="number"
                placeholder={t("search.sizeMax")}
                value={filters.sizeMax}
                onChange={(e) => setFilters({ ...filters, sizeMax: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" />
          {t("search.cta")}
        </button>
      </div>
    </motion.form>
  );
};


