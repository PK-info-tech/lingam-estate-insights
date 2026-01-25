import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";

interface RegionData {
  name: string;
  tagline: string;
  description: string;
  whyItMatters: string;
  connectivity: string[];
  potential: string[];
  useCases: string[];
}

const regionsData: Record<string, RegionData> = {
  thiruvannamalai: {
    name: "Thiruvannamalai",
    tagline: "Sacred geography meets industrial potential",
    description:
      "Thiruvannamalai, home to the sacred Arunachaleswarar Temple, is emerging as one of Tamil Nadu's most strategically positioned districts for industrial investment. Its unique combination of spiritual tourism, agricultural productivity, and improving infrastructure connectivity makes it a compelling destination for long-term capital.",
    whyItMatters:
      "The district sits at the convergence of multiple growth drivers: the Chennai-Bengaluru Industrial Corridor, improved national highway connectivity, and Tamil Nadu's industrial policy incentives. Land values remain significantly below Chennai's suburban markets while appreciation potential remains strong.",
    connectivity: [
      "NH-48 providing direct access to Chennai (180 km) and Bengaluru (200 km)",
      "Proposed Chennai-Salem expressway will further reduce travel times",
      "Railway connectivity via Thiruvannamalai Junction",
      "Proximity to Kancheepuram and Vellore industrial zones",
    ],
    potential: [
      "Industrial land prices 60-70% lower than Chennai suburbs",
      "Strong appreciation trajectory as infrastructure improves",
      "Government incentives for industrial development",
      "Abundant water resources for manufacturing",
    ],
    useCases: [
      "Light manufacturing and assembly",
      "Food and agri-processing",
      "Warehousing and logistics",
      "Educational and healthcare institutions",
    ],
  },
  kallakurichi: {
    name: "Kallakurichi",
    tagline: "Untapped potential at compelling valuations",
    description:
      "Kallakurichi, carved out as a separate district in 2019, represents one of Tamil Nadu's most intriguing early-stage investment opportunities. With extensive agricultural land, emerging infrastructure, and valuations that reflect its nascent development stage, the district offers significant upside for patient capital.",
    whyItMatters:
      "As a newly formed district, Kallakurichi is receiving focused administrative attention and infrastructure investment. The district's agricultural productivity, combined with improving connectivity, positions it well for agri-processing and light industrial development.",
    connectivity: [
      "NH-79 connecting to Salem and Villupuram",
      "Proximity to the Chennai-Salem expressway corridor",
      "State highway connectivity to Pondicherry and Cuddalore",
      "Planned railway line extensions",
    ],
    potential: [
      "Lowest land valuations among the four target districts",
      "Newly formed district with focused development attention",
      "Strong agricultural base for processing industries",
      "Emerging educational infrastructure",
    ],
    useCases: [
      "Agri-processing and cold storage",
      "Food packaging and processing",
      "Renewable energy installations",
      "Educational campuses",
    ],
  },
  villupuram: {
    name: "Villupuram",
    tagline: "Railway junction with Chennai connectivity",
    description:
      "Villupuram's strategic importance stems from its position as a major railway junction and its proximity to both Chennai and Puducherry. The district has a well-established industrial presence and continues to attract manufacturing and logistics investments.",
    whyItMatters:
      "Villupuram combines established infrastructure with room for growth. Its railway connectivity, highway access, and proximity to Chennai's industrial ecosystem make it an attractive destination for warehousing, manufacturing, and logistics operations.",
    connectivity: [
      "Major railway junction with connections to Chennai, Trichy, and beyond",
      "NH-45 providing direct Chennai access (160 km)",
      "NH-66 coastal connectivity to Puducherry and beyond",
      "East Coast Road connectivity for logistics",
    ],
    potential: [
      "Established industrial infrastructure",
      "Strong railway and road connectivity",
      "Proximity to Puducherry's industrial zones",
      "Growing demand for warehousing space",
    ],
    useCases: [
      "Warehousing and distribution centers",
      "Manufacturing and assembly",
      "Logistics and transportation hubs",
      "Industrial parks",
    ],
  },
  sankarapuram: {
    name: "Sankarapuram",
    tagline: "Infrastructure development underway",
    description:
      "Sankarapuram taluk, within Kallakurichi district, represents an early-stage opportunity where infrastructure development is actively underway. For investors with longer time horizons, the region offers the potential for significant appreciation as connectivity and services improve.",
    whyItMatters:
      "Sankarapuram is at the earliest stage of development among our focus areas, which translates to the most compelling entry valuations. Government infrastructure projects currently underway will transform accessibility and development potential over the coming years.",
    connectivity: [
      "State highway connectivity to Kallakurichi and Villupuram",
      "Planned road upgrades under state infrastructure programs",
      "Developing connectivity to national highway network",
      "Proximity to emerging industrial zones",
    ],
    potential: [
      "Entry-level valuations with maximum appreciation potential",
      "Active government infrastructure investment",
      "Large contiguous land parcels available",
      "Growing interest from institutional investors",
    ],
    useCases: [
      "Solar and renewable energy parks",
      "Large-format industrial development",
      "Integrated townships",
      "Agricultural modernization projects",
    ],
  },
};

const RegionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const region = slug ? regionsData[slug] : null;

  if (!region) {
    return (
      <Layout>
        <SEO title="Region Not Found" description="The requested region could not be found." />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-secondary mb-4">Region not found</h1>
            <Link to="/regions" className="text-primary hover:underline">
              View all regions
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${region.name} | Strategic Investment Region`}
        description={region.description.substring(0, 155)}
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/regions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Regions
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            <p className="caption text-primary mb-4">{region.tagline}</p>
            <h1 className="heading-display text-foreground mb-8">{region.name}</h1>
            <p className="body-large text-foreground/70">{region.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <h2 className="heading-tertiary text-foreground">Why it matters</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <p className="body-base text-foreground/70">{region.whyItMatters}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Connectivity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="heading-tertiary text-foreground mb-8">Connectivity</h3>
              <ul className="space-y-4">
                {region.connectivity.map((item, i) => (
                  <li key={i} className="text-foreground/60 text-sm leading-relaxed pl-4 border-l border-border">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Potential */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="heading-tertiary text-foreground mb-8">Investment Potential</h3>
              <ul className="space-y-4">
                {region.potential.map((item, i) => (
                  <li key={i} className="text-foreground/60 text-sm leading-relaxed pl-4 border-l border-primary/30">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="heading-tertiary text-foreground mb-8">Suitable For</h3>
              <ul className="space-y-4">
                {region.useCases.map((item, i) => (
                  <li key={i} className="text-foreground/60 text-sm leading-relaxed pl-4 border-l border-border">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-secondary text-white mb-8">
              Interested in {region.name}?
            </h2>
            <p className="body-base text-white/60 mb-12 max-w-lg mx-auto">
              Let's discuss how this region aligns with your investment objectives.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RegionDetail;
