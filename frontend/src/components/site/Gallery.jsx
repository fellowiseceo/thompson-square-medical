import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/data";

export const Gallery = () => {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const resumeTimer = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    posRef.current = el.scrollLeft;
    let raf;
    const step = () => {
      if (!pausedRef.current && el) {
        const half = el.scrollWidth / 2;
        posRef.current += 0.6;
        if (half > 0 && posRef.current >= half) posRef.current -= half;
        el.scrollLeft = posRef.current;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const resync = () => {
    if (trackRef.current) posRef.current = trackRef.current.scrollLeft;
  };

  const pauseBriefly = () => {
    pausedRef.current = true;
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      resync();
      pausedRef.current = false;
    }, 2500);
  };

  const nudge = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    pauseBriefly();
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  const items = [...GALLERY, ...GALLERY];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f9f8f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#4a7a61]">
              Our Clinic
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-[#1a2e24]">
              Take a look inside
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4a5d53] leading-relaxed">
              A clean, calm and welcoming space designed to make every visit
              comfortable — from our friendly front desk to our fully equipped
              examination rooms.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => nudge(-1)}
              data-testid="gallery-prev"
              aria-label="Previous photos"
              className="grid place-items-center h-12 w-12 rounded-full border border-[#d1e2c4] bg-white text-[#4a7a61] transition-all duration-300 hover:bg-[#4a7a61] hover:text-white hover:-translate-y-0.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a7a61] focus:ring-offset-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              data-testid="gallery-next"
              aria-label="Next photos"
              className="grid place-items-center h-12 w-12 rounded-full border border-[#d1e2c4] bg-white text-[#4a7a61] transition-all duration-300 hover:bg-[#4a7a61] hover:text-white hover:-translate-y-0.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4a7a61] focus:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => {
          resync();
          pausedRef.current = false;
        }}
        className="mt-12 flex gap-5 overflow-x-auto px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((img, i) => (
          <figure
            key={i}
            data-testid={i < GALLERY.length ? `gallery-item-${i}` : undefined}
            className="group relative shrink-0 w-[280px] sm:w-[340px] overflow-hidden rounded-2xl border border-[#eaf0ec] bg-white shadow-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              draggable={false}
              className="h-64 sm:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};
