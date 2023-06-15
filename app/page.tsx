import { UserButton, auth, SignInButton } from "@clerk/nextjs";
import PokemonGrid from "./data-grids/pokemon";

import { db } from "./db";
import { Button } from "./component/ui/button";
import AddPokemon from "./component/pokemon/AddPokemon";

export default async function Home() {
  const { userId } = auth();

  return (
    <main className="flex flex-col min-h-screen font-manrope">
      <Navbar hasUserLoggedIn={!userId} />
      <div className="flex-grow flex h-full flex-col">
        {!userId ? (
          <AskForSignIn />
        ) : (
          // @ts-ignore
          <PokemonGrid />
        )}
      </div>
    </main>
  );
}

function AskForSignIn() {
  return (
    <main className="flex items-center justify-center flex-grow h-full">
      <p
        className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0
"
      >
        Please Sign In to View The Table
      </p>
    </main>
  );
}

function Navbar({ hasUserLoggedIn }: { hasUserLoggedIn: Boolean }) {
  return (
    <main className="bg-gray-600 w-full">
      <nav className="w-full py-4  container flex items-center justify-between">
        <p
          className="scroll-m-20 text-white text-2xl font-semibold tracking-tight
"
        >
          React Server Component
        </p>

        {hasUserLoggedIn ? (
          <SignInButton>
            <main className="text-white cursor-pointer border hover:border border-white/25 py-2 px-4 rounded-lg">
              Sign In
            </main>
          </SignInButton>
        ) : (
          <UserButton />
        )}
      </nav>
    </main>
  );
}
