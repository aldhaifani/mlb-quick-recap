import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          MLB Quick Recap
        </a>
        <div className="space-x-4">
          <Button variant="secondary" asChild>
            <a href="/">Dashboard</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/about">About</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
