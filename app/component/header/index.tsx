import { SignInButton, UserButton } from "@clerk/nextjs";

export function Navbar({ hasUserLoggedIn }: { hasUserLoggedIn: Boolean }) {
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
