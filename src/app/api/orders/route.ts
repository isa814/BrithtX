import { NextResponse } from "next/server";
import { createServiceOrder, type ServiceOrderInput } from "@/db/orders";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requiredFields: Array<keyof ServiceOrderInput> = [
  "name",
  "email",
  "whatsapp",
  "category",
  "subcategory",
  "budget",
  "description",
];

const labels: Record<keyof ServiceOrderInput, string> = {
  name: "Full name",
  email: "Email",
  whatsapp: "WhatsApp number",
  category: "Service category",
  subcategory: "Subcategory",
  budget: "Budget range",
  description: "Project description",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ServiceOrderInput>;

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim().length === 0) {
        return NextResponse.json(
          { error: `${labels[field]} is required.` },
          { status: 400 }
        );
      }
    }

    if (!emailRegex.test(String(body.email).trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const order = await createServiceOrder({
      name: String(body.name),
      email: String(body.email),
      whatsapp: String(body.whatsapp),
      category: String(body.category),
      subcategory: String(body.subcategory),
      budget: String(body.budget),
      description: String(body.description),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project request has been submitted successfully.",
        orderId: order.id,
      },
      { status: 201 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Service order request error:", message);

    return NextResponse.json(
      { error: "Failed to submit project request. Please try again." },
      { status: 500 }
    );
  }
}
