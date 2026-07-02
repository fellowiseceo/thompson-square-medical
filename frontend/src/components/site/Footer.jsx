import { Phone, Navigation } from "lucide-react";
import { CLINIC } from "@/data";

export const Footer = () => {
  return (
    <footer className="bg-[#1a2e24] text-[#d4ddd7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 rounded-3xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              We're here when you need us
            </h2>
            <p className="mt-4 text-[#a9c9b3] leading-relaxed">
              Whether you need a routine check-up or same-day care, we're ready to
              help. Walk in or call us today — your health is our priority.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                data-testid="footer-call-btn"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#1a2e24] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d1e2c4]"
              >
                <Phone className="h-5 w-5" /> {CLINIC.phone}
              </a>
              <a
                href={CLINIC.directions}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-directions-btn"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Navigation className="h-5 w-5" /> Visit Our Clinic
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-[#4a7a61] text-white font-display font-semibold">
              T
            </span>
            <span className="font-display font-medium text-white">
              Thompson Square Medical Centre
            </span>
          </div>
          <p className="text-[#a9c9b3] text-center">
            {CLINIC.address} · {CLINIC.phone}
          </p>
          <p className="text-[#7a8a81]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
