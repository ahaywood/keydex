// src/db/columns.helpers.ts

import { sql } from "drizzle-orm";
import { int } from "drizzle-orm/sqlite-core";

export const timestamps = {
  updated_at: int("created_at")
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .notNull(),
  created_at: int("created_at")
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .notNull(),
};
