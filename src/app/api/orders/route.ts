import { NextResponse } from "next/server";
import { createClientOrder, type ClientOrderInput } from "@/db/orders";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requiredFields: Array<keyof ClientOrderInput> = [
  "name",
  "email",
  "category",
  "subcategory",
  "projectTitle",
  "requestType",
  "budget",
  "timeline",
  "details",
];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ClientOrderInput>;

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim().length === 0) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    if (!emailRegex.test(String(body.email))) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const order = await createClientOrder({
      name: String(body.name),
      email: String(body.email),
      phone: body.phone ? String(body.phone) : undefined,
      category: String(body.category),
      subcategory: String(body.subcategory),
      projectTitle: String(body.projectTitle),
      requestType: String(body.requestType),
      budget: String(body.budget),
      timeline: String(body.timeline),
      details: String(body.details),
    });

    return NextResponse.json({ success: true, orderId: order.id }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Order request error:", message);

    return NextResponse.json(
      { error: "Failed to create order request" },
      { status: 500 }
    );
  }
}
