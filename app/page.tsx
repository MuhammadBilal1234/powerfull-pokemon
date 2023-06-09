import { SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SignInButton />
    </main>
  );
}
