import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";

interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const articles: InsightArticle[] = [
  {
    slug: "chennai-bengaluru-corridor-impact",
    title: "How the Chennai-Bengaluru Industrial Corridor Will Transform Land Values",
    excerpt:
      "An analysis of the infrastructure investments shaping the growth trajectory of Tamil Nadu's western districts and their impact on strategic land acquisition.",
    date: "2025-01-15",
    category: "Infrastructure",
    readTime: "8 min read",
  },
  {
    slug: "agricultural-land-conversion-guide",
    title: "Understanding Agricultural Land Conversion in Tamil Nadu",
    excerpt:
      "A comprehensive guide to the legal, procedural, and strategic considerations when converting agricultural land for industrial or commercial use.",
    date: "2024-12-20",
    category: "Legal",
    readTime: "12 min read",
  },
  {
    slug: "logistics-warehousing-opportunity",
    title: "The Logistics and Warehousing Opportunity in South India",
    excerpt:
      "Why institutional investors are increasingly focused on land acquisition for warehousing and logistics development in Tamil Nadu's emerging corridors.",
    date: "2024-11-28",
    category: "Investment",
    readTime: "10 min read",
  },
  {
    slug: "title-verification-essentials",
    title: "Essential Title Verification Steps for Land Acquisition",
    excerpt:
      "A detailed walkthrough of the due diligence process required to ensure clean title and avoid common pitfalls in rural land transactions.",
    date: "2024-10-15",
    category: "Due Diligence",
    readTime: "15 min read",
  },
];

const InsightsIndex = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <SEO
        title="Insights"
        description="Strategic perspectives on land investment, infrastructure development, and market dynamics in Tamil Nadu's emerging growth corridors."
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
            <p className="caption text-muted-foreground mb-4">Insights</p>
            <div className="divider-luxury mb-8" />
            <h1 className="heading-primary text-foreground mb-8">
              Perspectives on land and infrastructure investment
            </h1>
            <p className="body-large text-foreground/70">
              Research, analysis, and strategic thinking on the dynamics shaping
              Tamil Nadu's emerging investment corridors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding-sm bg-background border-t border-border">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto space-y-16">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/insights/${article.slug}`}
                  className="block group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="caption text-primary">{article.category}</span>
                    <span className="text-muted-foreground text-sm">·</span>
                    <span className="text-muted-foreground text-sm">{article.readTime}</span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                    {article.title}
                  </h2>

                  <p className="text-foreground/60 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <time className="text-sm text-muted-foreground">
                    {formatDate(article.date)}
                  </time>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsIndex;
