import { useState } from "react";
import { GameRecapList } from "@/components/game-recap-list";
import { FeaturedRecap } from "@/components/featured-recap";
import { SearchBar } from "@/components/search-bar";
import { SortButton } from "@/components/sort-button";
import type { Game } from "@/lib/types";

interface DashboardProps {
  games: Game[];
  onGameSelect: (game: Game) => void;
}

export function Dashboard({ games, onGameSelect }: DashboardProps) {
  const [filteredGames, setFilteredGames] = useState(games);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleSearch = (term: string) => {
    const filtered = games.filter(
      (game) =>
        game.awayTeam.toLowerCase().includes(term.toLowerCase()) ||
        game.homeTeam.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sorted = [...filteredGames].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return newOrder === "asc"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
    setFilteredGames(sorted);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary">MLB Quick Recap</h1>
      <FeaturedRecap game={games[0]} onGameSelect={onGameSelect} />
      <div className="flex justify-between items-center mb-6">
        <SearchBar onSearch={handleSearch} />
        <SortButton onSort={handleSort} sortOrder={sortOrder} />
      </div>
      <GameRecapList games={filteredGames} onGameSelect={onGameSelect} />
    </div>
  );
}
