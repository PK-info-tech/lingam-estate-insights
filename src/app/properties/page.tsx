export const revalidate = 43200; // refresh properties twice a day
export const dynamic = "force-static";

import PropertiesIndex from "@/pages/PropertiesIndex";

const PropertiesPage = () => {
  return <PropertiesIndex />;
};

export default PropertiesPage;
