import { IGameById } from "../types/games.types";

export interface ILocalStorageData {
  data: IGameById;
  timestamp: number;
}

interface IuseLocalStorageGameDataReturn {
  openedGames: ILocalStorageData[];
  cachedGameData: IGameById | null;
  shouldFetch: boolean;
}

export const cashTime = 5 * 60 * 1000;

export const useLocalStorageGameData = (gameId: string): IuseLocalStorageGameDataReturn => {
  const openedGames: ILocalStorageData[] = JSON.parse(localStorage.getItem("openedGames") || "[]");
  const cachedGameIndex: number | -1 =
    openedGames.length >= 1 && gameId
      ? openedGames.findIndex((game) => game.data.id === +gameId)
      : -1;
  const cachedGameData: IGameById | null =
    cachedGameIndex !== -1 ? openedGames[cachedGameIndex].data : null;

  const shouldFetch = Boolean(
    !cachedGameData || Date.now() - openedGames[cachedGameIndex].timestamp >= cashTime
  );

  return { openedGames, cachedGameData, shouldFetch };
};
