import { Heart, Home, Award, DoorOpen, MapPin } from "lucide-react";
import { IMAGES } from "@/data";

const VALUES = [
  {
    icon: Heart,
    title: "Compassionate Care",
    text: "We treat you with warmth and empathy. Patients tell us they feel like family from their very first visit.",
  },
  {
    icon: Home,
    title: "Family-Centred",
    text: "Comprehensive care for everyone in your family — from infants to seniors — all under one roof.",
  },
  {
    icon: Award,
    title: "Trusted Physician",
    text: "Dr. Aliya Ali brings decades of clinical experience, graduating with distinction and honors.",
  },
  {
    icon: DoorOpen,
    title: "Walk-In Welcome",
    text: "No appointment? No problem. We welcome walk-ins so you get quality care when you need it most.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image composition */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-[#1a2e24]/10">
              <img
                src={IMAGES.building}
                alt="Thompson Square Medical Centre storefront at 9021 Derry Rd, Milton"
                className="w-full h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-8 -right-4 sm:right-6 w-44 sm:w-52 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              <img
                src="/clinic-exam-1.jpg"
                alt="Bright, fully equipped examination room at Thompson Square Medical Centre"
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -top-5 -left-4 sm:left-6 rounded-2xl bg-[#4a7a61] text-white px-5 py-4 shadow-xl">
              <p className="font-display text-2xl font-semibold leading-none">10+ yrs</p>
              <p className="text-xs text-white/85 mt-1">Serving Milton families</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#4a7a61]">
              About Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-[#1a2e24]">
              We make healthcare feel like home
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#4a5d53] leading-relaxed">
              We're proud to serve Milton with dedicated, compassionate care.
              Dr. Ali's approach emphasizes preventive care, health promotion and
              collaborative decision-making — building long-term relationships that
              help patients thrive at every stage of life.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#4a7a61]">
              <MapPin className="h-4 w-4" /> 9021 Derry Rd #12, Milton, ON L9T 7Y9
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v) => (
            <div
              key={v.title}
              data-testid={`value-${v.title.toLowerCase().replace(/\s|-/g, "")}`}
              className="rounded-2xl border border-[#eaf0ec] bg-[#f9f8f6] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-[#d1e2c4]/60 text-[#4a7a61]">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-[#1a2e24]">
                {v.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#4a5d53] leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
