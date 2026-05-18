"use client";

import { motion } from "framer-motion";
import { Award, Heart, Users } from "lucide-react";
import { TEAM } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { SectionHeading } from "./SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";

const highlights = [
  {
    icon: Award,
    title: "Über 20 Jahre Erfahrung",
    text: "Unser Team vereint langjährige Expertise in allen Bereichen der Zahnmedizin.",
  },
  {
    icon: Heart,
    title: "Patienten im Mittelpunkt",
    text: "Einfühlsame Beratung und individuelle Behandlungspläne – ohne Zeitdruck.",
  },
  {
    icon: Users,
    title: "Interdisziplinäres Team",
    text: "Zahnärzte, Kieferorthopäden und Prophylaxe-Spezialisten arbeiten Hand in Hand.",
  },
];

export function AboutSection() {
  return (
    <section
      id="ueber-uns"
      className="py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Über uns"
          title="Vertrauen durch Kompetenz und Nähe"
          description="In unserer Praxis verbinden wir medizinische Exzellenz mit einer Atmosphäre, in der Sie sich wohlfühlen."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid gap-4 overflow-hidden rounded-3xl border border-slate-100 shadow-card sm:grid-cols-2 sm:gap-0"
        >
          <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[280px]">
            <SiteImage
              src={IMAGES.aboutClinic.src}
              alt={IMAGES.aboutClinic.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              imageClassName="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[280px]">
            <SiteImage
              src={IMAGES.aboutReception.src}
              alt={IMAGES.aboutReception.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              imageClassName="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-8 lg:grid-cols-3"
        >
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-slate-100 bg-medical-50/50 p-6"
            >
              <h.icon className="h-8 w-8 text-medical-600" aria-hidden />
              <h3 className="mt-4 font-semibold text-slate-900">{h.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{h.text}</p>
            </div>
          ))}
        </motion.div>

        <h3
          id="about-heading"
          className="mt-20 text-center font-display text-2xl font-bold text-slate-900"
        >
          Unser Team
        </h3>
        <p className="mt-2 text-center text-slate-600">
          Lernen Sie die Menschen hinter Ihrer Behandlung kennen.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                <SiteImage
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  imageClassName="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg font-semibold text-slate-900">
                  {member.name}
                </h4>
                <p className="text-sm font-medium text-medical-600">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
