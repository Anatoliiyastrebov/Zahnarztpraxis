import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Zahnarztpraxis Dr. Weber – Demo-Website.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-slate-900">Impressum</h1>
      <p className="mt-4 text-slate-600">
        Dies ist eine Demo-Website für Portfolio-Zwecke. Es handelt sich nicht um
        eine reale Zahnarztpraxis.
      </p>
      <div className="mt-8 space-y-4 text-slate-700">
        <p>
          <strong>{CLINIC.name}</strong>
          <br />
          {CLINIC.address.street}
          <br />
          {CLINIC.address.zip} {CLINIC.address.city}
        </p>
        <p>
          Telefon: {CLINIC.phone}
          <br />
          E-Mail: {CLINIC.email}
        </p>
      </div>
      <Link href="/" className="mt-8 inline-block text-medical-600 hover:underline">
        ← Zurück zur Startseite
      </Link>
      <p className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-600">
        This website is a demo project for my portfolio.
      </p>
    </div>
  );
}
