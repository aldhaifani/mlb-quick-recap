import type { Game } from "@/lib/types";

interface KeyStatsProps {
  game: Game;
}

export function KeyStats({ game }: KeyStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard title="Hits" value={`${game.awayHits} - ${game.homeHits}`} />
      <StatCard
        title="Errors"
        value={`${game.awayErrors} - ${game.homeErrors}`}
      />
      <StatCard title="Top Performer" value={game.topPerformer} />
      <StatCard title="Winning Pitcher" value={game.winningPitcher} />
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
