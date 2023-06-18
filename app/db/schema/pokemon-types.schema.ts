import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { pokemon } from "./pokemon.schema";
import { relations } from "drizzle-orm";

export const pokemonTypes = mysqlTable("pokmeon_types", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 256 }),
  url: varchar("url", { length: 256 }),
  pokemonId: int("pokemon_id"),
});

export const pokemonTypesRelations = relations(pokemonTypes, ({ one }) => ({
  pokemon: one(pokemon, {
    fields: [pokemonTypes.pokemonId],
    references: [pokemon.id],
  }),
}));
