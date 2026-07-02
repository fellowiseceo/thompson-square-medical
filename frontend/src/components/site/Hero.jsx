import { Phone, MapPin, Clock, ArrowRight, ChevronDown } from "lucide-react";
import { CLINIC, IMAGES } from "@/data";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#12241c]"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#12241c]/95 via-[#1a3327]/90 to-[#2c5140]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(74,122,97,0.35),transparent_55%)]" />
      </div>

      {/* Doctor cutout (desktop) */}
      <div className="hidden lg:block absolute bottom-0 right-[3%] xl:right-[8%] z-10 h-[86%] w-[42%] max-w-[620px]">
        <div className="absolute inset-x-8 bottom-0 top-16 rounded-full bg-[#7fd4a8]/25 blur-3xl" />
        <img
          src={IMAGES.doctor}
          alt="Dr. Aliya Ali, Family Physician at Thompson Square Medical Centre"
          className="relative h-full w-full object-contain object-bottom drop-shadow-2xl"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-40 lg:py-0">
        <div className="max-w-2xl reveal">
          <span
            data-testid="hero-badge"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#7fd4a8] animate-pulse" />
            Walk-In &amp; Family Practice
          </span>

          <h1 className="mt-7 font-display font-semibold tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
            Thompson Square
            <span className="block text-[#7fd4a8]">Medical Centre</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            We're your trusted family doctors in Milton. Experience healthcare
            where you're treated like family — not just a patient number.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
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
        </div>
      </div>

      {/* Bottom contact bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 border-t border-white/10 bg-[#0f2019]/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/85">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#7fd4a8]" /> 9021 Derry Rd #12, Milton, ON
          </span>
          <span className="hidden sm:inline text-[#7fd4a8]">•</span>
          <a href={`tel:${CLINIC.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4 text-[#7fd4a8]" /> {CLINIC.phone}
          </a>
          <span className="hidden sm:inline text-[#7fd4a8]">•</span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#7fd4a8]" /> Tue – Sat, 10 AM – 5 PM
          </span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
};
