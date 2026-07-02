import { Award, Languages, Users, CalendarCheck, Phone } from "lucide-react";
import { CLINIC, IMAGES, HIGHLIGHTS } from "@/data";

const ICONS = { Award, Languages, Users, CalendarCheck };

export const Doctor = () => {
  return (
    <section id="doctor" className="py-20 lg:py-28 bg-[#1a2e24] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <div className="relative">
          <div className="absolute inset-0 -m-4 rounded-[2.5rem] bg-[#4a7a61]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#eaf0ec] shadow-2xl">
            <img
              src={IMAGES.doctor}
              alt="Dr. Aliya Ali, Family Physician at Thompson Square Medical Centre"
              className="w-full h-[440px] object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#a9c9b3]">
            Meet Your Doctor
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight">
            Dr. Aliya Ali
          </h2>
          <p className="mt-1 text-[#a9c9b3] font-medium">Family Physician · Low-Risk Obstetrics</p>

          <div className="mt-6 space-y-4 text-[#d4ddd7] leading-relaxed text-sm sm:text-base">
            <p>
              Dr. Aliya Ali completed postgraduate training in Family Medicine,
              followed by a Fellowship in Low-Risk Obstetrics at the University of
              Toronto. After graduating from medical school with distinction and
              honors, she initially specialized in Obstetrics and Gynecology,
              completing a five-year residency program.
            </p>
            <p>
              She subsequently practiced in Women's Health, Pediatrics, and
              Emergency Medicine, caring for patients across all stages of life.
              Licensed to practice in Canada and affiliated with Trillium Health
              Partners, she has provided low-risk obstetrical care since 2019.
            </p>
            <p>
              Fluent in <strong className="text-white">English, Urdu, Punjabi and Pashto</strong>,
              Dr. Ali is dedicated to compassionate, patient-centred care for
              families from diverse backgrounds — and is pleased to welcome
              walk-in patients and new patients into her practice.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {HIGHLIGHTS.map((h) => {
              const Icon = ICONS[h.icon];
              return (
                <div
                  key={h.label}
                  data-testid={`doctor-highlight-${h.icon.toLowerCase()}`}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm"
                >
                  <Icon className="h-5 w-5 text-[#a9c9b3]" />
                  <p className="mt-3 font-display text-lg font-semibold">{h.stat}</p>
                  <p className="text-xs text-[#a9c9b3] mt-0.5 leading-snug">{h.label}</p>
                </div>
              );
            })}
          </div>

          <a
            href={`tel:${CLINIC.phoneRaw}`}
            data-testid="doctor-call-btn"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#1a2e24] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d1e2c4]"
          >
            <Phone className="h-5 w-5" /> Book with Dr. Ali
          </a>
        </div>
      </div>
    </section>
  );
};
