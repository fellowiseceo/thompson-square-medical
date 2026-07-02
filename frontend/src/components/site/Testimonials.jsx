import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data";

const STATS = [
  { value: "1000+", label: "Happy Patients" },
  { value: "#1", label: "Trusted in Milton" },
  { value: "Walk-In", label: "Available Daily" },
  { value: "All Ages", label: "Welcomed & Cared For" },
];

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#4a7a61]">
            What Our Patients Say
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-[#1a2e24]">
            Milton's most trusted family doctor
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white border border-[#eaf0ec] p-6 text-center"
            >
              <p className="font-display text-2xl sm:text-3xl font-semibold text-[#4a7a61]">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[#4a5d53]">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="reveal rounded-3xl bg-white border border-[#eaf0ec] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-[#d1e2c4]" />
              <div className="mt-3 flex gap-0.5 text-[#4a7a61]">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[#4a5d53] leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-[#eaf0ec] pt-4">
                <p className="font-display font-semibold text-[#1a2e24]">{t.name}</p>
                <p className="text-sm text-[#7a8a81]">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
