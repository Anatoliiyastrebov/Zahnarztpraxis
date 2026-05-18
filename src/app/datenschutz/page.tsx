import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung – Demo-Website Zahnarztpraxis.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-slate-900">
        Datenschutzerklärung
      </h1>
      <p className="mt-4 text-slate-600">
        Diese Demo-Website speichert Terminanfragen lokal (JSON-Datei im
        Projektverzeichnis) zu Demonstrationszwecken. Es werden keine Daten an
        Dritte weitergegeben. Es findet keine echte medizinische Behandlung oder
        Terminvergabe statt.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">
        Verantwortlicher (Demo)
      </h2>
      <p className="mt-2 text-slate-600">
        Portfolio-Projekt – keine reale Praxis. Kontakt nur zu Demonstrationszwecken
        über das Kontaktformular auf der Startseite.
      </p>
      <Link href="/" className="mt-8 inline-block text-medical-600 hover:underline">
        ← Zurück zur Startseite
      </Link>
      <p className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-600">
        This website is a demo project for my portfolio.
      </p>
    </div>
  );
}
