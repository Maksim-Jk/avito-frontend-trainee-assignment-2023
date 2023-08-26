import { useGetGameByIdQuery } from "../store/api/games.api";
import { IGameById } from "../types/games.types";

interface ILocalStorageData {
  data: IGameById;
  timestamp: number;
}

interface IUseGameDataReturn {
  hookGameData?: IGameById;
  isLoading?: boolean;
  isError?: boolean;
  error?: any;
}

export function useGameData1(gameId: string | null) {
  if (gameId) {
    const currentTime = new Date().getTime();
    const cacheTimer = 5 * 60 * 1000;

    const localStorageJSON: string | null = localStorage.getItem("cachedGames");
    const localStorageData: ILocalStorageData[] = localStorageJSON && JSON.parse(localStorageJSON);

    const cachedGame: ILocalStorageData | undefined = localStorageData && localStorageData.find((item) => item.data.id === +gameId);

    if (cachedGame && currentTime - cachedGame.timestamp < cacheTimer) {
        cachedGame.timestamp = currentTime
        const newLocalStorageJSON = JSON.stringify([...localStorageData, cachedGame])
        localStorage.setItem("cachedGames", newLocalStorageJSON)   
        return { hookGameData: cachedGame.data };
    }

    const localStorageDataUpdated = localStorageData.filter(item => item.data.id !== +gameId)

    const {
      data: serverData,
      isLoading,
      isError,
      error,
    } = useGetGameByIdQuery(gameId);


    const newLocalStorageJSON = JSON.stringify([...localStorageDataUpdated, {serverData,timestamp: currentTime }])
    localStorage.setItem("cachedGames", newLocalStorageJSON)   
    return { hookGameData: serverData, isLoading, isError, error }
  }

  // const isGameCached = Boolean(cachedGame && currentTime - cachedGame.timestamp < cacheTimer);
}
