"use client";

import { Button } from "@/components/ui/button";
import ArtpayLogo from "@/assets/artpay-logo.png.asset.json";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const solutions = [
  { label: "Case d'asta", desc: "Rate nel post aggiudicazione", to: "/soluzioni/case-daste" },
  { label: "Gallerie", desc: "Vendi a rate e incassa subito", to: "/soluzioni/gallerie" },
  { label: "Fiere", desc: "Checkout digitale in stand", to: "/soluzioni/fiere" },
  { label: "E-commerce arte e collectibles", desc: "Pagamenti rateali via API", to: "/soluzioni/piattaforme" },
];

const navLinks = [
  { label: "Come funziona", to: "/come-funziona" },
  { label: "Partner", to: "/partner" },
  { label: "Chi siamo", to: "/chi-siamo" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const closeTimer = useRef<number>();
  const pathname = usePathname();

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuOpen(false), 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 12);
      setHidden(currentY > 80 && currentY > lastScrollY.current && !mobileOpen);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const solid = !isHome || scrolled || menuOpen || mobileOpen;

  return (
    <>
    {/* Blur veil over the page below while the dropdown is open */}
    <div
      className={`hidden md:block fixed inset-x-0 top-16 bottom-0 z-40 bg-white/30 backdrop-blur-sm pointer-events-none transition-opacity duration-150 ease-out ${menuOpen ? "opacity-100" : "opacity-0"}`}
      aria-hidden="true"
    />
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: solid ? "#ffffff" : "transparent",
        borderBottom: solid ? "1px solid #e5edf5" : "1px solid transparent",
        transform: hidden && !menuOpen && !mobileOpen ? "translateY(-100%)" : "translateY(0)",
        transition: "background-color 0.4s ease, transform 0.35s ease, border-color 0.4s ease",
        willChange: "background-color, transform",
      }}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto px-6 lg:px-12 h-16 flex items-center justify-between" style={{ maxWidth: "1200px" }}>
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <img src={ArtpayLogo.url} alt="Artpay" className={`h-5 w-auto transition-all duration-300 ${solid ? "" : "brightness-0 invert"}`} />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <div className="relative" onMouseEnter={openMenu}>
              <button className={`inline-flex items-center gap-1 transition-colors ${solid ? "text-midnight-ink" : "text-white/80 hover:text-white"}`} onClick={() => setMenuOpen((v) => !v)}>
                Soluzioni <ChevronDown className={`h-3.5 w-3.5 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            {navLinks.map((l) => (
              <Link key={l.to} href={l.to} className={`transition-colors ${solid ? "text-steel hover:text-midnight-ink" : "text-white/80 hover:text-white"}`}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/accedi"
            className={`relative inline-flex h-10 items-center overflow-hidden rounded-sm px-7 text-sm font-medium normal-case tracking-normal transition-all duration-300 ${solid ? "bg-white" : ""}`}
          >
            {solid ? (
              <span className="relative text-midnight-ink">Accedi</span>
            ) : (
              <>
                <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <mask id="accedi-cutout">
                    <rect width="100%" height="100%" rx="4" fill="#ffffff" />
                    <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="#000000" fontSize="14" fontWeight="500">Accedi</text>
                  </mask>
                  <rect width="100%" height="100%" rx="4" fill="#ffffff" mask="url(#accedi-cutout)" />
                </svg>
                <span className="select-none opacity-0">Accedi</span>
              </>
            )}
          </Link>
          <Button asChild size="default" className="text-sm font-medium normal-case tracking-normal rounded group gap-1.5 bg-electric-iris text-paper hover:bg-primary-dark transition-all duration-300">
            <Link href="/demo">
              Richiedi una demo
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <button className={`md:hidden ${solid || mobileOpen ? "text-midnight-ink" : "text-white"}`} onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop dropdown, integrated in the navbar, stacked under Soluzioni */}
      {menuOpen && (
        <div
          className="hidden md:block bg-white animate-[fade-in_0.15s_ease-out_forwards]"
          onMouseEnter={openMenu}
        >
          <div className="mx-auto px-6 lg:px-12 pb-4 pt-2 flex items-start gap-8" style={{ maxWidth: "1200px" }}>
            <img src={ArtpayLogo.url} alt="" aria-hidden="true" className="h-5 w-auto invisible shrink-0" />
            <div className="space-y-3">
              {solutions.map((s) => (
                <Link key={s.to} href={s.to} className="group block w-fit">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-electric-iris group-hover:text-primary-dark transition-colors">
                    {s.label}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 translate-y-0.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                  <span className="block text-xs text-steel mt-0.5 group-hover:text-midnight-ink transition-colors">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}





      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-6 py-6 space-y-1">
            <span className="block px-1 pt-1 text-sm text-steel">Soluzioni</span>
            {solutions.map((s) => (
              <Link key={s.to} href={s.to} className="block py-2 px-3 text-midnight-ink hover:text-electric-iris transition-colors">
                {s.label}
              </Link>
            ))}
            {navLinks.map((l) => (
              <Link key={l.to} href={l.to} className="block py-2.5 px-1 text-midnight-ink hover:text-electric-iris transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/accedi" className="block py-2.5 px-1 text-midnight-ink hover:text-electric-iris transition-colors">
              Accedi
            </Link>
            <Button asChild size="lg" className="w-full mt-3 bg-electric-iris text-paper hover:bg-primary-dark transition-colors duration-300">
              <Link href="/demo">Richiedi una demo →</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
