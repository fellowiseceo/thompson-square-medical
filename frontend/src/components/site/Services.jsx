import { Stethoscope, ShieldCheck, Venus, Baby, Check } from "lucide-react";
import { SERVICE_GROUPS } from "@/data";

const ICONS = { Stethoscope, ShieldCheck, Venus, Baby };

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#4a7a61]">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-[#1a2e24]">
            Everything you need, under one roof
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#4a5d53] leading-relaxed">
            Comprehensive healthcare for your entire family — from routine
            check-ups to specialized services supporting every stage of your
            health journey.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {SERVICE_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <div
                key={group.id}
                data-testid={`service-card-${group.id}`}
                className="reveal rounded-3xl border border-[#eaf0ec] bg-white p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1a2e24]/5"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center h-14 w-14 shrink-0 rounded-2xl bg-[#4a7a61] text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-[#1a2e24]">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#7a8a81]">{group.blurb}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[#4a5d53]">
                      <Check className="h-4 w-4 mt-1 shrink-0 text-[#4a7a61]" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
