import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  read: boolean("read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const clientOrders = pgTable("client_orders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  category: text("category").notNull(),
  subcategory: text("subcategory").notNull(),
  projectTitle: text("project_title").notNull(),
  requestType: text("request_type").notNull(),
  budget: text("budget").notNull(),
  timeline: text("timeline").notNull(),
  details: text("details").notNull(),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const serviceOrders = pgTable("service_orders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp").notNull(),
  category: text("category").notNull(),
  subcategory: text("subcategory").notNull(),
  budget: text("budget").notNull(),
  description: text("description").notNull(),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
