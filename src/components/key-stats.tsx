import type { Game } from "@/lib/types";

interface KeyStatsProps {
  game: Game;
}

export function KeyStats({ game }: KeyStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard title="Hits" value={`${game.away_hits} - ${game.home_hits}`} />
      <StatCard
        title="Errors"
        value={`${game.away_errors} - ${game.home_errors}`}
      />
      <StatCard title="Top Performer" value={game.top_performer} />
      <StatCard title="Winning Pitcher" value={game.winning_pitcher} />
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-muted p-4 rounded-lg">
      <h3 className="text-sm font-medium text-muted-foreground mb-1">
        {title}
      </h3>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}
