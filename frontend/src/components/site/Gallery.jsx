import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY } from "@/data";

export const Gallery = () => {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const resumeTimer = useRef(null);
  const [lightbox, setLightbox] = useState(null); // index into GALLERY

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

  const len = GALLERY.length;
  const stepLightbox = useCallback(
    (dir) => setLightbox((s) => (s === null ? s : (s + dir + len) % len)),
    [len]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, stepLightbox]);

  const items = [...GALLERY, ...GALLERY];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f9f8f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#4a7a61]">
            Our Clinic
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-[#1a2e24]">
            Take a look inside
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4a5d53] leading-relaxed">
            A clean, calm and welcoming space designed to make every visit
            comfortable. Tap any photo to enlarge it.
          </p>
        </div>
      </div>

      <div className="relative mt-12">
        <div
          ref={trackRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => {
            resync();
            pausedRef.current = false;
          }}
          className="flex gap-5 overflow-x-auto px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((img, i) => {
            const idx = i % len;
            return (
              <figure
                key={i}
                data-testid={i < len ? `gallery-item-${i}` : undefined}
                onClick={() => setLightbox(idx)}
                className="group relative shrink-0 w-[280px] sm:w-[340px] cursor-pointer overflow-hidden rounded-2xl border border-[#eaf0ec] bg-white shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  draggable={false}
                  className="h-64 sm:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <span className="pointer-events-none absolute inset-0 bg-[#1a2e24]/0 transition-colors duration-300 group-hover:bg-[#1a2e24]/15" />
              </figure>
            );
          })}
        </div>

        {/* Side arrows */}
        <button
          type="button"
          onClick={() => nudge(-1)}
          data-testid="gallery-prev"
          aria-label="Previous photos"
          className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-12 w-12 rounded-full bg-white text-[#1a2e24] shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:bg-[#4a7a61] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4a7a61]"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          data-testid="gallery-next"
          aria-label="Next photos"
          className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-12 w-12 rounded-full bg-white text-[#1a2e24] shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:bg-[#4a7a61] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4a7a61]"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          data-testid="gallery-lightbox"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
        >
          <button
            type="button"
            data-testid="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-white/95 text-[#1a2e24] shadow-lg transition-transform hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            data-testid="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              stepLightbox(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 grid place-items-center h-12 w-12 rounded-full bg-white/90 text-[#1a2e24] shadow-lg transition-transform hover:scale-105"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <img
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              className="mx-auto max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {GALLERY[lightbox].alt} · {lightbox + 1} / {len}
            </figcaption>
          </figure>

          <button
            type="button"
            data-testid="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              stepLightbox(1);
            }}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 grid place-items-center h-12 w-12 rounded-full bg-white/90 text-[#1a2e24] shadow-lg transition-transform hover:scale-105"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
};
