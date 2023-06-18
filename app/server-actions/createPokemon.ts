"use server";

import { ValidatePokemon } from "@/lib/validators/pokemon";
import { db } from "../db";
import { pokemon } from "../db/schema/pokemon.schema";
import { revalidatePath } from "next/cache";
import { useToast } from "../component/ui/use-toast";

export async function createPokemon() {
  // fetching from pokemon API
  const firstPokemonAPI = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
  const firstPokemon = await firstPokemonAPI.json();

  // Validate fetched Pokemon Response
  const parsedPokemon = ValidatePokemon(firstPokemon);

  await db.insert(pokemon).values(parsedPokemon);

  revalidatePath("/");
}
