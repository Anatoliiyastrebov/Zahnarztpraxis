export interface Appointment {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  service: string;
  message?: string;
  createdAt: string;
  status: "pending" | "confirmed" | "cancelled";
}

export interface CreateAppointmentInput {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  service: string;
  message?: string;
}
