import Link from "next/link";
import { CLINIC, NAV_ITEMS } from "@/lib/constants";
import { ToothIcon } from "@/components/icons/ToothIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 hover:opacity-90">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-medical-600 text-white">
                <ToothIcon className="h-4 w-4" />
              </span>
              <span className="font-display font-semibold text-slate-900">
                {CLINIC.shortName}
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Moderne Zahnmedizin mit persönlicher Betreuung im Herzen Münchens.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    className="text-sm text-slate-600 transition-colors hover:text-medical-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600" role="list">
              <li>
                <Link href="/impressum" className="hover:text-medical-600">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-medical-600">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm font-medium text-slate-700">
            Diese Website ist ein Demo-Projekt für mein Portfolio.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            © {currentYear} {CLINIC.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
