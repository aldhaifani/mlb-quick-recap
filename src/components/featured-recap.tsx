import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Game } from "@/lib/types";

interface FeaturedRecapProps {
  game: Game;
  onGameSelect: (game: Game) => void;
}

export function FeaturedRecap({ game, onGameSelect }: FeaturedRecapProps) {
  return (
    <Card className="bg-accent text-accent-foreground">
      <CardHeader>
        <CardTitle className="text-2xl">Featured Recap</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold mb-2">
          {game.awayTeam} @ {game.homeTeam}
        </h2>
        <p className="text-sm mb-2">{game.date}</p>
        <p className="text-lg font-semibold mb-4">
          Final: {game.awayScore} - {game.homeScore}
        </p>
        <p className="mb-4">{game.summary.en.slice(0, 150)}...</p>
        <Button onClick={() => onGameSelect(game)}>View Full Recap</Button>
      </CardContent>
    </Card>
  );
}
