export interface Game {
  id: string;
  date: string;
  awayTeam: string;
  homeTeam: string;
  awayScore: number;
  homeScore: number;
  summary: {
    en: string;
    es: string;
    ja: string;
  };
  events: GameEvent[];
  awayHits: number;
  homeHits: number;
  awayErrors: number;
  homeErrors: number;
  topPerformer: string;
  winningPitcher: string;
}

export interface GameEvent {
  inning: string;
  title: string;
  description: string;
}
