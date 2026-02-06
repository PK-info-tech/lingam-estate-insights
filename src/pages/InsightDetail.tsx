"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

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
  "patta-chitta-ec-checklist-thiruvannamalai": {
    title: "Patta, Chitta, EC: Fast-Track Checklist for Thiruvannamalai Buyers",
    excerpt:
      "Exact steps, offices, and timelines to secure patta, chitta, and EC around Arunachala—what we verify before we advise a client to proceed.",
    date: "2025-02-01",
    category: "Legal",
    readTime: "11 min read",
    content: [
      "On a recent 5.2-acre buy near Chengam Road, we cleared patta, chitta, and EC in 9 business days because we treated them as parallel tracks. When we staggered these in 2023, the same work took 32 days. Speed is possible when you arrive with complete papers and respectful follow-up.",
      "## Where we file (and who matters)",
      "Patta: VAO counter with latest tax receipt, sale deed copy, survey sketch. Chitta/Adangal: taluk office—crop entries reveal silent changes; we cross-check with village assistants. EC: sub-registrar, always for 30 years. Knowing the data-entry clerk’s lunch window is as useful as any template.",
      "## Timelines we actually see",
      "Clean lineage: patta correction 2–3 weeks; inheritance mutation adds 2–3 more. EC: 2–5 days except fiscal year-end. Chitta/Adangal: same day unless there’s a boundary dispute. We never pay a token until EC is in hand.",
      "## Red flags that stop us",
      "Unmutated inheritance, mismatched sub-division, joint patta with absentee heirs, EC entries showing back-to-back PoAs. We escrow or walk away; we don’t “proceed and hope.”",
      "## Our fast-track stack",
      "Parallel filing; pre-drafted affidavits for minor name mismatches; on-ground runner for EC; surveyor on call to resolve sub-division doubts the same week. If one document drags, we tell the seller exactly why and what must be fixed—no vague promises.",
    ],
  },
  "kallakurichi-industrial-logistics-map": {
    title: "Kallakurichi Industrial Land: Where Logistics Actually Work",
    excerpt:
      "High-confidence pockets for warehousing and light industry in Kallakurichi, with highway access, power proximity, and realistic timelines.",
    date: "2025-02-03",
    category: "Infrastructure",
    readTime: "10 min read",
    content: [
      "In Kallakurichi we walk the route with truckers before we underwrite. On one shortlisted 12-acre parcel near the SH-6 spur, drivers showed us the exact bottleneck—a 15 ft bridge that kills 40-ft container movement. We dropped that site the same evening.",
      "## Access that really matters",
      "Frontage within 2 km of SH-6 feeders and under 15 km to NH77 keeps line-haul predictable. We prefer sites inside a 10 km radius of the Periyeriyur 110 kV substation—recent approvals there got LT connections in 45–60 days instead of 90+.",
      "## Parcel geometry and depth",
      "For warehousing we need 200–300 m depth and clean turning radii; panhandles add months. Slightly higher-priced flat parcels beat cheaper undulating land once you factor ₹40–60/sqft in grading.",
      "## Friction we budget for",
      "Approach-road widening by a panchayat can take 60–90 days; transformer augmentation when loads are near cap adds another 30–45. We model these delays into IRR; if the deal dies, we’re glad it died on paper.",
      "## Our shortlist criteria",
      "Clear EC, all-weather frontage, depth >200 m, power infra <10 km, and soil bearing verified with a light geotech probe. Only then do we open price talks.",
    ],
  },
  "water-and-borewell-arunachala-belt": {
    title: "Water & Borewell Reality in the Arunachala Belt",
    excerpt:
      "Groundwater depth, recharge, and borewell risk across key taluks; how we de-risk water before you commit.",
    date: "2025-02-05",
    category: "Infrastructure",
    readTime: "9 min read",
    content: [
      "Investors underestimate water more than title. Our bore logs in Polur show steady yields at 220–260 ft with TDS ~650 ppm; Kalasapakkam stretches to 280–320 ft and tapers in late summer; Chengam has shallow hits but wild seasonal swings.",
      "## Tests we actually run",
      "Step-drawdown for 3 hours with recovery curves, TDS and hardness checks. If a site cannot sustain 1.5–2 inch discharge for 4 hours in March, we drop it—no matter how good the view is.",
      "## Design for resilience",
      "We model dual sources (existing well + new bore), 3-day storage, and drip-ready lines. For agro-forestry pitches we insist on this capex before talking appreciation.",
      "## A recent save",
      "A “water-rich” 4-acre plot near Meyyur failed recovery in 27 minutes. We avoided a ₹75L mistake because the seller agreed to a test before token. Bore data beats brochure claims every time.",
    ],
  },
  "temple-view-legal-guardrails": {
    title: "Temple-View Investments: Legal Guardrails Near Arunachaleswarar",
    excerpt:
      "Setbacks, HR&CE sensitivities, noise/traffic, and what is actually permissible around temple-view plots.",
    date: "2025-02-07",
    category: "Legal",
    readTime: "8 min read",
    content: [
      "Temple-view is emotional, but HR&CE and local bodies watch closely. We classify plots by distance from the Girivalam path and any HR&CE-controlled parcels.",
      "## What’s actually allowed",
      "Inside the immediate influence zone: low-rise, quiet use only. Beyond 1–2 km: farmhouses/wellness stays are feasible if zoning aligns. We never promise “resort potential” without a zoning check.",
      "## Pitfalls we see",
      "Unapproved layouts marketed as “temple view”, missing cart-track rights, and setbacks ignored. We run EC specifically looking for HR&CE entries and verify right-of-way in writing before mentioning the view in any collateral.",
      "## Example",
      "A plot 1.4 km off the Girivalam route had a beautiful line of sight—but a 9 ft access shared with four families. We drafted and registered a wider ROW first; only then did we market it.",
    ],
  },
  "nri-playbook-tn-land": {
    title: "NRI Playbook: Registering Tamil Nadu Land Without Flying In",
    excerpt:
      "PoA, apostille, remittance trail, KYC, and on-ground execution—how we close land deals for NRIs end to end.",
    date: "2025-02-09",
    category: "Process",
    readTime: "9 min read",
    content: [
      "We recently closed a 6-acre buy for a client in Sydney without them boarding a flight. The backbone was a watertight PoA and an auditable money trail.",
      "## Documentation that works",
      "PoA: notarised + apostilled, property described clearly, authority to present for registration. PAN is mandatory; Aadhaar helps for e-stamp but isn’t essential.",
      "## Money trail",
      "Funds via NRE/NRO with FIRC retained; we attach FIRC to the sale deed bundle so repatriation is clean later. No mixed accounts, no cash components—ever.",
      "## Execution flow",
      "Draft deed vetted by counsel, token escrowed, PoA holder at SRO with originals, buyer on video for final confirmation. Post-registration we mutate and link utilities before the client even books flights.",
    ],
  },
  "agri-to-industrial-kallakurichi-timeline": {
    title: "Agriculture to Industrial Conversion in Kallakurichi: Month-by-Month Timeline",
    excerpt:
      "Realistic SLAs, offices involved, documents, and objection handling for agri-to-industrial conversion.",
    date: "2025-02-11",
    category: "Legal",
    readTime: "10 min read",
    content: [
      "We plan for 6–9 months in Kallakurichi when the sequence is tight. The last conversion we guided wrapped in a little over 7 months because objections were pre-answered.",
      "## Month-by-month reality",
      "Month 1: dossier (FMB, adangal, 30-year EC, topo, tentative layout). Month 2–3: file at Collectorate; expect site inspections. Month 4–5: objections/clarifications—we attach access-road proof and water plan upfront to blunt them. Month 6–7: fees, order issuance. We carry a 60-day buffer for surprises.",
      "## Common objections and our pre-empts",
      "Access width, water source, power load. We include a third-party water study and TNEB load letter template at filing; it has cut one full objection cycle in our last two files.",
    ],
  },
  "nh77-nh79-road-projects-thiruvannamalai": {
    title: "Road Projects Moving Land Prices: NH77/NH79 & Feeders Around Thiruvannamalai",
    excerpt:
      "Upcoming road work, milestones, and which villages gain first from NH77/NH79 and feeder improvements.",
    date: "2025-02-13",
    category: "Infrastructure",
    readTime: "8 min read",
    content: [
      "Absorption follows road work, not announcements. We track NH77/NH79 packages plus the feeder upgrades that really open access.",
      "## What’s moving now",
      "Widening near Chengam with culvert work already bid out; feeder upgrades toward Polur showing on-ground stone stacking; planned truck bays on NH77 at two locations locals already talk about. Villages with two-sided access (state highway + feeder) move first.",
      "## Investor takeaway",
      "Underwrite appreciation only where work is funded and contractors mobilised. We ignore “proposal” corridors until bids are awarded and marked on site.",
    ],
  },
  "title-defects-we-blocked-thiruvannamalai": {
    title: "Due Diligence War Stories: Title Defects We Blocked in Thiruvannamalai",
    excerpt:
      "Five real defects we stopped before money moved—what to check and how to structure deals safely.",
    date: "2025-02-15",
    category: "Due Diligence",
    readTime: "9 min read",
    content: [
      "We’ve stopped more deals than we’ve closed. Five recent saves:",
      "## 1) Undisclosed heir in Canada",
      "Legal heir certificate missed a son abroad; we caught it by matching old school transfer certificates. We insisted on a fresh LHC before any token moved.",
      "## 2) Layered PoAs",
      "Three PoAs in 18 months on the same survey number. We paused until the principal appeared in person and revoked the middle PoAs.",
      "## 3) Misaligned sub-division",
      "Sale deed cited a sub-division not reflected in adangal. We forced a re-survey + mutation before negotiation resumed.",
      "## 4) Access right not on paper",
      "Cart-track access was only verbal. We drafted and registered a right-of-way; without it the deal was off.",
      "## 5) Silent acquisition notice",
      "A Section 15 notice sat in taluk records for a minor road project. We found it during revenue search; the buyer thanked us for walking away.",
    ],
  },
};

const InsightDetail = () => {
  const { t } = useTranslation();
  const params = useParams<{ slug: string }>();
  const pathname = usePathname();
  const slug = params?.slug as string | undefined;
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
            <Link href="/insights" className="text-primary hover:underline">
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
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "Insights", url: "/insights" },
            { name: article.title, url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            dateModified: article.date,
            mainEntityOfPage: absoluteUrl(pathname),
            author: {
              "@type": "Organization",
              name: SITE_NAME,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/og-image.jpg"),
              },
            },
          },
        ]}
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
              href="/insights"
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
              <Link href="/insights" className="btn-outline">
                {t("insights.detail.continue.more")}
              </Link>
              <Link href="/contact" className="btn-primary">
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
