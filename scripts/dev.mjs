#!/usr/bin/env node
/**
 * Zuverlässiger Dev-Start: Projektordner, .next bereinigen, Port freigeben.
 */
import { spawn } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = process.env.PORT ?? "3010";

process.chdir(projectRoot);

if (!existsSync(path.join(projectRoot, "src/app/globals.css"))) {
  console.error(
    "\n❌ Запускайте из папки Zahnartzpraxis:\n   cd Zahnartzpraxis && npm run dev\n"
  );
  process.exit(1);
}

function freePort(p) {
  try {
    const pids = execSync(`lsof -ti :${p} 2>/dev/null`, { encoding: "utf8" })
      .trim()
      .split("\n")
      .filter(Boolean);
    for (const pid of pids) {
      try {
        execSync(`kill -9 ${pid} 2>/dev/null`);
      } catch {
        /* ignore */
      }
    }
  } catch {
    /* Port bereits frei */
  }
}

console.log("\n🦷 Zahnarztpraxis – подготовка dev-сервера…\n");

freePort(port);
freePort("3000");

const nextDir = path.join(projectRoot, ".next");
if (existsSync(nextDir)) {
  console.log("   Очистка кэша .next …");
  rmSync(nextDir, { recursive: true, force: true });
}

console.log(`\n✅ Откройте ТОЛЬКО этот адрес:\n   → http://localhost:${port}\n`);
console.log("   (Не используйте localhost:3000 — там может быть старый сломанный процесс.)\n");

const child = spawn("npx", ["next", "dev", "--port", port], {
  cwd: projectRoot,
  stdio: "inherit",
  env: {
    ...process.env,
    PORT: port,
    // Feste Wurzel für PostCSS/Tailwind (lockfile im Home-Verzeichnis)
    INIT_CWD: projectRoot,
  },
});

child.on("exit", (code) => process.exit(code ?? 0));
