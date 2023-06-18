"use server";

import { db } from "../db";
import { pokemon } from "../db/schema/pokemon.schema";

export async function getAllPokemons() {
  try {
    return (await db.select().from(pokemon)).sort((a, b) => b.id - a.id);
  } catch (e) {
    throw e;
  }
}
