"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CLINIC, OPENING_HOURS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/Card";
import { SiteImage } from "@/components/ui/SiteImage";

export function ContactSection() {
  const fullAddress = `${CLINIC.address.street}, ${CLINIC.address.zip} ${CLINIC.address.city}`;

  return (
    <section
      id="kontakt"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Kontakt"
          title="So erreichen Sie uns"
          description="Wir freuen uns auf Ihren Besuch in unserer Praxis im Herzen Münchens."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <h3 id="contact-heading" className="sr-only">
                Kontaktdaten
              </h3>
              <ul className="space-y-5" role="list">
                <li className="flex gap-4">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-medical-600"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-slate-900">Adresse</p>
                    <address className="mt-1 not-italic text-slate-600">
                      {CLINIC.address.street}
                      <br />
                      {CLINIC.address.zip} {CLINIC.address.city}
                      <br />
                      {CLINIC.address.country}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-medical-600"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-slate-900">Telefon</p>
                    <a
                      href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-medical-600 hover:underline"
                    >
                      {CLINIC.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-medical-600"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-slate-900">E-Mail</p>
                    <a
                      href={`mailto:${CLINIC.email}`}
                      className="mt-1 block text-medical-600 hover:underline"
                    >
                      {CLINIC.email}
                    </a>
                  </div>
                </li>
              </ul>
            </Card>

            <Card>
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-medical-600" aria-hidden />
                <h4 className="font-semibold text-slate-900">Öffnungszeiten</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <caption className="sr-only">
                    Öffnungszeiten der Praxis
                  </caption>
                  <thead>
                    <tr className="border-b border-slate-100 text-left text-slate-500">
                      <th scope="col" className="pb-2 pr-4 font-medium">
                        Tag
                      </th>
                      <th scope="col" className="pb-2 font-medium">
                        Uhrzeit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {OPENING_HOURS.map((row) => (
                      <tr
                        key={row.day}
                        className="border-b border-slate-50 last:border-0"
                      >
                        <td className="py-2.5 pr-4 text-slate-700">{row.day}</td>
                        <td className="py-2.5 text-slate-600">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full min-h-[320px] overflow-hidden p-0">
              <div className="relative h-full min-h-[320px]">
                <SiteImage
                  src={IMAGES.contactMap.src}
                  alt={IMAGES.contactMap.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  imageClassName="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <MapPin className="h-8 w-8 text-white/90" aria-hidden />
                  <p className="mt-3 font-display text-lg font-semibold">
                    {CLINIC.address.city}
                  </p>
                  <p className="mt-1 text-sm text-white/90">{fullAddress}</p>
                  <p className="mt-3 text-xs text-white/75">
                    U-Bahn: Marienplatz · Parkhaus Maximilianstraße
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
