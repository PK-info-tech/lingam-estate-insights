import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const mobileMenuId = "mobile-menu";
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  const navLinks = [
    { labelKey: "nav.properties", href: "/properties" },
    { labelKey: "nav.regions", href: "/regions" },
    { labelKey: "nav.insights", href: "/insights" },
    { labelKey: "nav.about", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      firstMobileLinkRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-xl md:text-2xl tracking-tight text-foreground hover:text-primary transition-colors duration-300"
            >
              Lingam Estate
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm tracking-wide text-foreground/70 hover:text-foreground link-underline transition-colors duration-300"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <LanguageSwitcher />
              <Link
                to="/contact"
                className="btn-luxury px-6 py-3 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background text-xs"
              >
                {t("nav.contact")}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls={mobileMenuId}
                aria-haspopup="menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id={mobileMenuId}
            role="menu"
            aria-label="Mobile navigation"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 pt-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-3xl text-foreground"
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    role="menuitem"
                  >
                    {t(link.labelKey)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
                className="pt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary"
                  role="menuitem"
                >
                  {t("nav.contact")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
