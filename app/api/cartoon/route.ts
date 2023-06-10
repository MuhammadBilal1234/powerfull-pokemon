import { NextResponse } from "next/server";
import { auth, currentUser, useAuth } from "@clerk/nextjs";

export async function GET(request: Request) {
  const user = await currentUser();

  console.log(user);

  return NextResponse.json({ user });
}
export const dynamic = "auto";

export async function POST() {
  const userId = await auth();
  const user = await currentUser();

  console.log({ user });
  try {
    return NextResponse.json({ asd: "asd", userId });
  } catch (e) {
    return NextResponse.json({ asd: "asd error" });
  }
}
