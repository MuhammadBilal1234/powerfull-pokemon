import { DataTable } from "@/app/component/ui/data-table";
import { columns } from "./columns";
import { IPokemon } from "@/app/db/schema/pokemon.schema";
import { getAllPokemons } from "@/app/server-actions/getAllPokemons";

async function getData(): Promise<IPokemon[]> {
  const pokemons = await getAllPokemons();
  return pokemons;
}

export default async function PokemonGrid() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
