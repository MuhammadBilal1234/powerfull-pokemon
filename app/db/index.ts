import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { pokemon, pokemonRelations } from "./schema/pokemon.schema";
import { pokemonTypes } from "./schema/pokemon-types.schema";
import { eq } from "drizzle-orm";

// create the connection
const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});

export const db = drizzle(connection);
migrate(db, { migrationsFolder: "./app/db/drizzle" })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const string = db
  .select()
  .from(pokemon)
  .leftJoin(pokemonTypes, eq(pokemon.id, pokemonTypes.pokemonId))
  .then((res) => {
    console.log(res);
  });
