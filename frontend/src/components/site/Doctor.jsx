import { Phone, Globe, Sparkles } from "lucide-react";
import { CLINIC, DOCTORS } from "@/data";

const DoctorCard = ({ doc, index }) => (
  <article
    data-testid={`doctor-card-${doc.id}`}
    className="reveal flex flex-col overflow-hidden rounded-[2rem] bg-white/[0.04] border border-white/10 backdrop-blur-sm"
    style={{ animationDelay: `${index * 0.12}s` }}
  >
    <div className="relative">
      <img
        src={doc.photo}
        alt={`${doc.name}, ${doc.role} at Thompson Square Medical Centre`}
        className="w-full h-96 lg:h-[440px] object-cover object-[center_22%]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#12241c] to-transparent" />
      {doc.accepting && (
        <span
          data-testid={`doctor-accepting-${doc.id}`}
          className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#3ec78a] px-3 py-1.5 text-xs font-semibold text-[#0f2019] shadow-lg"
        >
          <Sparkles className="h-3.5 w-3.5" /> Accepting New Patients
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-7">
      <h3 className="font-display text-2xl font-semibold text-white">{doc.name}</h3>
      <p className="mt-1 text-sm text-[#a9c9b3]">{doc.role}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {doc.credentials.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#d4ddd7]">
        {doc.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {doc.languages && (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#a9c9b3]">
          <Globe className="h-4 w-4" /> {doc.languages}
        </p>
      )}

      <a
        href={`tel:${CLINIC.phoneRaw}`}
        data-testid={`doctor-call-${doc.id}`}
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#1a2e24] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d1e2c4]"
      >
        <Phone className="h-4 w-4" /> Book with {doc.name.split(" ").slice(0, 2).join(" ")}
      </a>
    </div>
  </article>
);

export const Doctor = () => {
  return (
    <section id="doctor" className="py-20 lg:py-28 bg-[#1a2e24] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#a9c9b3]">
            Meet Our Doctors
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight">
            Compassionate care from physicians you can trust
          </h2>
          <p className="mt-4 text-[#a9c9b3] leading-relaxed">
            Our family physicians deliver patient-centred care for every stage of
            life — with <strong className="text-white">Dr. Irma Khan currently accepting new patients</strong> and
            walk-ins welcome for non-registered patients, subject to daily clinic capacity.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {DOCTORS.map((doc, i) => (
            <DoctorCard key={doc.id} doc={doc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
