"use client";

import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewSection } from "./OverviewSection";
import { UseCasesSection } from "./UseCasesSection";
import { ConnectivitySection } from "./ConnectivitySection";
import type { Property } from "@/data/properties";

interface PropertyTabsProps {
  property: Property;
}

export const PropertyTabs = ({ property }: PropertyTabsProps) => {
  const { t } = useTranslation();

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 gap-0">
        <TabsTrigger
          value="overview"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-sm tracking-wide"
        >
          {t("property.overview")}
        </TabsTrigger>
        <TabsTrigger
          value="usecases"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-sm tracking-wide"
        >
          {t("property.useCases")}
        </TabsTrigger>
        <TabsTrigger
          value="connectivity"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-sm tracking-wide"
        >
          {t("property.connectivity")}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-8">
        <OverviewSection property={property} />
      </TabsContent>

      <TabsContent value="usecases" className="mt-8">
        <UseCasesSection property={property} />
      </TabsContent>

      <TabsContent value="connectivity" className="mt-8">
        <ConnectivitySection property={property} />
      </TabsContent>
    </Tabs>
  );
};
