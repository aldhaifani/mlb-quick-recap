export interface Team {
  id: number;
  name: string;
}

export interface GameStatus {
  abstract_game_state: string;
  detailed_state: string;
  status_code: string;
  is_final: boolean;
}

export interface GameEvent {
  inning: string;
  title: string;
  description: string;
}

export interface Game {
  id: number;
  game_type: string;
  date: string;
  status: GameStatus;
  teams: {
    away: Team;
    home: Team;
  };
  score: {
    away: number;
    home: number;
  };
  venue: string;
  away_hits: number;
  home_hits: number;
  away_errors: number;
  home_errors: number;
  top_performer: string;
  winning_pitcher: string;
  summary: {
    en: string;
    es: string;
    ja: string;
  };
  events: GameEvent[];
}

export interface ApiResponse {
  total_items: number;
  games: Game[];
}
