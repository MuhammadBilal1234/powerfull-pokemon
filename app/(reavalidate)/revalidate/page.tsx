import { AskForSignIn } from "@/app/component/pokemon/AskForSignIn";
import { RenderingList } from "@/app/component/pokemon/RenderingList";
import PokemonGrid from "@/app/data-grids/pokemon";
import { auth } from "@clerk/nextjs";

export const revalidate = 60;

export default function () {
  const { userId } = auth();

  return (
    <>
      <RenderingList />

      <div className="flex-grow flex h-full flex-col">
        {!userId ? (
          <AskForSignIn />
        ) : (
          // @ts-ignore
          <PokemonGrid />
        )}
      </div>
    </>
  );
}
