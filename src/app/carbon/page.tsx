export const revalidate = 21600; // carbon module refresh every 6h
export const dynamic = "force-static";

import CarbonAggregation from "@/pages/CarbonAggregation";

const CarbonPage = () => {
  return <CarbonAggregation />;
};

export default CarbonPage;
