import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout";
import {
  HeroSection,
  InvestmentThesis,
  RegionsSection,
  RegionHighlightsSection,
  CapabilitiesSection,
  ProcessSection,
  CTASection,
} from "@/components/home";
import { BrokerComparison } from "@/components/lands";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Lingam Estate | Strategic Land Advisory"
        description="Strategic land advisory for industrial and infrastructure investments in Tamil Nadu's emerging growth corridors. Thiruvannamalai, Kallakurichi, Villupuram, Sankarapuram."
      />
      <HeroSection />
      <InvestmentThesis />
      <BrokerComparison variant="compact" />
      <RegionHighlightsSection />
      <RegionsSection />
      <CapabilitiesSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
