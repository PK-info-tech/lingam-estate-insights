"use client";

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
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildOrganizationSchema,
  buildWebsiteSchema,
  SITE_NAME,
} from "@/lib/seo";
import heroImage from "@/assets/hero-landscape.jpg";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Strategic Land Advisory"
        description="Strategic land advisory for industrial and infrastructure investments in Tamil Nadu's emerging growth corridors. Thiruvannamalai, Kallakurichi, Villupuram, Sankarapuram."
        canonical="/"
        preloadImage={heroImage}
        structuredData={[
          buildOrganizationSchema(),
          buildWebsiteSchema(),
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: SITE_NAME,
            url: absoluteUrl("/"),
            description:
              "Strategic land advisory for industrial and infrastructure investments in Tamil Nadu's emerging growth corridors.",
          },
        ]}
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
