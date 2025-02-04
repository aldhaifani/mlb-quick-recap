import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="bg-primary text-primary-foreground p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          <div className="flex gap-2 items-center justify-start">
            <img
              src="/mlb-quick-recap-icon.png"
              alt="MLB Quick Recap Icon"
              className="h-6"
            />
            <p>MLB Quick Recap</p>
          </div>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Button variant="secondary" asChild>
            <a href="/">Dashboard</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/about">About</a>
          </Button>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden mobile-menu-container">
          <Button
            variant="secondary"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <Menu className="h-6 w-6" />
          </Button>
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 py-2 w-48 bg-white rounded-md shadow-xl border border-gray-200">
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </a>
              <a
                href="/about"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
