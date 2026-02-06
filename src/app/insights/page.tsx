export const revalidate = 21600; // insights refresh every 6h
export const dynamic = "force-static";

import InsightsIndex from "@/pages/InsightsIndex";

const InsightsPage = () => {
  return <InsightsIndex />;
};

export default InsightsPage;
