import { GameRecap } from "@/components/game-recap";
import { GameRecapSkeleton } from "@/components/game-recap-skeleton";
import type { Game } from "@/lib/types";

interface GameRecapListProps {
  games: Game[];
  onGameSelect: (game: Game) => void;
  isLoading?: boolean;
}

export function GameRecapList({
  games,
  onGameSelect,
  isLoading,
}: GameRecapListProps) {
  if (isLoading && games.length === 0) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <GameRecapSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <GameRecap key={game.id} game={game} onGameSelect={onGameSelect} />
      ))}
      {isLoading && (
        <>
          {Array.from({ length: 3 }).map((_, i) => (
            <GameRecapSkeleton key={`loading-${i}`} />
          ))}
        </>
      )}
    </div>
  );
}
