import { SERVICE_IMAGES, TEAM_PHOTOS } from "./images";

export const CLINIC = {
  name: "Zahnarztpraxis Dr. Weber & Kollegen",
  shortName: "Praxis Dr. Weber",
  tagline: "Ihr Lächeln in besten Händen – moderne Zahnmedizin in München",
  phone: "+49 89 123 456 78",
  email: "kontakt@praxis-weber-muenchen.de",
  address: {
    street: "Maximilianstraße 42",
    zip: "80538",
    city: "München",
    country: "Deutschland",
  },
} as const;

export const NAV_ITEMS = [
  { id: "hero", label: "Start" },
  { id: "leistungen", label: "Leistungen" },
  { id: "ueber-uns", label: "Über uns" },
  { id: "termin", label: "Termin" },
  { id: "kontakt", label: "Kontakt" },
] as const;

export type NavSectionId = (typeof NAV_ITEMS)[number]["id"];

export const SERVICES = [
  {
    id: "reinigung",
    title: "Professionelle Zahnreinigung",
    description:
      "Gründliche Prophylaxe zur Entfernung von Belägen und Verfärbungen – für gesunde Zähne und frischen Atem.",
    icon: "sparkles" as const,
    image: SERVICE_IMAGES.reinigung.src,
    imageAlt: SERVICE_IMAGES.reinigung.alt,
  },
  {
    id: "fuellungen",
    title: "Zahnfüllungen",
    description:
      "Ästhetische Kompositfüllungen und moderne Versorgung bei Karies – schonend und langlebig.",
    icon: "shield" as const,
    image: SERVICE_IMAGES.fuellungen.src,
    imageAlt: SERVICE_IMAGES.fuellungen.alt,
  },
  {
    id: "implantologie",
    title: "Implantologie",
    description:
      "Festsitzender Zahnersatz auf Implantaten mit 3D-Planung für natürliche Funktion und Ästhetik.",
    icon: "layers" as const,
    image: SERVICE_IMAGES.implantologie.src,
    imageAlt: SERVICE_IMAGES.implantologie.alt,
  },
  {
    id: "kieferorthopaedie",
    title: "Kieferorthopädie",
    description:
      "Unsichtbare Aligner und feste Spangen für eine harmonische Zahnstellung – für jedes Alter.",
    icon: "align-center" as const,
    image: SERVICE_IMAGES.kieferorthopaedie.src,
    imageAlt: SERVICE_IMAGES.kieferorthopaedie.alt,
  },
  {
    id: "notfall",
    title: "Notfallbehandlung",
    description:
      "Schnelle Hilfe bei Zahnschmerzen, Absplitterungen oder Unfällen – auch kurzfristige Termine.",
    icon: "siren" as const,
    image: SERVICE_IMAGES.notfall.src,
    imageAlt: SERVICE_IMAGES.notfall.alt,
  },
] as const;

export const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.title,
}));

export const TEAM = [
  {
    name: "Dr. med. dent. Anna Weber",
    role: "Praxisinhaberin & Implantologie",
    bio: "Über 15 Jahre Erfahrung in restaurativer und ästhetischer Zahnmedizin. Mitglied der DGZI.",
    image: TEAM_PHOTOS.annaWeber.src,
    imageAlt: TEAM_PHOTOS.annaWeber.alt,
  },
  {
    name: "Dr. med. dent. Markus Hoffmann",
    role: "Kieferorthopädie & Prophylaxe",
    bio: "Spezialist für Aligner-Therapie und ganzheitliche Kieferorthopädie seit 2010.",
    image: TEAM_PHOTOS.markusHoffmann.src,
    imageAlt: TEAM_PHOTOS.markusHoffmann.alt,
  },
  {
    name: "Sarah Klein, ZMF",
    role: "Zahnmedizinische Fachangestellte",
    bio: "Ihre Ansprechpartnerin für Termine, Prophylaxe und einfühlsame Patientenbetreuung.",
    image: TEAM_PHOTOS.sarahKlein.src,
    imageAlt: TEAM_PHOTOS.sarahKlein.alt,
  },
] as const;

export const OPENING_HOURS = [
  { day: "Montag – Donnerstag", hours: "08:00 – 18:00 Uhr" },
  { day: "Freitag", hours: "08:00 – 14:00 Uhr" },
  { day: "Samstag", hours: "09:00 – 12:00 Uhr (Prophylaxe)" },
  { day: "Sonntag", hours: "Geschlossen" },
] as const;
