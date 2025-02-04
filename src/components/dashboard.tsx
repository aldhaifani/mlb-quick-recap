import { useState } from "react";
import { GameRecapList } from "@/components/game-recap-list";
import { TeamSelect } from "@/components/team-select";
import { SeasonSelect } from "@/components/season-select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowUpDown } from "lucide-react";
import type { Game, Team } from "@/lib/types";

interface DashboardProps {
  games: Game[];
  onGameSelect: (game: Game) => void;
  teams: Team[];
  years: number[];
  selectedTeam: number | null;
  selectedSeason: number | null;
  onTeamChange: (teamId: number) => void;
  onSeasonChange: (year: number) => void;
  onLoad: () => void;
  isLoading: boolean;
}

export function Dashboard({
  games,
  onGameSelect,
  teams,
  years,
  selectedTeam,
  selectedSeason,
  onTeamChange,
  onSeasonChange,
  onLoad,
  isLoading,
}: DashboardProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filteredGames = games
    .filter(
      (game) =>
        game.teams.away.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.teams.home.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "asc"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary">MLB Quick Recap</h1>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <TeamSelect
            teams={teams}
            selectedTeam={selectedTeam}
            onTeamChange={onTeamChange}
          />
          <SeasonSelect
            years={years}
            selectedSeason={selectedSeason}
            onSeasonChange={onSeasonChange}
          />
          <Button
            onClick={onLoad}
            disabled={!selectedTeam || !selectedSeason || isLoading}
          >
            {isLoading ? "Loading..." : "Load"}
          </Button>
        </div>
        {games.length > 0 && (
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search teams..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-8 w-full sm:w-[200px]"
              />
            </div>
            <Button
              variant="outline"
              onClick={handleSort}
              className="flex items-center gap-2"
            >
              <ArrowUpDown className="h-4 w-4" />
              {sortOrder === "asc" ? "Oldest First" : "Newest First"}
            </Button>
          </div>
        )}
      </div>
      <GameRecapList games={filteredGames} onGameSelect={onGameSelect} />
    </div>
  );
}
