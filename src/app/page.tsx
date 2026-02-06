export const revalidate = 86400; // 1 day ISR for marketing homepage
export const dynamic = "force-static";

import Index from "@/pages/Index";

const HomePage = () => {
  return <Index />;
};

export default HomePage;
