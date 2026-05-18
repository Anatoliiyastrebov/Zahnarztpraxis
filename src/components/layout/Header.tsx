"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { CLINIC, NAV_ITEMS, type NavSectionId } from "@/lib/constants";
import { useUiStore } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

function sectionHref(id: NavSectionId) {
  return `/#${id}`;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { activeSection, isMobileMenuOpen, setActiveSection, setMobileMenuOpen } =
    useUiStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = NAV_ITEMS.map((item) => ({
      id: item.id,
      el: document.getElementById(item.id),
    }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as NavSectionId);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ el }) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome, setActiveSection]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (id: NavSectionId) => {
    closeMobileMenu();
    if (!isHome) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2 text-left"
          aria-label={`${CLINIC.shortName} – Zur Startseite`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-600 text-white">
            <ToothIcon className="h-5 w-5" />
          </span>
          <span className="hidden font-display text-lg font-semibold text-slate-900 sm:block">
            {CLINIC.shortName}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                href={sectionHref(item.id)}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    scrollToSection(item.id);
                  } else {
                    closeMobileMenu();
                  }
                }}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isHome && activeSection === item.id
                    ? "bg-medical-50 text-medical-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
                aria-current={
                  isHome && activeSection === item.id ? "true" : undefined
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          {isHome ? (
            <Button size="sm" onClick={() => scrollToSection("termin")}>
              Termin buchen
            </Button>
          ) : (
            <Link
              href="/#termin"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center rounded-xl bg-medical-600 px-4 py-2 text-sm font-medium text-white shadow-soft transition-all hover:bg-medical-700 hover:shadow-card"
            >
              Termin buchen
            </Link>
          )}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-slate-100 bg-white md:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-4" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={sectionHref(item.id)}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      scrollToSection(item.id);
                    } else {
                      closeMobileMenu();
                    }
                  }}
                  className={cn(
                    "block w-full rounded-lg px-4 py-3 text-left text-sm font-medium",
                    isHome && activeSection === item.id
                      ? "bg-medical-50 text-medical-700"
                      : "text-slate-600"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              {isHome ? (
                <Button className="w-full" onClick={() => scrollToSection("termin")}>
                  Termin buchen
                </Button>
              ) : (
                <Link
                  href="/#termin"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center rounded-xl bg-medical-600 px-6 py-2.5 font-medium text-white shadow-soft hover:bg-medical-700"
                >
                  Termin buchen
                </Link>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
