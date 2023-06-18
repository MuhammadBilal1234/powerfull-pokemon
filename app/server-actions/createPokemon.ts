"use server";

import { ValidatePokemon } from "@/lib/validators/pokemon";
import { db } from "../db";
import { pokemon } from "../db/schema/pokemon.schema";
import { revalidatePath } from "next/cache";

export async function createPokemon() {
  // fetching from pokemon API
  const firstPokemonAPI = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1000)}/`
  );
  const firstPokemon = await firstPokemonAPI.json();

  // Validate fetched Pokemon Response
  const parsedPokemon = ValidatePokemon(firstPokemon);

  await db.insert(pokemon).values(parsedPokemon);

  revalidatePath("/");
}
