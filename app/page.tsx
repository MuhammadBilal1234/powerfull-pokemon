import { auth } from "@clerk/nextjs";
import PokemonGrid from "./data-grids/pokemon";
import { cn } from "@/lib/utils";
import { AskForSignIn } from "./component/pokemon/AskForSignIn";
import { RenderingList } from "./component/pokemon/RenderingList";
import { Button } from "./component/ui/button";
import { Code } from "./component/typography/code";

const UsefulLinks = [
  {
    url: "https://nextjs.org/docs/getting-started/react-essentials",
    title: "Next JS : React Essentials",
  },
  {
    url: "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching",
    title: "Next JS : Data Fetching",
  },
];

// export const dynamic = "force-static";

export default async function Home() {
  const { userId } = auth();

  return (
    <main className="flex flex-col min-h-screen font-manrope">
      <div className={cn("flex-grow flex h-full flex-col")}>
        {!userId ? (
          <AskForSignIn />
        ) : (
          <>
            <div className="container py-5">
              <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                React Server Component
              </h2>

              <p className="leading-7 [&:not(:first-child)]:mt-2 md:w-3/4">
                This Page is rendered on the server. First User is fetched from
                the clerk.dev.If user is loggedIn then grid will appear
                otherwise user will be asked to create acocunt or login.
              </p>
              <p className="text-xl text-muted-foreground mt-2">
                What is Server Component?
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-2 md:w-3/4">
                In Simple Words. Server component get's created on the server.
                User authentication and data fetching can be done on server and
                when it's done. rendered HTML will be send to the client. Server
                component are not interactive. We can't use Hooks, lifecycle
                methods and events. So
              </p>
              <p className="text-xl text-muted-foreground mt-2">
                When to use Server Component?
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-2 md:w-3/4">
                Main advantage to use server components is you can Access
                backend resources (directly), Keep large dependencies on the
                server / Reduce client-side JavaScript. For example. if you are
                using a package such as lodash,moment or other. they have large
                size (to send to the client). So now we can use those packages
                on the RSC and those will not be sent to the clinet. Keeping
                Bundle size very small
              </p>
              <p className="text-xl text-muted-foreground mt-2">
                What's happeing on this Page?
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-2 md:w-3/4">
                I am using @shadcn-ui for UI components. like grid,button and
                inputs.
                <Code>Add Pokemon</Code> and <Code>data-table</Code> are only
                client component on this page. data is being fetched on the
                server and then it's passed to the <Code>data-table</Code>.
                Where
                <Code>Add Pokemon</Code> calls the server action which fetches a
                random pokemon from their API, Validate that reponse with zod
                schema and then store that in <Code>Planetscale</Code> database
                with the help of
                <Code>Drizzle ORM</Code>. When new pokemon is added we
                revalidate the specific route with help of{" "}
                <Code>revalidatePath</Code>
              </p>
              <p className="text-xl text-muted-foreground mt-2">Useful Links</p>
              <div className="my-1 ml-6 list-disc [&>li]:mt-2">
                {UsefulLinks.map((item) => {
                  return (
                    <div>
                      <li>
                        <Button asChild variant="link">
                          <a
                            href={item.url}
                            target="_blank"
                            className="text-lg"
                          >
                            {item.title}
                          </a>
                        </Button>
                      </li>
                    </div>
                  );
                })}
              </div>
            </div>
            <RenderingList />
            <PokemonGrid />
          </>
        )}
      </div>
    </main>
  );
}
