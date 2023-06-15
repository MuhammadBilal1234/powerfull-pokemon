"use client";

import { Button } from "../ui/button";

export default function AddPokemon() {
  async function addPokemontoDB() {
    const firstPokemonAPI = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
    const firstPokemon = await firstPokemonAPI.json();

    console.log(firstPokemon);
  }

  return <Button onClick={addPokemontoDB}>Add Pokemon</Button>;
}
