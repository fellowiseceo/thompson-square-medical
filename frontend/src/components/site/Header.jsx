import { useEffect, useState } from "react";
import { Menu, X, Phone, Clock, Mail, MapPin } from "lucide-react";
import { CLINIC, IMAGES } from "@/data";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Meet Dr. Ali", href: "#doctor" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Hours & Location", href: "#location" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled;

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#f9f8f6]/90 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_24px_rgba(26,46,36,0.06)]"
          : "bg-transparent"
      }`}
    >
      {/* Utility bar */}
      <div
        className={`hidden md:block border-b transition-colors ${
          light ? "border-white/10" : "border-black/5"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-8 h-10 flex items-center justify-center gap-x-7 text-xs font-medium ${
            light ? "text-white/75" : "text-[#4a5d53]"
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <Clock className={`h-3.5 w-3.5 ${light ? "text-[#7fd4a8]" : "text-[#4a7a61]"}`} />
            Mon &amp; Sun Closed · Tue–Fri 10AM–5PM · Sat 10AM–4PM
          </span>
          <span className={light ? "text-white/25" : "text-black/15"}>|</span>
          <a href={`mailto:${CLINIC.email}`} className="inline-flex items-center gap-1.5 hover:opacity-80">
            <Mail className={`h-3.5 w-3.5 ${light ? "text-[#7fd4a8]" : "text-[#4a7a61]"}`} />
            {CLINIC.email}
          </a>
          <span className={light ? "text-white/25" : "text-black/15"}>|</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className={`h-3.5 w-3.5 ${light ? "text-[#7fd4a8]" : "text-[#4a7a61]"}`} />
            9021 Derry Rd #12, Milton, ON
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <a href="#top" data-testid="logo-link" className="flex items-center gap-3">
          <span className="grid place-items-center h-11 w-11 rounded-xl bg-white shadow-sm overflow-hidden">
            <img
              src={IMAGES.logo}
              alt="Thompson Square Medical Centre logo"
              className="h-full w-full object-contain scale-[1.7]"
            />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display font-semibold transition-colors ${
                light ? "text-white" : "text-[#1a2e24]"
              }`}
            >
              Thompson Square
            </span>
            <span
              className={`block text-xs tracking-[0.18em] uppercase transition-colors ${
                light ? "text-[#7fd4a8]" : "text-[#4a7a61]"
              }`}
            >
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
              className={`text-sm font-medium transition-colors ${
                light ? "text-white/85 hover:text-white" : "text-[#4a5d53] hover:text-[#4a7a61]"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            data-testid="header-call-btn"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              light
                ? "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 focus:ring-white focus:ring-offset-transparent"
                : "bg-[#4a7a61] text-white hover:bg-[#3d6651] shadow-sm focus:ring-[#4a7a61]"
            }`}
          >
            <Phone className="h-4 w-4" />
            {CLINIC.phone}
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid place-items-center h-10 w-10 rounded-xl border ${
              light ? "border-white/25 text-white" : "border-black/10 text-[#1a2e24]"
            }`}
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
