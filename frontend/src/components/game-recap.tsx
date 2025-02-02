import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Game } from "@/lib/types";

interface GameRecapProps {
  game: Game;
  onGameSelect: (game: Game) => void;
}

export function GameRecap({ game, onGameSelect }: GameRecapProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">
          {game.awayTeam} @ {game.homeTeam}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{game.date}</p>
        <p className="text-lg font-semibold mb-2">
          Final: {game.awayScore} - {game.homeScore}
        </p>
        <p className="mb-4 text-sm">{game.summary.en.slice(0, 100)}...</p>
        <Button onClick={() => onGameSelect(game)} variant="secondary">
          View Recap
        </Button>
      </CardContent>
    </Card>
  );
}
