import { Link } from "react-router-dom";

const footerLinks = {
  regions: [
    { label: "Thiruvannamalai", href: "/regions/thiruvannamalai" },
    { label: "Kallakurichi", href: "/regions/kallakurichi" },
    { label: "Villupuram", href: "/regions/villupuram" },
    { label: "Sankarapuram", href: "/regions/sankarapuram" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
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
              Strategic land advisory for industrial and infrastructure
              investments in Tamil Nadu's emerging growth corridors.
            </p>
          </div>

          {/* Regions */}
          <div className="md:col-span-3">
            <h4 className="caption text-white/40 mb-6">Regions</h4>
            <ul className="space-y-3">
              {footerLinks.regions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="caption text-white/40 mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="caption text-white/40 mb-6">Connect</h4>
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
            © {new Date().getFullYear()} Lingam Estate. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Investment advisory services
          </p>
        </div>
      </div>
    </footer>
  );
};
