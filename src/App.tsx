"use client";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "@/components/dashboard";
import { AnnouncementBar } from "@/components/announcement-bar";
import { GameRecapDetailed } from "@/components/game-recap-detailed";
import { Navigation } from "@/components/navigation";
import type { ApiResponse, Game } from "@/lib/types";
import { teams } from "@/lib/teams";
import AboutPage from "@/about";
import { Button } from "@/components/ui/button";
import { ArrowUp, Loader2 } from "lucide-react";
import { GameDataProvider, useGameData } from "@/contexts/GameDataContext";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from(
  { length: CURRENT_YEAR - 2007 + 1 },
  (_, i) => CURRENT_YEAR - i
);

function AppContent() {
  const {
    games,
    setGames,
    selectedGame,
    setSelectedGame,
    selectedTeam,
    selectedSeason,
    setSelectedTeam,
    setSelectedSeason,
    page,
    setPage,
    hasMore,
    setHasMore,
    isLoading,
    setIsLoading,
  } = useGameData();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchGames = async (isLoadMore = false) => {
    if (!selectedTeam || !selectedSeason) return;

    const loadingState = isLoadMore ? setIsLoadingMore : setIsLoading;
    loadingState(true);
    try {
      const response = await fetch(
        `https://mld-quick-recap-backend-150472142616.us-central1.run.app/api/1/games?season=${selectedSeason}&team_id=${selectedTeam}&page=${page}`
      );
      const data: ApiResponse = await response.json();
      if (isLoadMore) {
        setGames((prevGames: Game[]) => {
          const newGames = data.games.filter(
            (newGame) =>
              !prevGames.some((existingGame) => existingGame.id === newGame.id)
          );
          return [...prevGames, ...newGames];
        });
      } else {
        setGames(data.games);
      }
      setHasMore(data.games.length > 0);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
    loadingState(false);
  };

  const handleLoad = () => {
    setGames([]);
    setPage(1);
    setHasMore(true);
    fetchGames(false);
  };

  const handleLoadMore = () => {
    fetchGames(true);
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
    <div className="min-h-screen bg-background">
      <Navigation />
      {window.location.pathname === "/" && !selectedGame && <AnnouncementBar />}
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
                      <Button onClick={handleLoadMore} disabled={isLoadingMore}>
                        {isLoadingMore ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Loading More...
                          </>
                        ) : (
                          "Load More"
                        )}
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GameDataProvider>
        <AppContent />
      </GameDataProvider>
    </BrowserRouter>
  );
}
