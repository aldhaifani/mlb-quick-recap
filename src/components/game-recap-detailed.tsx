import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Game } from "@/lib/types";

interface GameRecapDetailedProps {
  game: Game;
  onBack: () => void;
}

export function GameRecapDetailed({ game, onBack }: GameRecapDetailedProps) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Button onClick={onBack} variant="ghost" className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
      </Button>
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-2">
            {game.teams.away.name} @ {game.teams.home.name}
          </h2>
          <p className="text-muted-foreground mb-4">
            {new Date(game.date).toLocaleDateString()}
          </p>
          <p className="text-xl font-semibold mb-6">
            Final: {game.score.away} - {game.score.home}
          </p>

          <Tabs defaultValue="timeline">
            <TabsList className="mb-4">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="stats">Key Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="summary">
              <Tabs defaultValue="en">
                <TabsList>
                  <TabsTrigger value="en">English</TabsTrigger>
                  <TabsTrigger value="es">Español</TabsTrigger>
                  <TabsTrigger value="ja">日本語</TabsTrigger>
                </TabsList>
                <TabsContent value="en">
                  <p className="mt-4">{game.summary.en}</p>
                </TabsContent>
                <TabsContent value="es">
                  <p className="mt-4">{game.summary.es}</p>
                </TabsContent>
                <TabsContent value="ja">
                  <p className="mt-4">{game.summary.ja}</p>
                </TabsContent>
              </Tabs>
            </TabsContent>

            <TabsContent value="timeline">
              <div className="relative space-y-0 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-red-500">
                {game.events.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-6 py-4 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white font-medium shrink-0">
                      {event.inning}
                    </div>
                    <div
                      className={`bg-white p-4 rounded-lg border shadow-sm ${
                        index % 2 === 0 ? "ml-4" : "mr-4"
                      } flex-1`}
                    >
                      <h3 className="font-bold text-gray-900 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stats">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">{game.teams.away.name}</h3>
                  <p>Hits: {game.away_hits}</p>
                  <p>Errors: {game.away_errors}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{game.teams.home.name}</h3>
                  <p>Hits: {game.home_hits}</p>
                  <p>Errors: {game.home_errors}</p>
                </div>
                <div className="col-span-2 mt-4">
                  <p className="mb-2">Top Performer: {game.top_performer}</p>
                  <p>Winning Pitcher: {game.winning_pitcher}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
