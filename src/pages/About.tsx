import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";

const values = [
  {
    title: "Long-term Perspective",
    description:
      "We work with investors who understand that meaningful returns in land require patience and strategic vision.",
  },
  {
    title: "On-Ground Expertise",
    description:
      "Our knowledge comes from years of presence in these districts—relationships, insights, and access that cannot be replicated remotely.",
  },
  {
    title: "Rigorous Due Diligence",
    description:
      "Every transaction undergoes comprehensive title verification, legal audit, and physical survey before we recommend acquisition.",
  },
  {
    title: "Aligned Interests",
    description:
      "We succeed when our clients succeed. Our advisory model ensures our incentives are aligned with long-term investment outcomes.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About"
        description="Lingam Estate provides strategic land advisory for industrial and infrastructure investments in Tamil Nadu's emerging growth corridors."
      />

      {/* Header */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="caption text-muted-foreground mb-4">About</p>
            <div className="divider-luxury mb-8" />
            <h1 className="heading-primary text-foreground mb-8">
              Strategic land advisory for long-term investors
            </h1>
            <p className="body-large text-foreground/70">
              Lingam Estate provides end-to-end advisory services for land
              acquisition in Tamil Nadu's emerging industrial and infrastructure
              corridors. We work with family offices, institutions, and strategic
              investors seeking exposure to India's growth story through
              investment-grade land.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="heading-tertiary text-foreground">Our Philosophy</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8 space-y-6 text-foreground/70"
            >
              <p>
                Land investment in India is often perceived as opaque,
                fragmented, and fraught with risk. Our mission is to bring
                institutional rigor to this asset class—enabling sophisticated
                investors to access opportunities that were previously available
                only to those with deep local networks.
              </p>
              <p>
                We focus exclusively on Tamil Nadu's western corridors: a region
                we know intimately, where infrastructure investment is creating
                new economic geographies. Our deep presence in these districts
                allows us to identify opportunities, navigate complexities, and
                execute transactions with confidence.
              </p>
              <p>
                We don't operate as brokers seeking quick transactions. We build
                long-term relationships with investors who share our perspective
                on land as a strategic asset class requiring patience, expertise,
                and careful stewardship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="heading-secondary text-foreground">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <h3 className="font-display text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
              Ready to explore?
            </h2>
            <p className="body-base text-white/60 mb-12 max-w-lg mx-auto">
              Let's discuss how we can help you navigate strategic land
              investment in Tamil Nadu.
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

export default About;
