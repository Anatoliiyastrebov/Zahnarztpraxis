"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import { IMAGES, TEAM_PHOTOS } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-medical-50 via-white to-white pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-medical-100/60 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-medical-200 bg-white px-4 py-1.5 text-sm font-medium text-medical-700 shadow-soft">
              <ShieldCheck className="h-4 w-4 text-accent-500" aria-hidden />
              Zertifizierte Fachzahnärzte · München
            </span>

            <h1
              id="hero-heading"
              className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl xl:text-6xl"
            >
              {CLINIC.name}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              {CLINIC.tagline}. Wir verbinden modernste Technik mit einfühlsamer
              Betreuung – für Ihre Zahngesundheit und ein strahlendes Lächeln.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                onClick={() => scrollTo("termin")}
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Termin buchen
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("leistungen")}
              >
                Leistungen ansehen
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-medical-500" aria-hidden />
                <span>Termine innerhalb von 48 Stunden</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent-500" aria-hidden />
                <span>Alle Kassen & Privatpatienten</span>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-3" aria-hidden>
                {[
                  TEAM_PHOTOS.annaWeber,
                  TEAM_PHOTOS.markusHoffmann,
                  TEAM_PHOTOS.sarahKlein,
                ].map((photo) => (
                  <div
                    key={photo.alt}
                    className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-soft"
                  >
                    <SiteImage
                      src={photo.src}
                      alt=""
                      fill
                      sizes="44px"
                      imageClassName="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-medium text-slate-800">Unser Team</span>{" "}
                – persönlich für Sie da
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative pb-6 sm:pb-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-100 shadow-card sm:aspect-[5/4] lg:aspect-[4/5]">
              <SiteImage
                src={IMAGES.hero.main}
                alt={IMAGES.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                imageClassName="object-cover"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="relative z-20 p-6 pb-8 text-white sm:absolute sm:bottom-0 sm:left-0 sm:right-0">
                <p className="font-display text-lg font-semibold drop-shadow-sm">
                  Moderne Praxisräume
                </p>
                <p className="mt-1 max-w-xs text-sm text-white/90 drop-shadow-sm">
                  Helle Behandlungszimmer mit neuester Technik
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-3 -right-3 z-30 hidden w-36 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-card sm:block lg:-right-6"
              title={IMAGES.heroAccent.alt}
            >
              <div className="relative aspect-[4/3] w-full">
                <SiteImage
                  src={IMAGES.heroAccent.src}
                  alt={IMAGES.heroAccent.alt}
                  fill
                  sizes="144px"
                  imageClassName="object-cover"
                />
              </div>
              <p className="bg-white px-2 py-1.5 text-center text-[10px] font-medium text-slate-700">
                Zahnbehandlung
              </p>
            </div>

            <div className="absolute -right-2 top-8 z-30 hidden overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block">
              <div className="relative h-16 w-16">
                <SiteImage
                  src={TEAM_PHOTOS.annaWeber.src}
                  alt={TEAM_PHOTOS.annaWeber.alt}
                  fill
                  sizes="64px"
                  imageClassName="object-cover object-top"
                />
              </div>
              <div className="bg-white px-3 py-2">
                <p className="text-xs font-semibold text-slate-900">Dr. Weber</p>
                <p className="text-[10px] text-slate-500">Implantologie</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
