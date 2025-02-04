"use client";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "@/components/dashboard";
import { GameRecapDetailed } from "@/components/game-recap-detailed";
import { Navigation } from "@/components/navigation";
import type { Game, ApiResponse } from "@/lib/types";
import { teams } from "@/lib/teams";
import AboutPage from "@/about";
import { Button } from "./components/ui/button";
import { ArrowUp } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from(
  { length: CURRENT_YEAR - 1007 },
  (_, i) => CURRENT_YEAR - i
);

export default function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const fetchGames = async () => {
    if (!selectedTeam || !selectedSeason) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://mld-quick-recap-backend-150472142616.us-central1.run.app/api/1/games?season=${selectedSeason}&team_id=${selectedTeam}&page=${page}`
      );
      const data: ApiResponse = await response.json();
      setGames((prevGames) => [...prevGames, ...data.games]);
      setHasMore(data.games.length > 0);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setGames([]);
    setPage(1);
    setHasMore(true);
    fetchGames();
  };

  const handleLoadMore = () => {
    fetchGames();
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <main className="container mx-auto px-4 py-8">
                {selectedGame ? (
                  <GameRecapDetailed
                    game={selectedGame}
                    onBack={() => setSelectedGame(null)}
                  />
                ) : (
                  <>
                    <Dashboard
                      games={games}
                      onGameSelect={setSelectedGame}
                      teams={teams}
                      years={YEARS}
                      selectedTeam={selectedTeam}
                      selectedSeason={selectedSeason}
                      onTeamChange={setSelectedTeam}
                      onSeasonChange={setSelectedSeason}
                      onLoad={handleLoad}
                      isLoading={isLoading}
                    />
                    {games.length > 0 && hasMore && (
                      <div className="mt-8 text-center">
                        <Button onClick={handleLoadMore} disabled={isLoading}>
                          {isLoading ? "Loading..." : "Load More"}
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </main>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        {showBackToTop && (
          <Button
            className="fixed bottom-4 right-4 rounded-full p-2"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        )}
      </div>
    </BrowserRouter>
  );
}
