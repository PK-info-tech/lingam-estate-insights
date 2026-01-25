import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";

interface ArticleContent {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
}

const articlesContent: Record<string, ArticleContent> = {
  "chennai-bengaluru-corridor-impact": {
    title: "How the Chennai-Bengaluru Industrial Corridor Will Transform Land Values",
    excerpt:
      "An analysis of the infrastructure investments shaping the growth trajectory of Tamil Nadu's western districts.",
    date: "2025-01-15",
    category: "Infrastructure",
    readTime: "8 min read",
    content: [
      "The Chennai-Bengaluru Industrial Corridor (CBIC) represents one of the most ambitious infrastructure projects in South India. Spanning approximately 560 kilometers, this corridor is designed to catalyze industrial development, improve connectivity, and create new economic opportunities across Tamil Nadu, Karnataka, and Andhra Pradesh.",
      "For strategic land investors, the CBIC presents a generational opportunity. Districts along the corridor—particularly Thiruvannamalai, Vellore, and Krishnagiri—are experiencing a fundamental shift in their economic potential. Land that was primarily agricultural is now positioned for industrial and logistics use.",
      "## Infrastructure Investments Driving Value",
      "The corridor includes several transformative infrastructure components: an expressway connecting Chennai and Bengaluru, industrial nodes at strategic locations, improved railway connectivity, and integrated logistics parks. Each of these elements contributes to land value appreciation in surrounding areas.",
      "The Chennai-Salem expressway, a key component of the broader corridor strategy, is already operational. This has significantly reduced travel times between Chennai and the western districts, making land in areas like Thiruvannamalai more accessible and attractive for industrial development.",
      "## Strategic Implications for Land Acquisition",
      "Investors who understand the corridor's development timeline can position themselves ahead of value creation. The key is identifying land parcels that will benefit from improved connectivity but have not yet reflected this potential in their pricing.",
      "Our analysis suggests that land within 20-30 kilometers of the main corridor alignment, with access to secondary roads and basic utilities, offers the optimal risk-return profile. These parcels are close enough to benefit from corridor-driven demand but far enough to avoid premium pricing.",
      "## Looking Ahead",
      "The full development of the CBIC will take 15-20 years. For patient capital with longer investment horizons, this represents an opportunity to acquire land at current agricultural valuations and hold through multiple phases of infrastructure-driven appreciation.",
      "The districts covered in our advisory practice—Thiruvannamalai, Kallakurichi, Villupuram, and Sankarapuram—are positioned to benefit meaningfully from these dynamics. Understanding the corridor's development trajectory is essential for strategic land acquisition in this region.",
    ],
  },
  "agricultural-land-conversion-guide": {
    title: "Understanding Agricultural Land Conversion in Tamil Nadu",
    excerpt:
      "A comprehensive guide to the legal and procedural considerations when converting agricultural land.",
    date: "2024-12-20",
    category: "Legal",
    readTime: "12 min read",
    content: [
      "Agricultural land conversion in Tamil Nadu is governed by a complex web of state laws, district-level regulations, and procedural requirements. For investors seeking to acquire land for industrial or commercial development, understanding this framework is essential.",
      "This guide provides an overview of the key considerations, processes, and timelines involved in converting agricultural land for non-agricultural use in Tamil Nadu.",
      "## Legal Framework",
      "The primary legislation governing land conversion in Tamil Nadu is the Tamil Nadu Land Reforms (Fixation of Ceiling on Land) Act, 1961, along with subsequent amendments. Additionally, the Tamil Nadu Panchayats Act and various environmental regulations impact conversion eligibility and process.",
      "Agricultural land is classified into different categories based on soil quality, water availability, and existing use. The classification of a specific parcel determines its conversion eligibility and the approval process required.",
      "## Conversion Process Overview",
      "The conversion process typically involves several stages: preliminary assessment, application submission, revenue department review, environmental clearances (where applicable), and final conversion order. The timeline can range from 6 months to 2 years depending on the land classification and proposed use.",
      "Applications are submitted to the Tahsildar of the relevant taluk, with supporting documentation including survey records, ownership documents, proposed land use plans, and applicable fees.",
      "## Key Considerations for Investors",
      "Before acquiring agricultural land with conversion intent, investors should conduct thorough due diligence on conversion feasibility. This includes verifying the land classification, assessing environmental sensitivity, checking for encumbrances, and understanding local development plans.",
      "Working with experienced legal counsel and land consultants is essential. The conversion process involves multiple government departments and requires careful documentation and follow-up.",
      "## Recent Regulatory Changes",
      "Tamil Nadu has introduced several reforms to streamline land conversion for industrial use. These include single-window clearance systems for approved industrial zones and expedited processing for projects meeting specific investment thresholds.",
      "Investors should stay current with regulatory developments, as the conversion framework continues to evolve in response to industrial policy objectives and environmental considerations.",
    ],
  },
  "logistics-warehousing-opportunity": {
    title: "The Logistics and Warehousing Opportunity in South India",
    excerpt:
      "Why institutional investors are increasingly focused on land acquisition for warehousing development.",
    date: "2024-11-28",
    category: "Investment",
    readTime: "10 min read",
    content: [
      "The logistics and warehousing sector in South India is undergoing a structural transformation. Driven by e-commerce growth, manufacturing expansion, and infrastructure improvements, demand for quality warehousing space has surged. For land investors, this creates a compelling opportunity.",
      "This analysis examines the drivers of warehousing demand, the strategic considerations for land acquisition, and the regions best positioned to capture this growth.",
      "## Demand Drivers",
      "Several factors are driving warehousing demand in South India. E-commerce penetration continues to grow rapidly, requiring distributed fulfillment networks closer to consumption centers. Manufacturing activity is expanding, particularly in automotive, electronics, and consumer goods sectors. And the improvement of highway infrastructure is enabling efficient logistics operations across broader geographies.",
      "Chennai, as South India's logistics hub, is seeing warehousing demand spill over to surrounding districts as land costs and congestion increase. This creates opportunities in emerging logistics corridors.",
      "## Strategic Land Considerations",
      "Ideal land for warehousing development shares several characteristics: proximity to highway access points, flat topography suitable for large-format construction, availability of utilities (power, water), and appropriate zoning or conversion potential.",
      "Land parcels of 20-50 acres or larger are particularly attractive for modern grade-A warehousing development. These formats allow for economies of scale and can accommodate the requirements of institutional tenants.",
      "## Regional Opportunities",
      "Our analysis identifies several emerging warehousing corridors in Tamil Nadu. The Chennai-Bengaluru highway corridor, the Chennai-Trichy corridor, and the area around Villupuram and Tindivanam are seeing increased interest from logistics developers.",
      "Land in these corridors, particularly parcels with existing road frontage and conversion potential, offers attractive entry points for investors focused on the logistics opportunity.",
      "## Investment Thesis",
      "The warehousing opportunity supports both development and land banking strategies. Developers can acquire, develop, and lease warehousing facilities to institutional tenants. Long-term land investors can acquire well-positioned parcels and benefit from appreciation as logistics demand evolves.",
      "In either case, the structural growth of logistics activity in South India provides a strong foundation for land investment in strategically located corridors.",
    ],
  },
  "title-verification-essentials": {
    title: "Essential Title Verification Steps for Land Acquisition",
    excerpt:
      "A detailed walkthrough of the due diligence process required to ensure clean title.",
    date: "2024-10-15",
    category: "Due Diligence",
    readTime: "15 min read",
    content: [
      "Title verification is the foundation of successful land acquisition. In Tamil Nadu's rural land markets, where documentation practices vary and historical ownership records can be complex, rigorous title due diligence is essential to protect investment and avoid costly disputes.",
      "This guide outlines the essential steps in a comprehensive title verification process.",
      "## Step 1: Document Collection",
      "Begin by collecting all available ownership documents from the seller, including sale deeds, partition documents, succession certificates, and any prior transaction records. Request certified copies of survey records (field measurement books, adangals) from the relevant survey office.",
      "Obtain encumbrance certificates for the maximum available period (typically 30 years) from the sub-registrar's office. This document reveals any registered transactions, mortgages, or liens affecting the property.",
      "## Step 2: Chain of Title Analysis",
      "Trace the ownership history back through at least three generations or 50 years, whichever is longer. Each transfer should be properly documented and registered. Gaps in the chain of title or unregistered transfers require additional investigation.",
      "Pay particular attention to inheritance-related transfers. Succession must be properly documented through family settlement deeds or succession certificates to avoid future claims from legal heirs.",
      "## Step 3: Survey and Boundary Verification",
      "Conduct a physical survey of the property to verify boundaries, extent, and any encroachments. Compare the actual ground position with official survey records. Discrepancies may indicate unauthorized changes or disputes.",
      "Verify that survey numbers and sub-divisions match across all documents. Land may have been sub-divided or consolidated over time, and records should reflect current status.",
      "## Step 4: Legal Status Assessment",
      "Verify the land classification (dry, wet, garden) and any restrictions on use or transfer. Check for government acquisition proceedings, litigation, or pending disputes. Confirm that all applicable taxes and cess have been paid current.",
      "For agricultural land, verify that the seller is eligible to hold and transfer agricultural land under state laws governing land ownership.",
      "## Step 5: On-Ground Due Diligence",
      "Visit the village revenue office to review land records and speak with revenue officials. Meet with local village leaders and neighbors to understand any informal claims or disputes. This on-ground intelligence often reveals issues not visible in documentary records.",
      "A thorough title verification process, while time-consuming, is essential for protecting your land investment. The cost of proper due diligence is minimal compared to the potential cost of title disputes after acquisition.",
    ],
  },
};

const InsightDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesContent[slug] : null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!article) {
    return (
      <Layout>
        <SEO title="Article Not Found" description="The requested article could not be found." />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-secondary mb-4">{t("insights.detail.notFound.title")}</h1>
            <Link to="/insights" className="text-primary hover:underline">
              {t("insights.detail.notFound.link")}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.excerpt}
        type="article"
      />

      {/* Header */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("insights.detail.back")}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="caption text-primary">{t(`insights.articles.${slug}.category`)}</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">{article.readTime}</span>
            </div>

            <h1 className="heading-primary text-foreground mb-8 text-balance">
              {article.title}
            </h1>

            <time className="text-muted-foreground">
              {formatDate(article.date)}
            </time>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding-sm bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose-luxury"
          >
            {article.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index}>{paragraph.replace("## ", "")}</h2>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </motion.div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-tertiary text-foreground mb-6">
              {t("insights.detail.continue.title")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/insights" className="btn-outline">
                {t("insights.detail.continue.more")}
              </Link>
              <Link to="/contact" className="btn-primary">
                {t("insights.detail.continue.contact")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightDetail;
