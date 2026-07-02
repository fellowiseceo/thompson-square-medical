import { useEffect, useState } from "react";
import { Phone, Navigation, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CLINIC, IMAGES } from "@/data";

export const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-testid="welcome-modal"
        className="max-w-lg overflow-hidden rounded-3xl border-none p-0 gap-0"
      >
        <div className="relative h-40">
          <img
            src={IMAGES.desk}
            alt="Thompson Square Medical Centre reception"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e24]/80 to-[#1a2e24]/20" />
          <span className="absolute bottom-4 left-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#4a7a61]">
            <Sparkles className="h-3.5 w-3.5" /> Now Accepting New Patients
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-medium text-[#1a2e24] text-left">
              Welcome to Thompson Square Medical Centre
            </DialogTitle>
            <DialogDescription className="text-left text-[#4a5d53] leading-relaxed pt-2">
              Dr. Aliya Ali is welcoming <strong>new patients</strong> and{" "}
              <strong>walk-ins</strong> into her Milton family practice.
              Compassionate, patient-centred care for every stage of life.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              data-testid="modal-call-btn"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#4a7a61] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#3d6651]"
            >
              <Phone className="h-4 w-4" /> Call to Book
            </a>
            <a
              href={CLINIC.directions}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              data-testid="modal-directions-btn"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#d1e2c4] px-6 py-3 font-semibold text-[#2c4135] transition-all duration-300 hover:border-[#4a7a61]"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-[#7a8a81]">
            {CLINIC.address} · Tue–Sat
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
