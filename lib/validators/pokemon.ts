import { z } from "zod";

const pokemonSchema = z.object({
  name: z.string(),
  base_experience: z.number().positive(),
  weight: z.number(),
  id: z.number(),
});

type IPokemon = z.infer<typeof pokemonSchema>;

export function ValidatePokemon(pokemon: IPokemon) {
  try {
    return pokemonSchema.parse(pokemon);
  } catch (e) {
    let err = e;

    if (err instanceof z.ZodError) {
      err = err.issues.map((e) => ({
        path: e.path[0],
        message: e.message,
      }));
    }
    throw err;
  }
}
