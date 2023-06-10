import { UserButton, auth } from "@clerk/nextjs";

export default async function Home() {
  const token = await auth().getToken();

  try {
    const data = await fetch(`http://localhost:3001/api/cartoon`, {
      // cache: "no-cache",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log({ data });

    const response = await data.json();
    console.log({ response });
  } catch (e) {
    console.log({ e });
  }

  const user = auth();

  async function action() {
    "use server";

    const res = fetch("/api/pokemon", {
      method: "POST",
    });
  }

  return (
    <main>
      <UserButton />
      <form action={action}>
        <button type="submit"> handle SUm</button>
      </form>
    </main>
  );
}
