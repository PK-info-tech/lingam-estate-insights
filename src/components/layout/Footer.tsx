import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    regions: [
      { labelKey: "regions.thiruvannamalai.name", href: "/regions/thiruvannamalai" },
      { labelKey: "regions.kallakurichi.name", href: "/regions/kallakurichi" },
      { labelKey: "regions.villupuram.name", href: "/regions/villupuram" },
      { labelKey: "regions.sankarapuram.name", href: "/regions/sankarapuram" },
    ],
    company: [
      { labelKey: "nav.about", href: "/about" },
      { labelKey: "nav.insights", href: "/insights" },
      { labelKey: "nav.contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-display text-2xl text-white tracking-tight"
            >
              Lingam Estate
            </Link>
            <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Regions */}
          <div className="md:col-span-3">
            <h4 className="caption text-white/40 mb-6">{t("footer.regions")}</h4>
            <ul className="space-y-3">
              {footerLinks.regions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="caption text-white/40 mb-6">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="caption text-white/40 mb-6">{t("footer.connect")}</h4>
            <a
              href="mailto:hello@lingamestate.com"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              hello@lingamestate.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-white/40 text-sm">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};
