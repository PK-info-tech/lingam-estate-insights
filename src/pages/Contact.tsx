"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { absoluteUrl, buildBreadcrumbList, SITE_NAME } from "@/lib/seo";

const Contact = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message.");
      }
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Request a conversation with Lingam Estate about strategic land investment opportunities in Tamil Nadu."
        canonical={pathname}
        structuredData={[
          buildBreadcrumbList([
            { name: SITE_NAME, url: "/" },
            { name: "Contact", url: pathname },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact",
            description:
              "Request a conversation with Lingam Estate about strategic land investment opportunities in Tamil Nadu.",
            url: absoluteUrl(pathname),
          },
        ]}
      />

      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="caption text-muted-foreground mb-4">{t("contact.caption")}</p>
              <div className="divider-luxury mb-8" />
              <h1 className="heading-primary text-foreground mb-8">
                {t("contact.pageTitle")}
              </h1>
              <p className="body-large text-foreground/70 mb-12">
                {t("contact.pageSubtitle")}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("contact.email")}</p>
                    <a
                      href="mailto:premenaga@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      premenaga@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("contact.office")}</p>
                    <p className="text-foreground whitespace-pre-line">
                      {t("contact.location")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-secondary/50 p-12 text-center">
                  <h2 className="heading-tertiary text-foreground mb-4">
                    {t("contact.form.success.title")}
                  </h2>
                  <p className="text-foreground/70">
                    {t("contact.form.success.message")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground">
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-foreground mb-2"
                    >
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-foreground mb-2"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm text-foreground mb-2"
                    >
                      {t("contact.form.organization")}
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formState.organization}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          organization: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-foreground mb-2"
                    >
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
