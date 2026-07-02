import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/data";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Meet Dr. Ali", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "Hours & Location", href: "#location" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#f9f8f6]/85 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_24px_rgba(26,46,36,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <a href="#top" data-testid="logo-link" className="flex items-center gap-3">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-[#4a7a61] text-white font-display font-semibold text-lg">
            T
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block font-display font-semibold text-[#1a2e24]">
              Thompson Square
            </span>
            <span className="block text-xs tracking-[0.18em] uppercase text-[#4a7a61]">
              Medical Centre
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-${n.href.slice(1)}`}
              className="text-sm font-medium text-[#4a5d53] hover:text-[#4a7a61] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            data-testid="header-call-btn"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#4a7a61] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#3d6651] hover:-translate-y-0.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a7a61] focus:ring-offset-2"
          >
            <Phone className="h-4 w-4" />
            {CLINIC.phone}
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-xl border border-black/10 text-[#1a2e24]"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#f9f8f6] border-t border-black/5 px-6 py-4">
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${n.href.slice(1)}`}
                className="py-3 text-[#2c4135] font-medium border-b border-black/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              data-testid="mobile-call-btn"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#4a7a61] px-5 py-3 font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> {CLINIC.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
