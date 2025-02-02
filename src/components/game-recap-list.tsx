import { GameRecap } from "@/components/game-recap";
import type { Game } from "@/lib/types";

interface GameRecapListProps {
  games: Game[];
  onGameSelect: (game: Game) => void;
}

export function GameRecapList({ games, onGameSelect }: GameRecapListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <GameRecap key={game.id} game={game} onGameSelect={onGameSelect} />
      ))}
    </div>
  );
}
