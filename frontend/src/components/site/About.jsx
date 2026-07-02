import { Heart, Home, Award, DoorOpen } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={IMAGES.reception}
              alt="Patient being welcomed at the Thompson Square reception desk"
              className="rounded-2xl object-cover h-56 lg:h-72 w-full shadow-lg mt-8"
              loading="lazy"
            />
            <img
              src={IMAGES.family}
              alt="Dr. Aliya Ali providing family-centred care to a mother and child"
              className="rounded-2xl object-cover h-56 lg:h-72 w-full shadow-lg"
              loading="lazy"
            />
          </div>

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

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  data-testid={`value-${v.title.toLowerCase().replace(/\s|-/g, "")}`}
                  className="rounded-2xl border border-[#eaf0ec] bg-[#f9f8f6] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-[#d1e2c4]/60 text-[#4a7a61]">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-[#1a2e24]">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#4a5d53] leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
