import { Phone, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { CLINIC, IMAGES } from "@/data";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#d1e2c4]/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-[#eaf0ec] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <span
            data-testid="hero-badge"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-[#d1e2c4] px-4 py-2 text-xs font-semibold tracking-wide text-[#4a7a61] shadow-sm"
          >
            <ShieldCheck className="h-4 w-4" />
            Accepting New Patients · Walk-ins Welcome
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a2e24] leading-[1.05]">
            Healthcare where you're treated like{" "}
            <span className="text-[#4a7a61]">family</span>.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#4a5d53] leading-relaxed max-w-xl">
            Thompson Square Medical Centre is your trusted family practice and
            walk-in clinic in Milton, Ontario. Led by Dr. Aliya Ali, we deliver
            compassionate, patient-centred care for every stage of life.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              data-testid="hero-call-btn"
              className="inline-flex items-center gap-2 rounded-full bg-[#4a7a61] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#3d6651] hover:-translate-y-0.5 shadow-md focus:outline-none focus:ring-2 focus:ring-[#4a7a61] focus:ring-offset-2"
            >
              <Phone className="h-5 w-5" /> Call {CLINIC.phone}
            </a>
            <a
              href="#services"
              data-testid="hero-services-btn"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-[#d1e2c4] px-7 py-3.5 font-semibold text-[#2c4135] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4a7a61] shadow-sm"
            >
              Our Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 text-sm text-[#4a5d53]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#4a7a61]" /> {CLINIC.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#4a7a61]" /> Tue–Sat · Walk-ins welcome
            </span>
          </div>
        </div>

        <div className="reveal" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-[#1a2e24]/10 rotate-1">
              <img
                src={IMAGES.waiting}
                alt="Warm, modern waiting room at Thompson Square Medical Centre in Milton"
                className="w-full h-[420px] lg:h-[520px] object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[220px] -rotate-2">
              <p className="font-display text-3xl font-semibold text-[#4a7a61]">1000+</p>
              <p className="text-sm text-[#4a5d53] mt-1">
                Milton families cared for with warmth & trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
