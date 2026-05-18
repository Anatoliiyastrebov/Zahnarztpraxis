"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CalendarCheck, Send } from "lucide-react";
import {
  appointmentSchema,
  type AppointmentFormData,
} from "@/lib/validations";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { useUiStore } from "@/store/use-ui-store";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { SiteImage } from "@/components/ui/SiteImage";
import { IMAGES } from "@/lib/images";

export function BookingSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const addToast = useUiStore((s) => s.addToast);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      preferredDate: "",
      service: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error?.message ?? "Buchung fehlgeschlagen");
      }

      setBookingId(json.data.id);
      setShowSuccess(true);
      addToast("success", "Ihr Terminwunsch wurde erfolgreich übermittelt.");
      reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Ein unerwarteter Fehler ist aufgetreten.";
      addToast("error", message);
    }
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <section
      id="termin"
      className="bg-gradient-to-b from-medical-50/50 to-white py-20 sm:py-28"
      aria-labelledby="booking-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Terminvereinbarung"
          title="Online Termin anfragen"
          description="Füllen Sie das Formular aus – wir melden uns innerhalb eines Werktages bei Ihnen zur Bestätigung."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid items-stretch gap-8 lg:grid-cols-5 lg:gap-10"
        >
          <div className="relative hidden min-h-[420px] overflow-hidden rounded-2xl border border-slate-100 shadow-card lg:col-span-2 lg:block">
            <SiteImage
              src={IMAGES.booking.src}
              alt={IMAGES.booking.alt}
              fill
              sizes="400px"
              imageClassName="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-900/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-display text-lg font-semibold">
                Persönliche Beratung
              </p>
              <p className="mt-1 text-sm text-white/90">
                Wir nehmen uns Zeit für Ihre Fragen
              </p>
            </div>
          </div>

          <Card className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
              aria-labelledby="booking-heading"
            >
              <Input
                label="Vollständiger Name"
                placeholder="Max Mustermann"
                required
                error={errors.fullName?.message}
                {...register("fullName")}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="E-Mail"
                  type="email"
                  placeholder="max@beispiel.de"
                  required
                  error={errors.email?.message}
                  {...register("email")}
                />
                <Input
                  label="Telefonnummer"
                  type="tel"
                  placeholder="+49 89 123 456 78"
                  required
                  hint="Für Rückfragen und Terminbestätigung"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Wunschdatum"
                  type="date"
                  min={minDate}
                  required
                  error={errors.preferredDate?.message}
                  {...register("preferredDate")}
                />
                <Select
                  label="Gewünschte Leistung"
                  placeholder="Bitte wählen…"
                  options={SERVICE_OPTIONS}
                  required
                  error={errors.service?.message}
                  {...register("service")}
                />
              </div>

              <Textarea
                label="Nachricht (optional)"
                placeholder="Besondere Wünsche oder Anmerkungen…"
                error={errors.message?.message}
                {...register("message")}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                isLoading={isSubmitting}
                leftIcon={!isSubmitting ? <Send className="h-5 w-5" /> : undefined}
              >
                {isSubmitting ? "Wird gesendet…" : "Termin anfragen"}
              </Button>

              <p className="text-xs text-slate-500">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß
                unserer Datenschutzerklärung zu. Dies ist eine Demo – es erfolgt
                keine echte Terminbuchung.
              </p>
            </form>
          </Card>
        </motion.div>
      </div>

      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Terminanfrage erhalten"
        confirmLabel="Verstanden"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-accent-600">
            <CalendarCheck className="h-8 w-8" aria-hidden />
            <p className="font-medium">Vielen Dank für Ihre Anfrage!</p>
          </div>
          <p>
            Wir haben Ihre Terminanfrage erhalten und werden uns in Kürze bei
            Ihnen melden.
          </p>
          {bookingId && (
            <p className="text-sm text-slate-500">
              Referenznummer: <span className="font-mono">{bookingId}</span>
            </p>
          )}
        </div>
      </Modal>
    </section>
  );
}
