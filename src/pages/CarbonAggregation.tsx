"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";
import heroImage from "@/assets/images/farms/paddy-fields.jpg";

const heroSrc =
  typeof heroImage === "string" ? heroImage : (heroImage as { src?: string }).src || "";

const principles = [
  {
    title: "Verifiable by design",
    description:
      "Every land claim and project metric must be backed by evidence that can be audited later.",
  },
  {
    title: "Auditability first",
    description:
      "We preserve raw sources, event logs, and provenance so third parties can reconstruct lineage.",
  },
  {
    title: "Conservative estimates",
    description:
      "Projected values are never presented as earned. Labels stay explicit and persistent.",
  },
  {
    title: "Zero greenwashing risk",
    description:
      "If a claim cannot survive external scrutiny, it does not ship.",
  },
];

const scope = {
  is: [
    "Project aggregation system",
    "Land-level eligibility and carbon tracking",
    "Future-ready MRV layer",
    "Trust dashboard for buyers and auditors",
  ],
  isNot: [
    "Token or crypto feature",
    "Offset calculator",
    "Marketing widget",
    "Real-time trading",
    "Speculative estimates shown as facts",
  ],
};

const lifecycle = [
  {
    title: "Draft",
    description:
      "Land parcels assembled, baseline evidence captured, control period defined.",
  },
  {
    title: "Registered",
    description:
      "Registry target and methodology locked, parcels validated and consolidated.",
  },
  {
    title: "Monitored",
    description:
      "MRV records gathered (satellite, field logs), audit checkpoints tracked.",
  },
  {
    title: "Issued",
    description:
      "Verified issuance with registry reference, buffer allocation recorded.",
  },
  {
    title: "Retired",
    description:
      "Retirements require multi-step approval and evidence retention.",
  },
];

const entities = [
  {
    name: "LandParcel",
    description: "Atomic unit for eligibility and provenance.",
    fields: ["Ownership verification", "GPS boundaries", "Baseline land state", "Control period"],
  },
  {
    name: "CarbonProject",
    description: "Registry-compliant aggregation of parcels.",
    fields: ["Methodology", "Registry target", "Aggregated parcels", "Status lifecycle"],
  },
  {
    name: "MRVRecord",
    description: "Measurement, reporting, verification evidence.",
    fields: ["Measurement data", "Satellite references", "Field survey logs", "Audit checkpoints"],
  },
  {
    name: "CarbonCreditBatch",
    description: "Issued credits with legal traceability.",
    fields: ["Issuance period", "Registry reference", "Quantity", "Buffer allocation"],
  },
  {
    name: "Participant",
    description: "Role-based ownership and accountability.",
    fields: ["Landowner/Farmer", "Aggregator", "Buyer", "Auditor"],
  },
];

const statusLabels = [
  {
    label: "Estimated",
    description: "Conservative projection, pending verification.",
  },
  {
    label: "Verified",
    description: "Supported by MRV and audit checkpoints.",
  },
  {
    label: "Issued",
    description: "Recorded with registry reference and buffer allocation.",
  },
  {
    label: "Retired",
    description: "Irreversible retirement with evidence and approvals.",
  },
];

const successCriteria = [
  "It can generate an audit trail on demand",
  "A third-party verifier can reconstruct the data lineage",
  "No manual data entry bypasses the validation layer",
  "Status transitions are reversible only with documented approval",
  "Test data includes edge cases (e.g., partial land withdrawal, project rejection)",
];

const implementationChecklist = [
  "Would this survive an ESG audit?",
  "Can this data be traced back to a verified source?",
  "Is there a clear owner or approver for this state change?",
  "Does the UI clearly distinguish estimated vs. verified data?",
  "Is there a rollback or correction mechanism?",
];

const antiPatterns = [
  "Auto-approval workflows for state changes",
  "Editable history (use append-only logs)",
  "Aggregated totals without drill-down to land-level data",
  "\"Estimated\" labels that fade over time",
  "One-click credit retirement without evidence",
];

const integrationRequirements = [
  "Store raw responses alongside processed data",
  "Log API call timestamps and parameters",
  "Support offline and batch verification",
  "Design for intermittent connectivity in rural parcels",
  "Assume data disputes; store evidence, not only conclusions",
];

const securityPrinciples = [
  "Role-based access (landowner != auditor != buyer)",
  "Immutable logs; corrections are additive",
  "Multi-signature approval for issuance and retirement",
  "Assume adversarial users and prevent double counting",
  "Registry API keys stored in a vault",
];

const testingRequirements = [
  "Fraud scenarios (e.g., fake land deed uploads)",
  "Reversal scenarios (e.g., wildfire reversal event)",
  "Audit reconstruction from event logs",
  "Concurrency tests (two buyers for the same batch)",
  "Data migration when methodologies change mid-project",
];

const dashboardRows = [
  {
    project: "Arunachala Afforestation",
    parcels: "18",
    status: "Monitored",
    estimated: "12,400 tCO2e",
    issued: "0",
    buffer: "Pending",
  },
  {
    project: "Kallakurichi Agroforestry",
    parcels: "11",
    status: "Registered",
    estimated: "6,950 tCO2e",
    issued: "0",
    buffer: "Pending",
  },
];

const CarbonAggregation = () => {
  const pathname = usePathname();

  return (
    <Layout>
      <SEO
        title="Carbon Credit Aggregation"
        description="Audit-first carbon credit aggregation for land-based projects. Built for verifiability, auditability, and long-term credibility."
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "Carbon Credit Aggregation", url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Carbon Credit Aggregation",
            description:
              "Audit-first carbon credit aggregation for land-based projects with explicit lifecycle controls and evidence-backed MRV.",
            url: absoluteUrl(pathname),
          },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <p className="caption text-muted-foreground mb-4">
                Carbon Credit Aggregation
              </p>
              <div className="divider-luxury mb-8" />
              <h1 className="heading-primary text-foreground mb-6">
                Audit-first aggregation for land-based carbon projects
              </h1>
              <p className="body-large text-foreground/70 mb-10">
                Lingam Estate operates as an aggregator. We assemble compliant projects
                from small parcels, maintain immutable audit trails, and keep every
                claim tied to evidence and registry-aligned methodology.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-foreground/70">
                <div className="p-4 border border-border/60 rounded-lg bg-white/70">
                  20-30 year project lifetimes
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-white/70">
                  Issuance lag: 12-24 months
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-white/70">
                  Periodic audits and reversals
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-white/70">
                  Buffer pools and registry controls
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border/60 bg-secondary/30">
                <img
                  src={heroSrc}
                  alt="Afforestation land parcels"
                  className="img-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-3xl"
          >
            <h2 className="heading-secondary text-foreground mb-4">Core Philosophy</h2>
            <p className="text-foreground/70">
              Carbon credits are financial and environmental assets. We treat them as
              long-term, regulated instruments with explicit accountability.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-border/60 rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="heading-secondary text-foreground mb-6">Scope Definition</h2>
              <p className="text-foreground/70">
                The module is built for aggregation, compliance, and auditability. It
                explicitly avoids speculative or marketing-driven outputs.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary/30 border border-border/60 rounded-lg p-6">
                <h3 className="font-display text-lg text-foreground mb-4">This module is</h3>
                <ul className="space-y-3 text-foreground/70">
                  {scope.is.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/10 border border-border/60 rounded-lg p-6">
                <h3 className="font-display text-lg text-foreground mb-4">This module is not</h3>
                <ul className="space-y-3 text-foreground/70">
                  {scope.isNot.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-foreground/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-luxury">
          <div className="max-w-3xl mb-12">
            <h2 className="heading-secondary text-foreground mb-4">Status Lifecycle</h2>
            <p className="text-foreground/70">
              Explicit state machines prevent silent changes. Every transition is logged
              and reversible only with documented approval.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {lifecycle.map((step, index) => (
              <div
                key={step.title}
                className="bg-white border border-border/60 rounded-lg p-5 shadow-sm"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Step {index + 1}
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Entities */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mb-12">
            <h2 className="heading-secondary text-foreground mb-4">Core Data Model</h2>
            <p className="text-foreground/70">
              Each entity is designed for historical versioning, evidence attachments,
              and third-party verification.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {entities.map((entity) => (
              <div
                key={entity.name}
                className="bg-white border border-border/60 rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-display text-xl text-foreground mb-3">{entity.name}</h3>
                <p className="text-foreground/70 mb-4">{entity.description}</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {entity.fields.map((field) => (
                    <li key={field} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labels */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-luxury">
          <div className="max-w-3xl mb-10">
            <h2 className="heading-secondary text-foreground mb-4">Status Labels</h2>
            <p className="text-foreground/70">
              Labels never fade. Estimated values are never presented as earned credits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {statusLabels.map((label) => (
              <div
                key={label.label}
                className="bg-white border border-border/60 rounded-lg p-5 shadow-sm"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/80 text-xs uppercase tracking-widest text-foreground/70">
                  {label.label}
                </div>
                <p className="text-sm text-foreground/70 mt-4">{label.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Dashboard */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mb-10">
            <h2 className="heading-secondary text-foreground mb-4">Trust Dashboard</h2>
            <p className="text-foreground/70">
              Buyers and auditors can drill down to land-level evidence. Aggregated
              numbers are always traceable.
            </p>
          </div>
          <div className="bg-white border border-border/60 rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary/40 text-foreground/80">
                  <tr>
                    <th className="text-left px-6 py-4 font-medium">Project</th>
                    <th className="text-left px-6 py-4 font-medium">Parcels</th>
                    <th className="text-left px-6 py-4 font-medium">Status</th>
                    <th className="text-left px-6 py-4 font-medium">Estimated</th>
                    <th className="text-left px-6 py-4 font-medium">Issued</th>
                    <th className="text-left px-6 py-4 font-medium">Buffer</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardRows.map((row) => (
                    <tr key={row.project} className="border-t border-border/40">
                      <td className="px-6 py-4 text-foreground/80">{row.project}</td>
                      <td className="px-6 py-4 text-foreground/70">{row.parcels}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full border border-border/70 text-xs uppercase tracking-widest text-foreground/60">
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground/70">{row.estimated}</td>
                      <td className="px-6 py-4 text-foreground/70">{row.issued}</td>
                      <td className="px-6 py-4 text-foreground/70">{row.buffer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Illustrative dashboard for structure only. Not a trading interface.
          </p>
        </div>
      </section>

      {/* Success Criteria and Checklist */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border border-border/60 rounded-lg p-6 shadow-sm">
              <h3 className="font-display text-xl text-foreground mb-4">Success Criteria</h3>
              <ul className="space-y-3 text-foreground/70 text-sm">
                {successCriteria.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-border/60 rounded-lg p-6 shadow-sm">
              <h3 className="font-display text-xl text-foreground mb-4">
                Implementation Checklist
              </h3>
              <ul className="space-y-3 text-foreground/70 text-sm">
                {implementationChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-patterns */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mb-10">
            <h2 className="heading-secondary text-foreground mb-4">Anti-Patterns</h2>
            <p className="text-foreground/70">
              These patterns introduce audit risk and must not be built.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {antiPatterns.map((item) => (
              <div
                key={item}
                className="bg-secondary/20 border border-border/60 rounded-lg p-5 text-foreground/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations, Security, Testing */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-border/60 rounded-lg p-6 shadow-sm">
              <h3 className="font-display text-lg text-foreground mb-4">
                External Integrations
              </h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                {integrationRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-border/60 rounded-lg p-6 shadow-sm">
              <h3 className="font-display text-lg text-foreground mb-4">
                Security Principles
              </h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                {securityPrinciples.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-border/60 rounded-lg p-6 shadow-sm">
              <h3 className="font-display text-lg text-foreground mb-4">
                Testing Requirements
              </h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                {testingRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-secondary text-white mb-6">
              Request a carbon diligence brief
            </h2>
            <p className="body-base text-white/60 mb-10 max-w-xl mx-auto">
              We align landholders, auditors, and buyers around verifiable evidence and
              registry-grade compliance. No shortcuts.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CarbonAggregation;
