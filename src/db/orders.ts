import { desc, sql } from "drizzle-orm";
import { db } from "@/db";
import { clientOrders } from "@/db/schema";

export type ClientOrderInput = {
  name: string;
  email: string;
  phone?: string;
  category: string;
  subcategory: string;
  projectTitle: string;
  requestType: string;
  budget: string;
  timeline: string;
  details: string;
};

export async function ensureClientOrdersTable() {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS client_orders (
      id serial PRIMARY KEY,
      name text NOT NULL,
      email text NOT NULL,
      phone text,
      category text NOT NULL,
      subcategory text NOT NULL,
      project_title text NOT NULL,
      request_type text NOT NULL,
      budget text NOT NULL,
      timeline text NOT NULL,
      details text NOT NULL,
      status text NOT NULL DEFAULT 'new',
      created_at timestamp NOT NULL DEFAULT now()
    )
  `);
}

export async function createClientOrder(input: ClientOrderInput) {
  await ensureClientOrdersTable();

  const [order] = await db
    .insert(clientOrders)
    .values({
      name: input.name.trim(),
      email: input.email.trim(),
      phone: input.phone?.trim() || null,
      category: input.category.trim(),
      subcategory: input.subcategory.trim(),
      projectTitle: input.projectTitle.trim(),
      requestType: input.requestType.trim(),
      budget: input.budget.trim(),
      timeline: input.timeline.trim(),
      details: input.details.trim(),
    })
    .returning();

  return order;
}

export async function getClientOrders() {
  await ensureClientOrdersTable();

  return db.select().from(clientOrders).orderBy(desc(clientOrders.createdAt));
}
