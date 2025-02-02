import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { GameTimeline } from "@/components/game-timeline";
import { KeyStats } from "@/components/key-stats";
import { ArrowLeft } from "lucide-react";
import type { Game } from "@/lib/types";

interface GameRecapDetailedProps {
  game: Game;
  onBack: () => void;
}

export function GameRecapDetailed({ game, onBack }: GameRecapDetailedProps) {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="ghost" className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {game.awayTeam} @ {game.homeTeam}
          </CardTitle>
          <p className="text-muted-foreground">{game.date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold mb-4">
            Final: {game.awayScore} - {game.homeScore}
          </p>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="stats">Key Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-4">
              <Tabs defaultValue="en">
                <TabsList>
                  <TabsTrigger value="en">English</TabsTrigger>
                  <TabsTrigger value="es">Español</TabsTrigger>
                  <TabsTrigger value="ja">日本語</TabsTrigger>
                </TabsList>
                <TabsContent value="en">
                  <p>{game.summary.en}</p>
                </TabsContent>
                <TabsContent value="es">
                  <p>{game.summary.es}</p>
                </TabsContent>
                <TabsContent value="ja">
                  <p>{game.summary.ja}</p>
                </TabsContent>
              </Tabs>
            </TabsContent>
            <TabsContent value="timeline" className="mt-4">
              <GameTimeline events={game.events} />
            </TabsContent>
            <TabsContent value="stats" className="mt-4">
              <KeyStats game={game} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
