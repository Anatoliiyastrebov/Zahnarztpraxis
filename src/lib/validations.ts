import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, "Bitte geben Sie Ihren vollständigen Namen ein.")
    .max(100, "Der Name ist zu lang."),
  email: z
    .string()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z
    .string()
    .min(6, "Bitte geben Sie eine gültige Telefonnummer ein.")
    .max(30, "Die Telefonnummer ist zu lang.")
    .regex(
      /^[\d\s+\-/()]+$/,
      "Bitte verwenden Sie nur Ziffern und übliche Sonderzeichen."
    ),
  preferredDate: z
    .string()
    .min(1, "Bitte wählen Sie ein Wunschdatum.")
    .refine((val) => {
      const date = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !isNaN(date.getTime()) && date >= today;
    }, "Das Datum muss heute oder in der Zukunft liegen."),
  service: z.enum(
    ["reinigung", "fuellungen", "implantologie", "kieferorthopaedie", "notfall"],
    { errorMap: () => ({ message: "Bitte wählen Sie eine Leistung aus." }) }
  ),
  message: z
    .string()
    .max(500, "Die Nachricht darf maximal 500 Zeichen lang sein.")
    .optional()
    .or(z.literal("")),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const appointmentApiSchema = appointmentSchema.extend({
  message: z.string().max(500).optional(),
});
