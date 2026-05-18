import { promises as fs } from "fs";
import path from "path";
import type { Appointment, CreateAppointmentInput } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "appointments.json");

let memoryStore: Appointment[] = [];

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch {
    // Fallback to in-memory only (e.g. read-only filesystem)
  }
}

async function readFromFile(): Promise<Appointment[]> {
  try {
    await ensureDataFile();
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw) as Appointment[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return memoryStore;
  }
}

async function writeToFile(appointments: Appointment[]): Promise<void> {
  memoryStore = appointments;
  try {
    await ensureDataFile();
    await fs.writeFile(DATA_FILE, JSON.stringify(appointments, null, 2), "utf-8");
  } catch {
    // Keep in-memory only
  }
}

function generateId(): string {
  return `apt_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

/** Prisma-like repository for appointments */
export const appointmentRepository = {
  async findMany(): Promise<Appointment[]> {
    const data = await readFromFile();
    memoryStore = data;
    return [...data].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  async findById(id: string): Promise<Appointment | null> {
    const all = await this.findMany();
    return all.find((a) => a.id === id) ?? null;
  },

  async create(input: CreateAppointmentInput): Promise<Appointment> {
    const all = await readFromFile();
    const appointment: Appointment = {
      id: generateId(),
      ...input,
      message: input.message || undefined,
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    all.push(appointment);
    await writeToFile(all);
    return appointment;
  },

  async count(): Promise<number> {
    const all = await this.findMany();
    return all.length;
  },
};
