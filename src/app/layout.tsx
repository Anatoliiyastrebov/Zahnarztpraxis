import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastContainer } from "@/components/ui/Toast";
import { HashScrollHandler } from "@/components/layout/HashScrollHandler";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zahnarztpraxis Dr. Weber & Kollegen | München",
    template: "%s | Praxis Dr. Weber",
  },
  description:
    "Moderne Zahnmedizin in München: Prophylaxe, Implantologie, Kieferorthopädie und Notfallbehandlung. Jetzt Termin online anfragen.",
  keywords: [
    "Zahnarzt München",
    "Zahnarztpraxis",
    "Implantologie",
    "Zahnreinigung",
    "Kieferorthopädie",
  ],
  authors: [{ name: "Portfolio Demo" }],
  openGraph: {
    title: "Zahnarztpraxis Dr. Weber & Kollegen",
    description:
      "Ihr Lächeln in besten Händen – professionelle Zahnmedizin in München.",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-slate-900 antialiased">
        <HashScrollHandler />
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-medical-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
