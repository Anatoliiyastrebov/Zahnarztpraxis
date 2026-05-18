"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Layers,
  AlignCenter,
  Siren,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  shield: Shield,
  layers: Layers,
  "align-center": AlignCenter,
  siren: Siren,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section
      id="leistungen"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          label="Leistungen"
          title="Umfassende zahnmedizinische Versorgung"
          description="Von der Prophylaxe bis zur Implantologie – wir bieten das gesamte Spektrum moderner Zahnheilkunde unter einem Dach."
        />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Shield;
            return (
              <motion.li key={service.id} variants={item} role="listitem">
                <Card hover className="group h-full overflow-hidden p-0">
                  <div className="relative h-44 w-full">
                    <SiteImage
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      imageClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-medical-600 shadow-soft backdrop-blur-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
