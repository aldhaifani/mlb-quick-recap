import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MLB Quick Recap
        </Link>
        <div className="space-x-4">
          <Button variant="secondary" asChild>
            <Link href="/">Dashboard</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/about">About</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
