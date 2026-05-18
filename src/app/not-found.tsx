import Link from "next/link";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-medical-100 text-medical-600">
        <ToothIcon className="h-8 w-8" />
      </span>
      <h1 className="mt-6 font-display text-4xl font-bold text-slate-900">
        404 – Seite nicht gefunden
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        Die angeforderte Seite existiert nicht oder wurde verschoben. Kehren
        Sie zur Startseite zurück.
      </p>
      <Link href="/" className="mt-8">
        <Button>Zur Startseite</Button>
      </Link>
      <p className="mt-12 text-sm text-slate-500">
        Diese Website ist ein Demo-Projekt für mein Portfolio.
      </p>
    </div>
  );
}
