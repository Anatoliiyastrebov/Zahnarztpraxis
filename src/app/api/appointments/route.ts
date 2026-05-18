import { NextRequest, NextResponse } from "next/server";
import { appointmentApiSchema } from "@/lib/validations";
import { appointmentRepository } from "@/lib/db";
import { ZodError } from "zod";

export const dynamic = "force-dynamic";

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    total: number;
  };
};

export async function GET() {
  try {
    const appointments = await appointmentRepository.findMany();

    if (appointments.length === 0) {
      const response: ApiResponse<[]> = {
        success: true,
        data: [],
        meta: { total: 0 },
        error: {
          code: "EMPTY",
          message: "Noch keine Terminanfragen vorhanden.",
        },
      };
      return NextResponse.json(response, { status: 200 });
    }

    const response: ApiResponse<typeof appointments> = {
      success: true,
      data: appointments,
      meta: { total: appointments.length },
    };

    return NextResponse.json(response);
  } catch {
    return NextResponse.json<ApiResponse<never>>(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "Termine konnten nicht geladen werden.",
        },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = appointmentApiSchema.parse(body);

    const appointment = await appointmentRepository.create({
      fullName: validated.fullName,
      email: validated.email,
      phone: validated.phone,
      preferredDate: validated.preferredDate,
      service: validated.service,
      message: validated.message || undefined,
    });

    const response: ApiResponse<typeof appointment> = {
      success: true,
      data: appointment,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json<ApiResponse<never>>(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Ungültige Eingabedaten.",
            details: error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json<ApiResponse<never>>(
        {
          success: false,
          error: {
            code: "INVALID_JSON",
            message: "Ungültiges JSON-Format.",
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json<ApiResponse<never>>(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "Terminanfrage konnte nicht gespeichert werden.",
        },
      },
      { status: 500 }
    );
  }
}
