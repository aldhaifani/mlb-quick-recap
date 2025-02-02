"use client";

import { useState } from "react";
import { Dashboard } from "@/components/dashboard";
import { GameRecapDetailed } from "@/components/game-recap-detailed";
import { Navigation } from "@/components/navigation";
import { mockGames } from "@/lib/mock-data";
import type { Game } from "@/lib/types";

export default function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {selectedGame ? (
          <GameRecapDetailed
            game={selectedGame}
            onBack={() => setSelectedGame(null)}
          />
        ) : (
          <Dashboard games={mockGames} onGameSelect={setSelectedGame} />
        )}
      </main>
    </div>
  );
}
