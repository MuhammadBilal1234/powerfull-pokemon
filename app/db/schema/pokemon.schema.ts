import {
  index,
  int,
  mysqlTable,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";
import { pokemonTypes } from "./pokemon-types.schema";
import { InferModel, relations } from "drizzle-orm";

export const pokemon = mysqlTable(
  "pokemon",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    base_experience: int("base_experience"),
    weight: int("weight"),
  },
  (table) => {
    return {
      idIdx: index("id_idx").on(table.id),
      nameIdx: index("name_idx").on(table.name),
    };
  }
);

export const pokemonRelations = relations(pokemon, ({ many }) => ({
  pokemonTypes: many(pokemonTypes),
}));

export type IPokemon = InferModel<typeof pokemon>;
export type INewPokemon = InferModel<typeof pokemon, "insert">;
