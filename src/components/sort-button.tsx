import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

interface SortButtonProps {
  onSort: () => void;
  sortOrder: "asc" | "desc";
}

export function SortButton({ onSort, sortOrder }: SortButtonProps) {
  return (
    <Button
      onClick={onSort}
      variant="outline"
      className="flex items-center gap-2"
    >
      <ArrowUpDown className="h-4 w-4" />
      Sort by Date ({sortOrder === "asc" ? "Oldest" : "Newest"})
    </Button>
  );
}
