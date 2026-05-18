#!/usr/bin/env node
/** Prüft, ob CSS und Bilder vom lokalen Server geladen werden. */
import { execSync } from "node:child_process";

const port = process.env.PORT ?? "3010";
const base = `http://localhost:${port}`;

function curl(path) {
  return execSync(`curl -sf "${base}${path}"`, { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 });
}

function curlSize(path) {
  const out = execSync(
    `curl -s -o /tmp/zahn-verify-out -w "%{http_code}" "${base}${path}"`,
    { encoding: "utf8" }
  );
  const code = out.trim();
  const size = Number(
    execSync("wc -c < /tmp/zahn-verify-out", { encoding: "utf8" }).trim()
  );
  return { code, size };
}

try {
  const html = curl("/");
  const cssMatch = html.match(/href="(\/_next\/static\/css\/[^"]+)"/);
  if (!cssMatch) throw new Error("CSS-Link fehlt im HTML");
  const cssPath = cssMatch[1].split("?")[0];
  const { code, size } = curlSize(cssPath);
  if (code !== "200" || size < 1000) {
    throw new Error(`CSS defekt: HTTP ${code}, ${size} Bytes (erwartet >1000)`);
  }
  const img = curlSize("/images/clinic/hero-main.jpg");
  if (img.code !== "200") throw new Error("Hero-Bild nicht erreichbar");
  console.log(`OK – CSS ${size} Bytes, Bilder laden. ${base}`);
} catch (e) {
  console.error("FEHLER:", e.message);
  console.error(`Starten Sie: cd Zahnartzpraxis && npm run dev`);
  console.error(`Dann öffnen: ${base}`);
  process.exit(1);
}
