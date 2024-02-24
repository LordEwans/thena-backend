import { integer, json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  address: varchar("address", { length: 256 }).notNull().unique(),
  thenaId: json("thenaId").array().unique(),
  nonce: integer("nonce"),
  followers: integer("followers").array().default([]),
  following: integer("following").array().default([]),
});