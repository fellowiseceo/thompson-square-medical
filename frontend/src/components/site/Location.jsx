import { MapPin, Phone, Mail, Clock, Navigation, Accessibility } from "lucide-react";
import { CLINIC, HOURS } from "@/data";

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export const Location = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#4a7a61]">
            Visit Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-[#1a2e24]">
            Hours & Location
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div>
            <div className="rounded-3xl border border-[#eaf0ec] bg-[#f9f8f6] p-7">
              <div className="flex items-center gap-2 text-[#1a2e24]">
                <Clock className="h-5 w-5 text-[#4a7a61]" />
                <h3 className="font-display text-lg font-medium">Clinic Hours</h3>
              </div>
              <ul className="mt-5 divide-y divide-[#eaf0ec]">
                {HOURS.map((h) => {
                  const isToday = h.day === today;
                  return (
                    <li
                      key={h.day}
                      data-testid={`hours-${h.day.toLowerCase()}`}
                      className={`flex items-center justify-between py-3 ${
                        isToday ? "font-semibold text-[#4a7a61]" : "text-[#4a5d53]"
                      }`}
                    >
                      <span>
                        {h.day}
                        {isToday && (
                          <span className="ml-2 text-xs rounded-full bg-[#d1e2c4] px-2 py-0.5 text-[#2c4135]">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={h.closed ? "text-[#b04a4a]" : ""}>{h.time}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 flex items-center gap-2 text-sm text-[#7a8a81]">
                <Accessibility className="h-4 w-4 text-[#4a7a61]" />
                Wheelchair accessible · restroom available
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-1 gap-3">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                data-testid="location-phone"
                className="flex items-center gap-4 rounded-2xl border border-[#eaf0ec] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-[#d1e2c4]/60 text-[#4a7a61]">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-[#7a8a81]">Call us</span>
                  <span className="font-display font-medium text-[#1a2e24]">{CLINIC.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${CLINIC.email}`}
                data-testid="location-email"
                className="flex items-center gap-4 rounded-2xl border border-[#eaf0ec] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-[#d1e2c4]/60 text-[#4a7a61]">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-[#7a8a81]">Email us</span>
                  <span className="font-display font-medium text-[#1a2e24] break-all">{CLINIC.email}</span>
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-[#eaf0ec] bg-white p-5">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-[#d1e2c4]/60 text-[#4a7a61]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-[#7a8a81]">Address</span>
                  <span className="font-display font-medium text-[#1a2e24]">{CLINIC.address}</span>
                </span>
              </div>
            </div>

            <a
              href={CLINIC.directions}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="get-directions-btn"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4a7a61] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#3d6651] hover:-translate-y-0.5 shadow-md"
            >
              <Navigation className="h-5 w-5" /> Get Directions
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#eaf0ec] shadow-lg min-h-[420px]">
            <iframe
              title="Thompson Square Medical Centre location map"
              src={CLINIC.mapEmbed}
              className="w-full h-full min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
