import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Game } from "@/lib/types";

interface GameRecapProps {
  game: Game;
  onGameSelect: (game: Game) => void;
}

export function GameRecap({ game, onGameSelect }: GameRecapProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">
          {game.teams.away.name} @ {game.teams.home.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          {new Date(game.date).toLocaleDateString()}
        </p>
        <p className="text-lg font-semibold mb-2">
          Final: {game.score.away} - {game.score.home}
        </p>
        <p className="mb-4 text-sm">{game.summary.en.slice(0, 100)}...</p>
        <Button onClick={() => onGameSelect(game)} variant="secondary">
          View Recap
        </Button>
      </CardContent>
    </Card>
  );
}
