/**
 * Lokale Bilder unter /public/images
 * Quelle: Pexels (kostenlos, kommerziell nutzbar) – thematisch zur jeweiligen Beschriftung
 */

export const IMAGES = {
  /** Helle, moderne Zahnarztpraxis / Behandlungsraum */
  hero: {
    main: "/images/clinic/hero-main.jpg",
    alt: "Moderne Zahnarztpraxis – Behandlungsraum",
  },
  /** Zahnarzt bei der Behandlung eines Patienten */
  heroAccent: {
    src: "/images/clinic/hero-accent.jpg",
    alt: "Zahnärztliche Behandlung in der Praxis",
  },
  /** Patientin mit gesundem, strahlendem Lächeln */
  aboutClinic: {
    src: "/images/clinic/about-1.jpg",
    alt: "Patientin mit gesundem Lächeln nach der Behandlung",
  },
  /** Wartebereich / Empfang einer Zahnarztpraxis */
  aboutReception: {
    src: "/images/clinic/about-2.jpg",
    alt: "Empfangsbereich einer modernen Arztpraxis",
  },
  /** München – Stadtansicht (Symbolbild für Standort) */
  contactMap: {
    src: "/images/clinic/contact.jpg",
    alt: "München – Umgebung der Praxis (Symbolbild)",
  },
  /** Empfang: freundliche Beratung am Telefon */
  booking: {
    src: "/images/clinic/booking.jpg",
    alt: "Mitarbeiterin am Empfang berät Patienten am Telefon",
  },
} as const;

export const TEAM_PHOTOS = {
  annaWeber: {
    src: "/images/team/anna-weber.jpg",
    alt: "Porträt von Dr. med. dent. Anna Weber",
  },
  markusHoffmann: {
    src: "/images/team/markus-hoffmann.jpg",
    alt: "Porträt von Dr. med. dent. Markus Hoffmann",
  },
  sarahKlein: {
    src: "/images/team/sarah-klein.jpg",
    alt: "Porträt von Sarah Klein, ZMF",
  },
} as const;

export const SERVICE_IMAGES: Record<
  string,
  { src: string; alt: string }
> = {
  /** Professionelle Zahnreinigung / Prophylaxe */
  reinigung: {
    src: "/images/services/reinigung.jpg",
    alt: "Professionelle Zahnreinigung",
  },
  /** Zahnfüllung / restaurative Behandlung */
  fuellungen: {
    src: "/images/services/fuellungen.jpg",
    alt: "Zahnärztliche Behandlung und Füllungen",
  },
  /** Zahnimplantat / Prothesenmodell in der Praxis */
  implantologie: {
    src: "/images/services/implantologie.jpg",
    alt: "Zahnimplantat und Prothesenmodell – Implantologie",
  },
  /** Zahnspange / Kieferorthopädie bei Jugendlichen */
  kieferorthopaedie: {
    src: "/images/services/kieferorthopaedie.jpg",
    alt: "Kieferorthopädie – Zahnspange und Kontrolle",
  },
  /** Zahnärztliche Notfallversorgung */
  notfall: {
    src: "/images/services/notfall.jpg",
    alt: "Medizinische Notfallversorgung",
  },
};
