import { GALLERY } from "@/data";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f9f8f6]">
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
            comfortable — from our friendly front desk to our fully equipped
            examination rooms.
          </p>
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {GALLERY.map((img, i) => (
            <figure
              key={img.src}
              data-testid={`gallery-item-${i}`}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-[#eaf0ec] bg-white shadow-sm group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
