import type { Config } from "drizzle-kit";

export default {
  schema: "./app/db/schema/schema.ts",
  out: "./app/db/drizzle",
} satisfies Config;
