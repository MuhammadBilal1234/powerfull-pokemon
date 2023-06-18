"use client";

import { IPokemon } from "@/app/db/schema/pokemon.schema";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<IPokemon>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "base_experience",
    header: "Experience",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
];
