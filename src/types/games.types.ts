export interface GamesState {
  games: IGame[];
  isLoading: boolean;
  error: string;
}

export interface IGame {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface IGameQuery {
  platform?: string;
  category?: string;
  sortByby?: string;
}
