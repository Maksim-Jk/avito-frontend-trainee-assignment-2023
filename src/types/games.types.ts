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
  platform: string | null;
  category: string | null;
  sortBy: string | null;
}

export interface IGameById {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: IGameByIdSystemReq;
  screenshots: IGameByIdScreenshot[];
}

export interface IGameByIdScreenshot {
  id: number;
  image: string;
}

export interface IGameByIdSystemReq {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}
