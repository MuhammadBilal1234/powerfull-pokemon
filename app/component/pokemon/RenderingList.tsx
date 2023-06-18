import Link from "next/link";
import { Button } from "../ui/button";

export function RenderingList() {
  return (
    <div className="container py-5">
      <Button asChild variant="secondary">
        <Link href="/">Server Side</Link>
      </Button>
    </div>
  );
}
