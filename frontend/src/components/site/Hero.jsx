import { Phone, ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { CLINIC, IMAGES } from "@/data";

const STATS = [
  { value: "All Ages", label: "Infants to seniors" },
  { value: "4 Languages", label: "English · Urdu · Punjabi · Pashto" },
  { value: "Walk-Ins", label: "Welcome daily, Tue–Sat" },
];

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#12241c]"
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2019]/95 via-[#12241c]/96 to-[#0f2019]/98" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(74,122,97,0.35),transparent_65%)]" />
      </div>

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center">
        <span
          data-testid="hero-badge"
          className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-[#7fd4a8] animate-pulse" />
          Walk-In &amp; Family Practice
        </span>

        <h1 className="reveal mt-7 font-display font-semibold tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.98]" style={{ animationDelay: "0.05s" }}>
          Thompson Square
          <span className="block text-[#7fd4a8]">Medical Centre</span>
        </h1>

        <p className="reveal mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: "0.1s" }}>
          We're your trusted family doctors in Milton. Experience healthcare
          where you're treated like family — not just a patient number.
        </p>

        <div className="reveal mt-9 flex flex-wrap justify-center gap-4" style={{ animationDelay: "0.15s" }}>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            data-testid="hero-call-btn"
            className="inline-flex items-center gap-2 rounded-full bg-[#3ec78a] px-8 py-4 font-semibold text-[#0f2019] transition-all duration-300 hover:bg-[#33b87d] hover:-translate-y-0.5 shadow-lg shadow-[#3ec78a]/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#12241c]"
          >
            <Phone className="h-5 w-5" /> Call Now
          </a>
          <a
            href="#services"
            data-testid="hero-services-btn"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5"
          >
            Our Services <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
          {STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur-md"
            >
              <p className="font-display text-xl font-semibold text-white">{s.value}</p>
              <p className="mt-1 text-xs text-white/65 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 inline-flex items-center gap-2 text-sm text-[#7fd4a8]" style={{ animationDelay: "0.25s" }}>
          <ShieldCheck className="h-4 w-4" /> Dr. Irma Khan now accepting new patients
        </p>
      </div>

      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
};
