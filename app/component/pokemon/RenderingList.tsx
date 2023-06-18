import Link from "next/link";
import { Button } from "../ui/button";

export function RenderingList() {
  return (
    <div className="container py-5 space-x-3">
      <Button asChild variant="default">
        <Link href="/">Server Side</Link>
      </Button>
      <Button asChild variant="default">
        <Link href="/">Revalidate</Link>
      </Button>
    </div>
  );
}
