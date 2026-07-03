export const CLINIC = {
  name: "Thompson Square Medical Centre",
  doctor: "Dr. Aliya Ali",
  phone: "(905) 878-1977",
  phoneRaw: "9058781977",
  email: "ayubakhthar@gmail.com",
  address: "9021 Derry Rd #12, Milton, ON L9T 7Y9",
  mapEmbed:
    "https://www.google.com/maps?q=9021+Derry+Rd+%2312+Milton+ON+L9T+7Y9&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=9021+Derry+Rd+%2312+Milton+ON+L9T+7Y9",
};

export const HOURS = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "10:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 5:00 PM" },
  { day: "Thursday", time: "10:00 AM – 5:00 PM" },
  { day: "Friday", time: "10:00 AM – 5:00 PM" },
  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed", closed: true },
];

export const IMAGES = {
  doctor:
    "https://customer-assets.emergentagent.com/job_dr-aliya-family/artifacts/dscxl2sv_Gemini_Generated_Image_r7re2fr7re2fr7re-removebg-preview.png",
  building:
    "https://customer-assets.emergentagent.com/job_dr-aliya-family/artifacts/9kclix7j_image.png",
  building2:
    "https://customer-assets.emergentagent.com/job_dr-aliya-family/artifacts/4dizu0mh_image.png",
  heroBg:
    "https://images.unsplash.com/photo-1631217871099-88310a909a32?w=1920&q=80",
  waiting: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?w=1200&q=80",
  reception:
    "https://images.pexels.com/photos/6809658/pexels-photo-6809658.jpeg?auto=compress&cs=tinysrgb&w=1200",
  family:
    "https://images.pexels.com/photos/7653088/pexels-photo-7653088.jpeg?auto=compress&cs=tinysrgb&w=1200",
  desk: "https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?w=1200&q=80",
};

export const SERVICE_GROUPS = [
  {
    id: "medical",
    icon: "Stethoscope",
    title: "Medical Services",
    blurb: "Comprehensive primary care for every stage of life.",
    items: [
      "General health check-ups & annual physical examinations",
      "Chronic disease management (diabetes, hypertension, asthma)",
      "Immunizations & vaccinations for all ages",
      "Preventive screenings — blood pressure, cholesterol, glucose",
      "Medication review, management & prescription renewals",
      "Minor injury care — cuts, sprains & minor burns",
      "Virtual care & telemedicine consultations",
      "Acute illness assessment & treatment",
      "Mental health assessment & support",
      "Lab requisitions, results review & specialist referrals",
    ],
  },
  {
    id: "preventive",
    icon: "ShieldCheck",
    title: "Preventive Care",
    blurb: "Proactive wellness to keep you and your family healthy.",
    items: [
      "Annual physical examinations",
      "Routine wellness check-ups",
      "Cancer screening (breast, cervical & prostate)",
      "STD/STI testing, prevention & counselling",
      "Smoking cessation support & counselling",
      "Lifestyle & preventive health counselling",
    ],
  },
  {
    id: "womens",
    icon: "Venus",
    title: "Women's Health",
    blurb: "Dedicated care through every chapter, including low-risk obstetrics.",
    items: [
      "Prenatal & postnatal care",
      "Low-risk obstetrical care since 2019",
      "Family planning & contraception counselling",
      "Well-woman examinations",
      "Menopause support & guidance",
    ],
  },
  {
    id: "pediatric",
    icon: "Baby",
    title: "Pediatric Services",
    blurb: "Gentle, attentive care for infants, children & adolescents.",
    items: [
      "Well-child visits",
      "Childhood immunizations",
      "Growth & development assessments",
      "Adolescent health care",
    ],
  },
];

export const HIGHLIGHTS = [
  { icon: "Award", stat: "Distinction", label: "Graduated med school with honors" },
  { icon: "Languages", stat: "4 Languages", label: "English, Urdu, Punjabi & Pashto" },
  { icon: "Users", stat: "All Ages", label: "Care from infancy through senior years" },
  { icon: "CalendarCheck", stat: "Since 2019", label: "Low-risk obstetrical care" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Dr. Ali takes the time to truly listen. She explains everything clearly and I always leave feeling cared for, not rushed. The best family doctor we've had.",
    name: "Sarah M.",
    detail: "Patient since 2021",
  },
  {
    quote:
      "The walk-in service is so convenient and the whole team is warm and welcoming. My entire family trusts this clinic with their health.",
    name: "James P.",
    detail: "Family of four",
  },
  {
    quote:
      "Compassionate, thorough and genuinely kind. Dr. Ali speaks our language and makes every visit comfortable. Truly outstanding care.",
    name: "Priya K.",
    detail: "Patient since 2019",
  },
];
