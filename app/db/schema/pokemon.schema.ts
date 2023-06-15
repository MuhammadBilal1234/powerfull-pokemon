import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { pokemonTypes } from "./pokemon-types.schema";
import { relations } from "drizzle-orm";

export const pokemon = mysqlTable("pokemon", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  baseExperience: int("base_experience"),
  weight: int("weight"),
});

export const pokemonRelations = relations(pokemon, ({ many }) => ({
  pokemonTypes: many(pokemonTypes),
}));
