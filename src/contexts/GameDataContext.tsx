import React, { createContext, useContext, useState, useEffect } from "react";
import type { Game } from "@/lib/types";

interface CachedData {
  games: Game[];
  selectedTeam: number | null;
  selectedSeason: number | null;
  page: number;
  timestamp: number;
}

const CACHE_KEY = "mlb_quick_recap_cache";
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

const getCachedData = (): CachedData | null => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;

  const data = JSON.parse(cached);
  const now = Date.now();

  if (now - data.timestamp > CACHE_DURATION) {
    localStorage.removeItem(CACHE_KEY);
    return null;
  }

  return data;
};

const setCachedData = (data: Partial<CachedData>) => {
  const existingData = getCachedData();
  const newData = {
    ...existingData,
    ...data,
    timestamp: Date.now(),
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(newData));
};

interface GameDataContextType {
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
  selectedGame: Game | null;
  setSelectedGame: (game: Game | null) => void;
  selectedTeam: number | null;
  setSelectedTeam: (teamId: number | null) => void;
  selectedSeason: number | null;
  setSelectedSeason: (season: number | null) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasMore: boolean;
  setHasMore: (hasMore: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const GameDataContext = createContext<GameDataContextType | undefined>(
  undefined
);

export function GameDataProvider({ children }: { children: React.ReactNode }) {
  const cachedData = getCachedData();

  const [games, setGames] = useState<Game[]>(cachedData?.games || []);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(
    cachedData?.selectedTeam || null
  );
  const [selectedSeason, setSelectedSeason] = useState<number | null>(
    cachedData?.selectedSeason || null
  );
  const [page, setPage] = useState(cachedData?.page || 1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCachedData({
      games,
      selectedTeam,
      selectedSeason,
      page,
    });
  }, [games, selectedTeam, selectedSeason, page]);

  const value = {
    games,
    setGames,
    selectedGame,
    setSelectedGame,
    selectedTeam,
    setSelectedTeam,
    selectedSeason,
    setSelectedSeason,
    page,
    setPage,
    hasMore,
    setHasMore,
    isLoading,
    setIsLoading,
  };

  return (
    <GameDataContext.Provider value={value}>
      {children}
    </GameDataContext.Provider>
  );
}

export function useGameData() {
  const context = useContext(GameDataContext);
  if (context === undefined) {
    throw new Error("useGameData must be used within a GameDataProvider");
  }
  return context;
}
